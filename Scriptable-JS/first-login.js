// Create alert, set title and message
const loginAlert = new Alert();
loginAlert.title = "🔐 LTE Italy Log In 🔐";
loginAlert.message = "Inserire username e password di LTE Italy.\n\n⚠️ Le credenziali vengono salvate solo sul proprio dispositivo.\nLo sviluppatore declina ogni responsabilità in caso di compromissione di dati personali. ⚠️";

// Add text input fields
const usernameField = loginAlert.addTextField("Username");
usernameField.setEmailAddressKeyboard();
loginAlert.addSecureTextField("Password");

// Add actions
loginAlert.addAction("OK");
loginAlert.addCancelAction("Cancel");

// Present, and exit if user cancels
const loginActionIndex = await loginAlert.present();
if (loginActionIndex === -1) {
  return;
}

let username = loginAlert.textFieldValue(0);
let password = loginAlert.textFieldValue(1);

Keychain.set("username",username);
Keychain.set("password",password);

var cookies = "";

let req = new Request("https://lteitaly.it/api/AV1.php");
req.method = "POST";
req.headers = { "Content-Type": "application/json;charset=UTF-8" };
req.body = "[\"login\",\""+ username +"\",\"" + password + "\",true]";
let res = await req.load();
req.response.cookies;

for (const cookie of req.response.cookies) {
  cookies += cookie.name + "=" + cookie.value + "; ";
}


Keychain.set("cookie", cookies);

// Return to Shortcuts after login to continue first setup
Safari.open("shortcuts://");

Script.complete();