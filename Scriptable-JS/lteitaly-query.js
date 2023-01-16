// Variable Declaration

var cookies = Keychain.get("cookie")
var newcookies = ""

// Function definition

function decodeHTMLEntities(text) { var entities = [ ['amp', '&'], ['apos', '\''], ['#x27', '\''], ['#x2F', '/'], ['#39', '\''], ['#039','\''], ['#47', '/'], ['lt', '<'], ['gt', '>'], ['nbsp', ' '], ['quot', '"'] ]; for (var i = 0, max = entities.length; i < max; ++i) text = text.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]); return text; }

// Query LTE Italy APIs
let req2 = new Request("https://lteitaly.it/internal/v3/api.php"); 
req2.method = "POST"; 
req2.headers = { "Content-Type": "application/json;charset=UTF-8", "Cookie": cookies, "Referer": "https://lteitaly.it" }; 
req2.body = "[\"databyenb3\",\"actMNC\",\"eNB\"]"; 
let json = await req2.loadJSON(); 

// Process and Update Cookie

req2.response.cookies;

for (const cookie of req2.response.cookies) {
    newcookies += cookie.name + "=" + cookie.value + "; ";
}

Keychain.remove("cookie");
Keychain.set("cookie",newcookies);

// Check response, if 403 login again in the next action, otherwise process data returned by LTE Italy and return it to ShorteNB

if (json != -1) { 
  let Name = json[0]  
  let LTE_Bands = json[1].split("~").filter(it => it).join(", ")  
  let NR_Bands = json[2].split("~").filter(it => it).join(", ") 

  Name = decodeHTMLEntities(Name); 
 
  let associateIndex =  ["- AAU mmWave","- TDD Sub-6GHz","- FDD","- DSS","- Altro"]; 
  let associateDigit = ["No","","Passivo","Intersite","-","Ignoto"]; 
  let NR_Info = [...json[3]].map((it, index) => [associateIndex[index], associateDigit[it]]).filter(it => it[1] !== 'No').map(it => it.join(" ")).join("\n") 
 
  return{Name,LTE_Bands,NR_Bands,NR_Info}; 
  Script.complete();
} else {
  let newLogin = 1;
  let user = "username";
  let password = "password";
  let cookies = "";

  // Remove login cookies, then generate new ones

  Keychain.remove("cookie");

  let req = new Request("https://lteitaly.it/api/AV1.php");
  req.method = "POST";
  req.headers = { "Content-Type": "application/json;charset=UTF-8" };
  req.body = "[\"login\",\""+ user +"\",\"" + password + "\",true]";
  let res = await req.load();
  req.response.cookies;

  for (const cookie of req.response.cookies) {
      cookies += cookie.name + "=" + cookie.value + "; ";
  }

  Keychain.set("cookie", cookies);
  return{newLogin};
  Script.complete();
}

Script.complete();