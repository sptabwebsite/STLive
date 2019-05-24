// FIRST NAME VALIDATION
function validateFirstName() {
    var elem = document.getElementById("RR_firstName").value;

    if (elem == "") {
        document.getElementById("RR_firstNameError").innerHTML = "Enter First Name";
        document.getElementById("RR_firstName").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("RR_firstNameError").innerHTML = " &nbsp;";
        document.getElementById("RR_firstName").style.border = "1px solid #ccc";
    }
    return true;
    
}


//GENDER VALIDATION
function validateGender() {
    var elem = document.getElementById("RR_gender").value;

    if (elem == 0) {
        document.getElementById("RR_genderError").innerHTML = "Select Gender";
        document.getElementById("RR_gender").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("RR_genderError").innerHTML = " &nbsp;";
        document.getElementById("RR_gender").style.border = "1px solid #ccc";
    }
    return true;
}

//YEARS VALIDATION
function validateYears() {
    var elem = document.getElementById("RR_years").value;

    if (elem == "") {
        document.getElementById("RR_yearsError").innerHTML = "Enter Years";
        document.getElementById("RR_years").style.border = "1px solid red";
        return false;
    }
    if (elem <= 0) {
        document.getElementById("RR_yearsError").innerHTML = "Invalid Years";
        document.getElementById("RR_years").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("RR_yearsError").innerHTML = " &nbsp;";
        document.getElementById("RR_years").style.border = "1px solid #ccc";
    }
    return true;
}

//MONTHS VALIDATION
function validateMonths() {
    var elem = document.getElementById("RR_Months").value;

    if (elem >= 12 || elem < 1) {
        document.getElementById("RR_MonthsError").innerHTML = "Invalid Months";
        document.getElementById("RR_Months").style.border = "1px solid red";
        return true;
    }
    if (elem  == "" ) {
        document.getElementById("RR_MonthsError").innerHTML = " &nbsp";
        return false;
    } else {
        document.getElementById("RR_MonthsError").innerHTML = " &nbsp;";
        document.getElementById("RR_Months").style.border = "1px solid #ccc";
    }
    return true;
}


//MOBILE VALIDATION
function validateMobile() {
    var elem = document.getElementById("RR_mobile").value;

    if (elem == "") {
        document.getElementById("RR_mobileError").innerHTML = "Enter Mobile Number";
        document.getElementById("RR_mobile").style.border = "1px solid red";
        return false;
    } 
    if (elem.length < 10 || elem.length > 10) {
        document.getElementById("RR_mobileError").innerHTML = "Invalid Mobile Number";
        document.getElementById("RR_mobile").style.border = "1px solid red";
        return false;
        
    } else {
        document.getElementById("RR_mobileError").innerHTML = " &nbsp;";
        document.getElementById("RR_mobile").style.border = "1px solid #ccc";
        return true;
    }
}

//EMAIL VALIDATION
function validateEmail() {
    var elem = document.getElementById("RR_email").value;
    var reg =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (elem == "") {
        document.getElementById("RR_emailError").innerHTML = "Enter Email Id";
        document.getElementById("RR_email").style.border = "1px solid red";
        return false;
    }else{
   
    if (reg.test(elem) == false) {
        document.getElementById("RR_emailError").innerHTML = "Invalid E-Mail Id";
        document.getElementById("RR_email").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("RR_emailError").innerHTML = " &nbsp;";
        document.getElementById("RR_email").style.border = "1px solid #ccc";
        return true;
    }
    }
}


//PLACE VALIDATION
function validatePlace() {
    var elem = document.getElementById("RR_Place").value;

    if (elem == "") {
        document.getElementById("RR_PlaceError").innerHTML = "Enter Your Place";
        document.getElementById("RR_Place").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("RR_PlaceError").innerHTML = " &nbsp;";
        document.getElementById("RR_Place").style.border = "1px solid #ccc";
    }
    return true;
}



