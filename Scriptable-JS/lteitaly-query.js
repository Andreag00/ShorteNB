var cookies = Keychain.get("cookie");

let req2 = new Request("https://lteitaly.it/internal/v3/api.php");
req2.method = "POST";
req2.headers = { "Content-Type": "application/json;charset=UTF-8", "Cookie": cookies, "Referer": "https://lteitaly.it" };
req2.body = "[\"databyenb3\",\"MNC\",\"eNBR\"]";
let json = await req2.loadJSON();

let statusCode = req2.response['statusCode'];

if (statusCode == 200) {
  let Name = json[0] 
  let LTE_Bands = json[1].split("~").filter(it => it).join(", ") 
  let NR_Bands = json[2].split("~").filter(it => it).join(", ") 

  let associateIndex =  ["AAU mmWave","TDD sub-6GHz","FDD","DSS","Altro"];
  let associateDigit = ["Off","Presente","Passivo","Inter-site","Permessi","Altro"];
  let NR_Info = [...json[3]].map((it, index) => [associateIndex[index], associateDigit[it]].join(": ")).join(", ")

  return{Name,LTE_Bands,NR_Bands,NR_Info};
  Script.complete();
} else {
  return{statusCode};
  Script.complete();
}