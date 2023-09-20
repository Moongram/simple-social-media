var curName = "Lily Gao"
var curEmail = "qg8@rice.edu"
var curPhone = "123-123-1234"
var curZip = "77005"
var curPassword = "123"

document.getElementById("pf-btn").addEventListener("click", validate)

function validate() {
    var fields = document.querySelectorAll('input');
    var sucName = true;
    var sucEmail = true;
    var sucPhone = true;
    var sucZip = true;
    var sucPassword = true;
    for (element of fields) {
        let ref = element.id;
        if (element.value != "") {
            let val = element.value;
            if (ref == "name") {
                var mName = document.getElementById("msg-name");
                sucName = updateOld(curName, val, mName)
            } else if (ref == "email") {
                var vEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(val);
                var mEmail = document.getElementById("msg-email");
                if (!vEmail) {
                    mEmail.innerHTML = "Please enter the email in xx@yy.cc format"
                    sucEmail = false;
                } else {
                    console.log(1)
                    // let oldEmail = document.getElementById("dis-email");
                    sucEmail = updateOld(curEmail, val, mEmail);
                }
            } else if (ref == "phone") {
                var vPhone = /[0-9]{3}-[0-9]{3}-[0-9]{4}/.test(val);
                var mPhone = document.getElementById("msg-phone");
                if (!vPhone) {
                    mPhone.innerHTML = "Please enter the phone number in 123-123-1234 format"
                    sucPhone = false;
                } else {
                    sucPhone = updateOld(curPhone, val, mPhone);
                }
            } else if (ref == "zip") {
                var vZip = /[0-9]{5}/.test(val);
                var mZip = document.getElementById("msg-zip");
                console.log(vZip)
                if (!vZip) {
                    mZip.innerHTML = "Please enter valid 5-digit US Zipcode"
                    sucZip = false;
                } else {
                    sucZip = updateOld(curZip, val, mZip);
                }
            } else if (ref == "password") {
                var con = document.getElementById("confirm").value;
                var mPassword = document.getElementById("msg-password");
                if (con != val) {
                    mPassword.innerHTML= "Password Confirmation does not match password"
                    sucPassword = false;
                } else {
                    sucPassword = updateOld(curPassword, val, mPassword);
                }
            } else if (ref == "confirm") {
                var pas = document.getElementById("password").value;
                var mConfirm = document.getElementById("msg-confirm");
                if (pas == "") {
                    mConfirm.innerHTML = "You did not enter a password"
                    sucPassword = false;
                }
            }
        } else {
            let curMessage = "msg-" + ref;
            let emptyF = document.getElementById(curMessage);
            emptyF.innerHTML = "";
        }
    }
    if (sucName && sucEmail && sucPhone && sucZip && sucPassword) {
        for (element of fields) {
            let updateId = element.id;
            let updateVal = element.value;
            if (element.value != "") {
                if (updateId == "name") {
                    mName.innerHTML = "Your display name changed from " + curName + " to " + updateVal;
                    let oldName = document.getElementById("dis-name");
                    oldName.innerHTML = updateVal;
                    curName = updateVal;
                } else if (updateId == "email") {
                    console.log(mName)
                    mEmail.innerHTML = "Your email changed from " + curEmail + " to " + updateVal;
                    let oldEmail = document.getElementById("dis-email");
                    oldEmail.innerHTML = updateVal;
                    curEmail = updateVal;
                } else if (updateId == "phone") {
                    mPhone.innerHTML = "Your phone changed from " + curPhone + " to " + updateVal;
                    let oldPhone = document.getElementById("dis-phone");
                    oldPhone.innerHTML = updateVal;
                    curPhone = updateVal;
                } else if (updateId == "zip") {
                    mZip.innerHTML = "Your Zipcode changed from " + curZip + " to " + updateVal;
                    let oldZip = document.getElementById("dis-zip");
                    oldZip.innerHTML = updateVal;
                    curZip = updateVal;
                } else if (updateId == "password") {
                    let oldLen = curPassword.length;
                    let newLen = updateVal.length;
                    curPassword = updateVal;
                    let before = '*'.repeat(oldLen);
                    let after = '*'.repeat(newLen);
                    console.log(before, after)
                    mPassword.innerHTML = "Your password and password confirmation changed from " + before + " to " + after;
                    let oldPassword = document.getElementById("dis-password");
                    let oldConfirm = document.getElementById("dis-confirm");
                    oldPassword.innerHTML = after;
                    oldConfirm.innerHTML = after;
                }
                element.value = ""

            } else {
                let curMsg = "msg-" + updateId;
                let empty = document.getElementById(curMsg);
                empty.innerHTML = "";
            }
        }
    }
}

function updateOld(old, current, message) {
    if (old == current) {
        message.innerHTML = "Please provide a different value for updating your profile information.";
        return false
    } else {
        message.innerHTML = "";
        return true
    }

}