function validate(){
    var name=document.getElementById("name").value;
    var email_id=document.getElementById("email_id").value;
    var dob=document.getElementById("dob").value;
    var phone_number=document.getElementById("phone_number").value;

    var validEmail=/^([A-Za-z0-9_\-\.])+@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(name==""){
        alert("Please Enter your Name");
        return false;
    }
    else if(email_id==""){
        alert("Please Enter Your Email id");
        return false;
    }
    else if(validEmail.test(email_id)==false){
        alert("Please Enter a valide Email id");
        return false;

    }
    else if(a.indexOf('@')<=0)
    {
        document.getElementById("message").innerHTML="**Invalid @ position";
        return false;
    }
    else if((a.charAt(a.length-4)!=".") && (a.charAt(a.length-3)!="."))
    {
        document.getElementById("message").innerHTML="**Invalid '.' position";
        return false;
    }
    else if(dob==""){
        alert("Please Enter Your Date of Birth");
        return false;
    }
    else if(phone_number==""){
        alert("**Please Enter Your Phone Number");
        return false;
    }
    else if(isNaN(phone_number)){
        alert("**In Mobile Number Only digits are required");
        return false;
    }
    else if(10>phone_number.length){
        alert("**In Mobile Number has only 10 digits");
        return false;
    }
    else if(10<phone_number.length){
        alert("**IN Mobile Number has only 10 digits");
        return false;
    }
    else if((phone_number.charAt(0)!=9) && (phone_number.charAt(0)!=8) && (phone_number.charAt(0)!=7) && (phone_number.charAt(0)!=6)){
        alert("**Phone Number will start only with 9,7,8,6");
        return false;
    }
    else{
        return true;
    }

}