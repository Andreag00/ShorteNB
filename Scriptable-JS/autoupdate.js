let currentVersion = "Dictionary (currentVersion)";
var bool = ""; 

let req = new Request("https://raw.githubusercontent.com/Andreag00/ShorteNB/main/version");
let data = await req.load();
latestVersion = data.toRawString();

if (latestVersion == currentVersion) {
  bool = 1;
  return{bool};
} else {
  bool = 0;
  return{bool,latestVersion};
}

Script.complete();