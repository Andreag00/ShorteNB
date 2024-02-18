let username = Keychain.get("username");
let password = Keychain.get("password");
let MNC1 = Keychain.get("MNC1");
let MNC2 = Keychain.get("MNC2");
return{username, password, MNC1, MNC2};
Script.complete();