if (Keychain.contains("setup") == false) {
    Keychain.set("setup","false")
}
let bool = Keychain.get("setup");
return{bool};
Script.complete();