//STATE VALIDATION
function validateState() {
    var elem = document.getElementById("RR_State").value;

    if (elem == 0) {
        document.getElementById("RR_StateError").innerHTML = "Select State";
        document.getElementById("RR_State").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("RR_StateError").innerHTML = " &nbsp;";
        document.getElementById("RR_State").style.border = "1px solid #ccc";
        return true;
    }
}

//DISPLAY DIRSTIC

function displayDistrict(){
    var elem =document.getElementById("RR_State").value;
            document.getElementById("SampleDistric").style.display="none";
            document.getElementById("Abroad").style.display="none";
            document.getElementById("Abroad").style.display="none";
            document.getElementById("AndamanAndNicobar").style.display="none";
            document.getElementById("AndhraPradesh").style.display="none";
            document.getElementById("ArunachalPradesh").style.display="none";
            document.getElementById("Assam").style.display="none";
            document.getElementById("Bihar").style.display="none";
            document.getElementById("Chandigarh").style.display="none";
            document.getElementById("Chhattisgarh").style.display="none";
            document.getElementById("DadraAndNagarHaveli").style.display="none";
            document.getElementById("DamanAndDiu").style.display="none";
            document.getElementById("Goa").style.display="none";
            document.getElementById("Gujarat").style.display="none";
            document.getElementById("Haryana").style.display="none";
            document.getElementById("HimachalPradesh").style.display="none";
            document.getElementById("JammuAndKashmir").style.display="none";
            document.getElementById("Jharkhand").style.display="none";
            document.getElementById("Karnataka").style.display="none";
            document.getElementById("Kerala").style.display="none";
            document.getElementById("Lakshadweep").style.display="none";
            document.getElementById("MadhyaPradesh").style.display="none";
            document.getElementById("Maharashtra").style.display="none";
            document.getElementById("Manipur").style.display="none";
            document.getElementById("Meghalaya").style.display="none";
            document.getElementById("Mizoram").style.display="none";
            document.getElementById("Nagaland").style.display="none";
            document.getElementById("newDelhi").style.display="none";
            document.getElementById("Odisha").style.display="none";
            document.getElementById("Puducherry").style.display="none";
            document.getElementById("Punjab").style.display="none";
            document.getElementById("Rajasthan").style.display="none";
            document.getElementById("Sikkim").style.display="none";
            document.getElementById("TamilNadu").style.display="none";
            document.getElementById("Telangana").style.display="none";
            document.getElementById("Tripura").style.display="none";
            document.getElementById("UttarPradesh").style.display="none";
            document.getElementById("Uttarakhand").style.display="none";
            document.getElementById("WestBengal").style.display="none";
            document.getElementById(elem).style.display="block";
            document.getElementById(elem).setAttribute("onblur","validateDistrict()");
            return true;
}



//DISTRICT VALIDATION
function validateDistrict() {
    var elem = document.getElementById("RR_State").value;
    var elem2= document.getElementById(elem).value;
//alert(elem2)
    if (elem2 == 0) {
        document.getElementById("RR_districtError").innerHTML = "Select District";
        document.getElementById(elem).style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("RR_districtError").innerHTML = " &nbsp;";
        document.getElementById(elem).style.border = "1px solid #ccc";
        return true;
    }
}


//CITY VALIDATION
function validateCity() {
    var elem = document.getElementById("RR_City").value;
    if (elem == "") {
        document.getElementById("RR_CityError").innerHTML = "Enter City Name";
        document.getElementById("RR_City").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("RR_CityError").innerHTML = " &nbsp;";
        document.getElementById("RR_City").style.border = "1px solid #ccc";
        return true;
    }
}


////PINCODE VALIDATION
function validatePincode() {
    var elem = document.getElementById("RR_pinCode").value;
    if (elem=="") {
        document.getElementById("RR_pinCodeError").innerHTML = " &nbsp;";
        document.getElementById("RR_pinCode").style.border = "1px solid #ccc";
        return true;
    } else if (elem.length < 6 || elem.length > 6) {
        document.getElementById("RR_pinCodeError").innerHTML = " Invalid Pin Code";
        document.getElementById("RR_pinCode").style.border = "1px solid red";
        return false;
    }else{
        document.getElementById("RR_pinCodeError").innerHTML = " &nbsp;";
        document.getElementById("RR_pinCode").style.border = "1px solid #ccc";
         return true;
    }
}



