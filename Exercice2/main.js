//sans regex
function validateEmail() {
    let email = document.getElementById("email").value;
    if (email.indexOf("@") === -1 || email.indexOf(".") === -1) {
        alert("Invalid email address");
        return false;
    }
    return true;
}

//avec regex 
function validateEmail() {
    var email = document.getElementById("email").value;
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      alert("Invalid email address");
      return false;
    }
    return true;
}