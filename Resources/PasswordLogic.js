function generatePassword() {

    var pCharset = "";
    var pswdString = "";
    var cbSel = false;
    var specChar = "!@#$%^&*()_+{}|:\"<>?\[\]\;\',./";
    var uppChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowChar = "abcdefghijklmnopqrstuvwxyz";
    var numChar = "0123456789";
    const pLength = $('input[name="pLength"]').val();

    if ($("#charSpecial").is(":checked")) {
        pCharset += specChar;   
        cbSel = true;     
    }

    if ($("#charUpper").is(":checked")) {
        pCharset += uppChar; 
        cbSel = true;     
    }

    if ($("#charLower").is(":checked")) {
        pCharset += lowChar; 
        cbSel = true;     
    }

    if ($("#charNums").is(":checked")) {
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

    var resultBlk = $("#resultsPrint");
    resultBlk.html("<p>Your password is:</p><br><p id=\"pswdString\" class=\"pswdString\">" + pswdString + "</p><br><button onclick=\"copyPswd()\">Copy to clipboard.</button>");
    resultBlk.attr('hidden', false);

}

function clearForm() {
    $('input[name="pLength"]').val("");
    $('input[name="pLength"]').attr('placeholder', "Enter password length");
    $("#charSpecial").prop("checked", false);
    $("#charUpper").prop("checked", false);
    $("#charLower").prop("checked", false);
    $("#charNums").prop("checked", false);
    $("#resultsPrint").attr('hidden', true);
}

function copyPswd() {
    navigator.clipboard.writeText($("#pswdString").text());
    var resultBlk = $("#resultsPrint");
    resultBlk.html("<p>Copied!</p>");
}