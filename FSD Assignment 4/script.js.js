function validate(){
    var schoolName = document.getElementById("school").value;
    var phoneNo = document.getElementById("phone").value;
    var stateName = document.getElementById("state").value;
    var cityName = document.getElementById("city").value;
    var countryName = document.getElementById("country").value;
    var pincodeNo = document.getElementById("pincode").value;
    
    
    var text;
    
    if(schoolName.length < 1){
      text = "Please select an option";
      alert(text);
      return false;
    }

    if(isNaN(phoneNo) || phoneNo.length != 10){
        text = "Please Enter valid Phone Number";
        alert(text);
        return false;
    }

    if(stateName.length < 1){
      text = "Please Enter Your State";
      alert(text);
      return false;
    }
    
    if(cityName.length <= 1){
      text = "Please Enter Your City";
      alert(text);
      return false;
    }

    if(countryName.length <= 1){
        text = "Please Enter Your country";
        alert(text);
        return false;
    }

    if(isNaN(pincodeNo) || pincodeNo.length != 6){
        text = "Please Enter valid pincode";
        alert(text);
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}