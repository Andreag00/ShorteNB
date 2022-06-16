let user = "Dictionary (username)";
let password = "Dictionary (password)";
let cookies = "";
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

Script.complete();