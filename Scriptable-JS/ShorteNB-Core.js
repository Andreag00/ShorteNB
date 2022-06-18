let CellID = CellID;

let MNC1 = MNC1;
let MNC2 = MNC2;

var eNB, acteNB, CID, band, actMNC = "";

eNB = Math.floor(CellID / 256);
acteNB = eNB
CID = CellID % 256;

if (eNB >= 10000 && eNB <= 99999) {
    band = [,20,,3,1,7,,,,8,,20,,3,1,7][~~(CID / 10)];
    actMNC = 22210;
} else if (eNB >= 100000 && eNB <= 999999) {
    if (MNC1 == 22288 || MNC2 == 22288) {
        actMNC = 22288
        if (eNB >= 502000 && Math.floor(eNB/1000) % 2 != 0) {
            eNB -= 401000
        } else if (Math.floor(eNB/1000) % 2 != 0) {
            eNB -= 1000;
        }
        band = [3,20,7,1,38][~~(CID / 6)];
    } else {
        actMNC = 2221
        band = [,,7,1,3,,20][~~(CID / 10)];
    }
} else if(eNB >= 1000000 && eNB <= 1100000) {
    actMNC = 22250;
    band = [,,1,,"7 COVID",,7,28,3][~~(CID / 10)];
}

var bool = Keychain.contains("cookie");

if (bool == false) {
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
}

return{eNB, acteNB, CID, band, actMNC};

Script.complete();