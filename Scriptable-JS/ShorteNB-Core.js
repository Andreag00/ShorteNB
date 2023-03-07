// Variable Declaration

let CellID = CellID;
let MNC1 = MNC1;
let MNC2 = MNC2;
let user = "username";
let password = "password";

var eNB, acteNB, CID, band, actMNC, cookies, MNO = "";

// eNB/CID Calculation

eNB = Math.floor(CellID / 256);
acteNB = eNB
CID = CellID % 256;

// Band Determination 

if (eNB >= 10000 && eNB <= 99999) {
    // Vodafone
    band = [,20,,3,1,7,28,,,8,,20,,3,1,7][~~(CID / 10)];
    actMNC = 22210;
    MNO = "Vodafone";
} else if (eNB >= 100000 && eNB <= 999999) {
    if (MNC1 == 22288 || MNC2 == 22288) {
        actMNC = 22288
        MNO = "WindTre";
        if (eNB >= 502000 && Math.floor(eNB/1000) % 2 != 0) {
            eNB -= 401000
        } else if (eNB >= 502000) { 
            eNB -= 400000
        } else if (Math.floor(eNB/1000) % 2 != 0) {
            eNB -= 1000;
        } 
        // WindTre
        band = [3,20,7,1,38][~~(CID / 6)];
    } else {
        actMNC = 2221
        MNO = "Tim";
        // Tim
        band = [,,7,1,3,,20,28,,,,,7,1,3][~~(CID / 10)];
    }
} else if(eNB >= 1000000 && eNB <= 1100000) {
    actMNC = 22250;
    MNO = "iliad";
    // iliad
    band = [,,1,,"7 COVID",,7,28,3][~~(CID / 10)];
}

// Check if login has already been done, if not login

if (Keychain.contains("cookie") == false) {
  let req = new Request("https://lteitaly.it/api/AV1.php");
  req.method = "POST";
  req.headers = { "Content-Type": "application/json;charset=UTF-8" };
  req.body = "[\"login\",\""+ user +"\",\"" + password + "\",true]";
  await req.load();
  req.response.cookies;

  // Process and Save Cookie

  for (const cookie of req.response.cookies) {
    cookies += cookie.name + "=" + cookie.value + "; ";
  }

  Keychain.set("cookie", cookies);
}

// Return data required by ShorteNB

return{eNB, acteNB, CID, band, actMNC, MNO};

Script.complete();