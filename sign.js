function validator(){
    var name = document.forms["myform"]["name"];
    var email = document.forms["myform"]["email"];
    var password = document.forms["myform"]["password"];
    var name_error = document.getElementById("name_error");
    var email_error = document.getElementById("email_error");
    var password_error = document.getElementById("password_error");

    if(name == "" && email == "" && password == "" ) 
    {
        name_error.style.visibility="visible";
        email_error.style.visibility="visible";
        password_error.style.visibility="visible";
        return false;
    } 
    else if (name == ""){
        name_error.style.visibility="visible";
        return false;
    }
    else if (email == ""){
        email_error.style.visibility="visible";
        return false;
    }
    else if (password == ""){
        password_error.style.visibility="visible";
        return false;
    }
    else{
        alert("Your form is submitted successfully")
    }
}