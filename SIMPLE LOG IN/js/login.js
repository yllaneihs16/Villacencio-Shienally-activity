function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var real_username = "shang";
    var real_password = "shrek";

    if (username === "" || password === "") {
        document.getElementById("error").innerHTML=("All textboxes are required")
    }
}
 {
        if (username === real_username && password === real_password) {
            document.getElementById("error").innerHTML = "Welcome" + username;
        }
        else {
            document.getElementById("error").innerHTML = "Invalid username or password";
        }
    }
    function forgot() {
        alert("You clicked the wrong password");
    }