//EDUCATION VALIDATION
function validateEducation() {
    var elem = document.getElementById("RR_Education").value;
    if (elem == 0) {
        document.getElementById("RR_EducationError").innerHTML = "Select Education";
        document.getElementById("RR_Education").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("RR_EducationError").innerHTML = " &nbsp;";
        document.getElementById("RR_Education").style.border = "1px solid #ccc";
        return true;
    }
}



//DISEASE VALIDATION
function validateDisease() {
    var elem = document.getElementById("RR_Disease").value;
    if (elem == 0) {
        document.getElementById("RR_DiseaseError").innerHTML = "Select Disease";
        document.getElementById("RR_Disease").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("RR_DiseaseError").innerHTML = " &nbsp;";
        document.getElementById("RR_Disease").style.border = "1px solid #ccc";
        return true;
    }
}




//Mother Tongue VALIDATION
function validateMotherTongue() {
    var elem = document.getElementById("RR_MotherTongue").value;
    if (elem == 0) {
        document.getElementById("RR_MotherTongueError").innerHTML = "Select Mother Tongue";
        document.getElementById("RR_MotherTongue").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("RR_MotherTongueError").innerHTML = " &nbsp;";
        document.getElementById("RR_MotherTongue").style.border = "1px solid #ccc";
        return true;
    }
}


//Language Known VALIDATION
function validateLanguageKnown() {
    var elem = document.getElementById("RR_languageKnown").value;
    if (elem == "") {
        document.getElementById("RR_languageKnownError").innerHTML = "Select Languages Known";
        document.getElementById("RR_languageKnown").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("RR_languageKnownError").innerHTML = " &nbsp;";
        document.getElementById("RR_languageKnown").style.border = "1px solid #ccc";
        return true;
    }
}


// Refered NAME VALIDATION
function validateReferedName() {
    var elem = document.getElementById("RR_ReferedName").value;

    if (elem == "") {
        document.getElementById("RR_ReferedNameError").innerHTML = "Enter Refered Name";
        document.getElementById("RR_ReferedName").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("RR_ReferedNameError").innerHTML = " &nbsp;";
        document.getElementById("RR_ReferedName").style.border = "1px solid #ccc";
    }
    return true;
}


//REFERED MOBILE VALIDATION
function validateReferedMobile() {
    var elem = document.getElementById("RR_ReferedMobile").value;

    if (elem == "") {
        document.getElementById("RR_ReferedMobileError").innerHTML = "Enter Refered Mobile Number";
        document.getElementById("RR_ReferedMobile").style.border = "1px solid red";
        return false;
    } 
    if (elem.length < 10 || elem.length > 10) {
        document.getElementById("RR_ReferedMobileError").innerHTML = "Invalid Mobile Number";
        document.getElementById("RR_ReferedMobile").style.border = "1px solid red";
        return false;
        
    } else {
        document.getElementById("RR_ReferedMobileError").innerHTML = " &nbsp;";
        document.getElementById("RR_ReferedMobile").style.border = "1px solid #ccc";
        return true;
    }
}

//EMAIL VALIDATION
function validateReferedEmail() {
    var elem = document.getElementById("RR_ReferredEmail").value;
    var reg =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (elem == "") {
        document.getElementById("RR_ReferredEmailError").innerHTML = "Enter Refered Email Id";
        document.getElementById("RR_ReferredEmail").style.border = "1px solid red";
        return false;
    }else{
   
    if (reg.test(elem) == false) {
        document.getElementById("RR_ReferredEmailError").innerHTML = "Invalid E-Mail Id";
        document.getElementById("RR_ReferredEmail").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("RR_ReferredEmailError").innerHTML = " &nbsp;";
        document.getElementById("RR_ReferredEmail").style.border = "1px solid #ccc";
        return true;
    }
    }
}

