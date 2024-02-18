// Variable Declaration

let CellID = "CellID";
CellID = parseInt(CellID.split('.').join("")) //Removed dots from any CellID hand-calculated on iOS calculator, kinda useless but still
let MNC1 = MNC1;
let MNC2 = MNC2;
let user = "username";
let password = "password";

var eNB, acteNB, CID, band, actMNC, cookies = "", MNO = "";

// eNB/CID Calculation

eNB = Math.floor(CellID / 256);
acteNB = eNB
CID = CellID % 256;

// Band Determination 

switch(eNB.toString().length) {
  case(5): {
    actMNC = 22210;
    band = [,20,,3,1,7,28,,,8,,20,,3,1,7][~~(CID / 10)];
    MNO = "Vodafone";
    break;
  }
  case(6): {
    if(MNC1 != 2221 && MNC2 != 2221) {
      actMNC = 22288;
      MNO = "WindTre/ZefiroNet";
      band = [3,20,7,1,38,"3+","1+","7+",28][~~(CID / 6)];
      if (eNB >= 502000 && Math.floor(eNB/1000) % 2 != 0) {
            eNB -= 401000;
        } else if (Math.floor(eNB/1000) % 2 != 0) {
            eNB -= 1000;
        }
    } else {
      actMNC = 2221;
      MNO = "Tim";
      band = [,,7,1,3,,20,28,,,,,7,1,3][~~(CID / 10)];
    }
    break;
  }
  case(7): {
    actMNC = 22250;
    MNO = "iliad";
    band = [,,1,,"7 COVID",,7,28,3][~~(CID / 10)];
    break;
  }
  default: {
    Script.complete()
  }
}

// Check if login has not already been done or if the cookie is malformed.  If either of the two conditions is true, login again to fix the issue

if (Keychain.contains("cookie") == false || Keychain.get("cookie").startsWith("undefined")) {
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