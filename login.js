function validate()
{
    let username=document.getElementById("username").value
    let password=document.getElementById("password").value
    if(username=="Sanjay"&& password=="12345"){
        alert("login successfully")
        return false
    }
    else{
        alert("login failed")
    }
}