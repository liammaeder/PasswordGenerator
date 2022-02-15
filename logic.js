var pCharset = "";
var pswdOut = "";
var cbSel = false;

function generatePassword() {
    
    const pLength = document.getElementById("inputAmnt").value;
    const cNum = document.getElementById("charNums");
    const cUpper = document.getElementById("charUpper");
    const cLower = document.getElementById("charLower");
    const cSpecial = document.getElementById("charSpecial");
    var specChar = "!@#$%^&*()_+{}|:\"?\[\]\;\',./";
    var uppChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowChar = "abcdefghijklmnopqrstuvwxyz";
    var numChar = "0123456789";
    var pswdString = "";

    if (pLength == 0) {
        alert("Please enter a password length");
        return;
    } else if (pLength > 0) {
        console.log("Password length: " + pLength);
    }

    if (cSpecial.checked) {
        pCharset += specChar;   
        cbSel = true;     
    }

    if (cUpper.checked) {
        pCharset += uppChar; 
        cbSel = true;     
    }

    if (cLower.checked) {
        pCharset += lowChar; 
        cbSel = true;     
    }

    if (cNum.checked) {
        pCharset += numChar; 
        cbSel = true;     
    }

    if (!cbSel) {
        alert("Please select at least one character type.");
        return;
    }

    for (var i = 0; i < pLength; i++) {
        var rndIdx = Math.floor(Math.random() * pCharset.length);
        pswdString += pCharset.substring(rndIdx, rndIdx + 1);
    }

    pswdOut = pswdString;
    console.log("pswdOut length: " + pswdOut.length);
    console.log("pswdOut: " + pswdOut);
    console.log("pswdString length: " + pswdString.length);
    console.log("pswdString: " + pswdString);
    

    var resultBlk = document.getElementById("resultsPrint");
        resultBlk.innerHTML = "<p>Your password is:</p><br><p id=\"pswdString\" class=\"pswdString\">" + pswdString + "</p><br><button onclick=\"copyPswd()\">Copy to clipboard.</button>";
        resultBlk.hidden = false;
}


function clearForm() {
    document.getElementById("pswdForm").reset();
    document.getElementById("resultsPrint").hidden = true;
    pswdOut = "";
    console.clear();
}

function copyPswd() {
    navigator.clipboard.writeText(document.getElementById("pswdString").innerHTML);
    var resultBlk = document.getElementById("resultsPrint");
    resultBlk.innerHTML ="<p>Your password is:</p><br><p id=\"pswdString\" class=\"pswdString\">" + pswdOut + "</p><br><p>Copied!</p><br><button onclick=\"copyPswd()\">Copy to clipboard.</button>";
}