// Variable Declaration

var cookies = Keychain.get("cookie");
var newcookies = "";

// Function definition

function decodeHTMLEntities(text) { var entities = [ ['amp', '&'], ['apos', '\''], ['#x27', '\''], ['#x2F', '/'], ['#39', '\''], ['#039','\''], ['#47', '/'], ['lt', '<'], ['gt', '>'], ['nbsp', ' '], ['quot', '"'] ]; for (var i = 0, max = entities.length; i < max; ++i) text = text.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]); return text; }

// Query LTE Italy APIs
let req = new Request("https://lteitaly.it/internal/v3/api.php"); 
req.method = "POST"; 
req.headers = { "Content-Type": "application/json;charset=UTF-8", "Cookie": cookies, "Referer": "https://lteitaly.it" }; 
req.body = "[\"databyenb3\",\"actMNC\",\"eNB\"]"; 

//Check if cookie has expired, if it has update it and quit the shortcut
if(await req.loadString() != "Forbidden") {

  let json = await req.loadJSON(); 

  // Process and Update Cookie

  req.response.cookies;

  for (const cookie of req.response.cookies) {
    newcookies += cookie.name + "=" + cookie.value + "; ";
  }

  Keychain.remove("cookie");
  Keychain.set("cookie",newcookies);
   
  //Process received data

  let Name = decodeHTMLEntities(json[0]);  
  let LTE_Bands = json[1].split("~").filter(it => it).join(", ")  
  let NR_Bands = json[2].split("~").filter(it => it).join(", ")  
 
  let associateIndex =  ["- AAU mmWave","- TDD Sub-6GHz","- FDD","- DSS","- Altro"]; 
  let associateDigit = ["No","","Passivo","Intersite","-","Ignoto"]; 
  let NR_Info = [...json[3]].map((it, index) => [associateIndex[index], associateDigit[it]]).filter(it => it[1] !== 'No').map(it => it.join(" ")).join("\n") 
  
  return{Name,LTE_Bands,NR_Bands,NR_Info};
  Script.complete();
} else {
  
  //Update expired cookie
  let user = "username";
  let password = "password";
  
  let loginReq = new Request("https://lteitaly.it/api/AV1.php");
  loginReq.method = "POST";
  loginReq.headers = { "Content-Type": "application/json;charset=UTF-8" };
  loginReq.body = "[\"login\",\""+ user +"\",\"" + password +"\",true]";;
  await loginReq.load();
  loginReq.response.cookies;

  // Process and Save Cookie

  for (const cookie of loginReq.response.cookies) {
    newcookies += cookie.name + "=" + cookie.value + "; ";
  }

  Keychain.set("cookie", newcookies);
  Script.complete();
}