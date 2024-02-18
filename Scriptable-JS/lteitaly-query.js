// Variable Declaration

var cookies = "";
var Name = "", LTE_Bands = "", NR_Bands = "", NR_Info = "";

// Function Definition

// Fix special characters
function decodeHTMLEntities(text) { var entities = [ ['amp', '&'], ['apos', '\''], ['#x27', '\''], ['#x2F', '/'], ['#39', '\''], ['#039','\''], ['#47', '/'], ['lt', '<'], ['gt', '>'], ['nbsp', ' '], ['quot', '"'] ]; for (var i = 0, max = entities.length; i < max; ++i) text = text.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]); return text; }


// Query LTE Italy APIs
async function eNBRequest(savedcookie) {
  var updatedcookies = "";
  let req = new Request("https://lteitaly.it/internal/v3/api.php"); 
  req.method = "POST"; 
  req.headers = { "Content-Type": "application/json;charset=UTF-8", "Cookie": savedcookie, "Referer": "https://lteitaly.it" }; 
  req.body = "[\"databyenb3\",\"actMNC\",\"acteNB\"]";
  let json = await req.loadJSON(); 
  
  // Process and Update Cookie
  req.response.cookies;
  for (const cookie of req.response.cookies) {
    updatedcookies += cookie.name + "=" + cookie.value + "; ";
  }
  Keychain.remove("cookie");
  Keychain.set("cookie",updatedcookies);

  // Process received data
  let Name = decodeHTMLEntities(json[0]);  
  let LTE_Bands = json[1].split("~").filter(it => it).join(", ")  
  let NR_Bands = json[2].split("~").filter(it => it).join(", ")  
  let associateIndex =  ["- AAU mmWave","- TDD Sub-6GHz","- FDD","- DSS","- Altro"]; 
  let associateDigit = ["No","","Passivo","Intersite","-","Ignoto"]; 
  let NR_Info = [...json[3]].map((it, index) => [associateIndex[index], associateDigit[it]]).filter(it => it[1] !== 'No').map(it => it.join(" ")).join("\n") 
  return[Name,LTE_Bands,NR_Bands,NR_Info];
}

// Login
async function login() {
  var newcookies = "";
  let user = "username";
  let password = "password";
  let loginReq = new Request("https://lteitaly.it/api/AV1.php");
  loginReq.method = "POST";
  loginReq.headers = { "Content-Type": "application/json;charset=UTF-8" };
  loginReq.body = "[\"login\",\""+ user +"\",\""+ password +"\",true]";;
  await loginReq.load();
  
  // Process and Save Cookie
  loginReq.response.cookies;
  for (const cookie of loginReq.response.cookies) {
    newcookies += cookie.name + "=" + cookie.value + "; ";
  }
  Keychain.remove("cookie");
  Keychain.set("cookie", newcookies);
  return newcookies;
}

// Query LTE Italy APIs
 
try {
  
  // Check cookie composition, login again if the cookie is malformed
  if(Keychain.get("cookie").startsWith("undefined")) {
    cookies = await login();
  } else {
    cookies = Keychain.get("cookie");
  }
  
  // Try query
  [Name, LTE_Bands, NR_Bands, NR_Info] = await eNBRequest(cookies);
  return{Name, LTE_Bands, NR_Bands, NR_Info};
  
} catch(err) {
  
  // If query fails, enter this part of the script: login again first, then execute query with new cookies
  [Name, LTE_Bands, NR_Bands, NR_Info] = await eNBRequest(await login());
  return{Name, LTE_Bands, NR_Bands, NR_Info};
}
Script.complete();