//VALIDATE ALL FEELDS ON SUBMIT

function RR_FormValidation(){
    
    var valid =false;
    
    if(!validateFirstName()){
        document.getElementById("RR_firstName").focus();
        return valid;
    }
        if(!validateGender()){
        document.getElementById("RR_gender").focus();
        return valid;
    }
     if(!validateYears()){
        document.getElementById("RR_years").focus();
        return valid;
    }
     if(!validateMobile()){
        document.getElementById("RR_mobile").focus();
        return valid;
    }
     if(!validateEmail()){
        document.getElementById("RR_email").focus();
        return valid;
    }
     if(!validatePlace()){
        document.getElementById("RR_Place").focus();
        return valid;
    }
     if(!validateState()){
        document.getElementById("RR_State").focus();
        return valid;
    }
     if(!validateDistrict()){
        var elem = document.getElementById("RR_State").value;
        document.getElementById(elem).focus();
        return valid;
    }
     if(!validateCity()){
        document.getElementById("RR_City").focus();
        return valid;
    }
     if(!validateEducation()){
        document.getElementById("RR_Education").focus();
        return valid;
    }
     if(!validateDisease()){
        document.getElementById("RR_Disease").focus();
        return valid;
    }
     if(!validateMotherTongue()){
        document.getElementById("RR_MotherTongue").focus();
        return valid;
    }
    
     if(!validateLanguageKnown()){
        document.getElementById("RR_languageKnown").focus();
        return valid;
    }
    
     if(!validateReferedName()){
        document.getElementById("RR_ReferedName").focus();
        return valid
    }
       
     if(!validateReferedMobile()){
        document.getElementById("RR_ReferedMobile").focus();
        return valid;
    }
       
     if(!validateReferedEmail()){
        document.getElementById("RR_ReferredEmail").focus();
        return valid;
    }
    submitValues();
    return true;
       
}

//FOR GETTING MULTIPLE LANGUAGES
function getMultipleSelectedValue() {
    var values = [];
    var x = document.getElementById("RR_languageKnown");
    for (var i = 0; i < x.options.length; i++) {
        if (x.options[i].selected == true) {
            values.push(x.options[i].value);
        }
    }
    return values;
}

function submitValues(){
    
    var firstName = document.getElementById("RR_firstName").value;
    var lastName = document.getElementById("RR_lastName").value;
    var gender = document.getElementById("RR_gender").value;
    var years = document.getElementById("RR_years").value;
    var months = document.getElementById("RR_Months").value;
    var mobile = document.getElementById("RR_mobile").value;    
    var email = document.getElementById("RR_email").value;
    var place = document.getElementById("RR_Place").value;
    var state = document.getElementById("RR_State").value;
    var district = document.getElementById(state).value;
    var city = document.getElementById("RR_City").value;
    var pinCode = document.getElementById("RR_pinCode").value;
    var education = document.getElementById("RR_Education").value;    
    var disease = document.getElementById("RR_Disease").value;
    var motherTongue = document.getElementById("RR_MotherTongue").value;
    var languageKnown = getMultipleSelectedValue();
    var referedName = document.getElementById("RR_ReferedName").value;
    var referedMobile = document.getElementById("RR_ReferedMobile").value;
    var referedEmail = document.getElementById("RR_ReferredEmail").value;
    var ref = firebase.database().ref();
    var rrref=ref.child("rapidRegistrations");
    rrref.push({
        firstName:firstName,
        lastName : lastName,
        gender : gender,
        years : years,
        months : months,
        mobile : mobile,
        email : email,
        place : place,
        state : state,
        district : district,
        city : city,
        pinCode : pinCode,
        education : education,
        disease : disease,
        motherTongue : motherTongue,
        languageKnown : languageKnown,
        referedName : referedName,
        referedMobile : referedMobile,
        referedEmail : referedEmail
    });
}

