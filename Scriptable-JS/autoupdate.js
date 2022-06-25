let currentVersion = "Dictionary (currentVersion)";
var bool = ""; 

let req = new Request("https://raw.githubusercontent.com/Andreag00/ShorteNB/main/version");
let data = await req.load();
latestVersion = data.toRawString();

if (latestVersion == currentVersion) {
  bool = 1;
  return{bool};
} else {
  let req2 = new Request("https://raw.githubusercontent.com/Andreag00/ShorteNB/main/changelog");
  let data2 = await req2.load();
  changelog = data2.toRawString();
  bool = 0;
  return{bool,changelog,latestVersion};
}

Script.complete();