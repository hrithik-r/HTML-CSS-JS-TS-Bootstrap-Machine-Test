var loginCounter = 3;

function validateForm(){
    var username = ["admin","emp1"];
    var password = ["admin@123","emp1@123"];
    var x = document.getElementById("username").value;
    var y = document.getElementById("password").value;
    document.getElementById("loginbtn").hidden = false;
    if(loginCounter<=1){
        document.getElementById("loginbtn").disabled = true;
        document.getElementById("loginbtn").style.backgroundColor = "grey";
        elmAttempts.innerHTML = "You have exhausted all your attempts! Please try again later."
        return false;
    }
    else{
        if(x==""){
            elmUsernameError.innerHTML = "Enter the username!";
            return false;
        }
        else{
            elmUsernameError.innerHTML = "";
        }
        if(x != username[0] && x != username[1]){
            elmUsernameError.innerHTML = "Could not find the user!";
            return false;
        }
        if(y==""){
            elmPasswordError.innerHTML = "Enter the password!";
            return false;
        }
        else{
            elmPasswordError.innerHTML = "&nbsp;";
        }
        if(y != password[0] && y != password[1]){
            elmPasswordError.innerHTML = "Invalid password!";
            loginCounter--;
            return false;
        }
    }
}