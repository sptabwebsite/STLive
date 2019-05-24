
//
//function activeDetailsMenu("activeMenu"){
//    
//    switch(activeMenu){
//            case = "personalDetails";
//            document.getElementById("button-1").classList.add("detailsButtonActive");
//            break;
//    }       
//        case = "illnesslDetails";{
//            document.getElementById("button-2").classList.add("detailsButtonActive");
//            break;
//        }       
//        case = "familyDetails";{
//            document.getElementById("button-3").classList.add("detailsButtonActive");
//            break;
//    }
//    
//}



function displayPersonalDetails(){
    document.getElementById("personalDetails").style.display="block";
    document.getElementById("button-1").style.backgroundColor="#ededed";
    document.getElementById("button-2").style.backgroundColor="#dcdcdc";
    document.getElementById("button-3").style.backgroundColor="#dcdcdc";
    document.getElementById("IllnessDetails").style.display="none";
    document.getElementById("familyDetails").style.display="none";
}


function displayIllnessDetails(){
    document.getElementById("IllnessDetails").style.display="block";
    document.getElementById("button-2").style.backgroundColor="#ededed";
    document.getElementById("button-1").style.backgroundColor="#dcdcdc";
    document.getElementById("button-3").style.backgroundColor="#dcdcdc";
    document.getElementById("personalDetails").style.display="none";
    document.getElementById("familyDetails").style.display="none";
}


function displayFamilyDetails(){
    document.getElementById("familyDetails").style.display="block";
    document.getElementById("button-3").style.backgroundColor="#ededed";
    document.getElementById("button-2").style.backgroundColor="#dcdcdc";
    document.getElementById("button-1").style.backgroundColor="#dcdcdc";
    document.getElementById("IllnessDetails").style.display="none";
    document.getElementById("personalDetails").style.display="none";
}

// FIRST NAME VALIDATION
function validateFirstName() {
    var elem = document.getElementById("PR_firstName").value;

    if (elem == "") {
        document.getElementById("PR_firstNameError").innerHTML = "Enter First Name";
        document.getElementById("PR_firstName").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("PR_firstNameError").innerHTML = " &nbsp;";
        document.getElementById("PR_firstName").style.border = "1px solid #ccc";
        return true;
    }
}

// LAST NAME VALIDATION
function validateLastName() {
    var elem = document.getElementById("PR_lastName").value;

    if (elem == "") {
        document.getElementById("PR_lastNameError").innerHTML = "Enter Last Name";
        document.getElementById("PR_lastName").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("PR_lastNameError").innerHTML = " &nbsp;";
        document.getElementById("PR_lastName").style.border = "1px solid #ccc";
        return true;
    }

}

//YEARS VALIDATION
function validateYears() {
    var elem = document.getElementById("PR_years").value;

    if (elem == "") {
        document.getElementById("PR_yearsError").innerHTML = "Enter Years";
        document.getElementById("PR_years").style.border = "1px solid red";
        return false;
    }
    if (elem <= 0) {
        document.getElementById("PR_yearsError").innerHTML = "Invalid Years";
        document.getElementById("PR_years").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("PR_yearsError").innerHTML = " &nbsp;";
        document.getElementById("PR_years").style.border = "1px solid #ccc";
        return true;
    }
}


//MONTHS VALIDATION
function validateMonths() {
    var elem = document.getElementById("PR_Months").value;

    if (elem == "") {
        document.getElementById("PR_MonthsError").innerHTML = " &nbsp";
        document.getElementById("PR_Months").style.border = "1px solid #ccc";
        return true;
    } else {

        if (elem >= 12 || elem < 1) {
            document.getElementById("PR_MonthsError").innerHTML = "Invalid Months";
            document.getElementById("PR_Months").style.border = "1px solid red";
            return true;
        } else {

            document.getElementById("PR_MonthsError").innerHTML = " &nbsp;";
            document.getElementById("PR_Months").style.border = "1px solid #ccc";
            return true;
        }
    }
}


//GENDER VALIDATION
function validateGender() {
    var elem = document.getElementById("PR_gender").value;

    if (elem == 0) {
        document.getElementById("PR_genderError").innerHTML = "Select Gender";
        document.getElementById("PR_gender").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("PR_genderError").innerHTML = " &nbsp;";
        document.getElementById("PR_gender").style.border = "1px solid #ccc";
        return true;
    }
}


//RELATION VALIDATION
function validateRelation() {
    var elem = document.getElementById("PR_guardian").value;
    var elem2 = document.getElementById("PR_relation").value;

    if (elem != "" && elem2 == 0) {
        document.getElementById("PR_relationError").innerHTML = "Select Relation";
        document.getElementById("PR_relation").style.border = "1px solid red";
        return false;
    } else {

        if (elem == "" && elem2 != 0) {
            document.getElementById("PR_guardianError").innerHTML = "Enter Relation Name / Delsect Relation";
            document.getElementById("PR_guardian").style.border = "1px solid red";
            return false;
        } else {
            document.getElementById("PR_guardianError").innerHTML = " &nbsp;";
            document.getElementById("PR_guardian").style.border = "1px solid #ccc";

            document.getElementById("PR_relationError").innerHTML = " &nbsp;";
            document.getElementById("PR_relation").style.border = "1px solid #ccc";
            return true;
        }

    }
}


//MOBILE VALIDATION
function validateGuardianMobile() {
    var elem = document.getElementById("PR_guardianMobile").value;

    if (elem == "") {
            document.getElementById("PR_guardianMobileError").innerHTML = " &nbsp;";
            document.getElementById("PR_guardianMobile").style.border = "1px solid #ccc";
        return true;
    } else {

        if (elem.length < 10 || elem.length > 10) {
            document.getElementById("PR_guardianMobileError").innerHTML = "Invalid Mobile Number";
            document.getElementById("PR_guardianMobile").style.border = "1px solid red";
            return false;

        } else {
            document.getElementById("PR_guardianMobileError").innerHTML = " &nbsp;";
            document.getElementById("PR_guardianMobile").style.border = "1px solid #ccc";
            return true;
        }
    }

}

//EMAIL VALIDATION
function validateGuardianEmail() {
    var elem = document.getElementById("PR_guardianEmail").value;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (elem == "") {
            document.getElementById("PR_guardianEmailError").innerHTML = " &nbsp;";
            document.getElementById("PR_guardianEmail").style.border = "1px solid #ccc";
            return true;
    } else {
        if (reg.test(elem) == false) {
            document.getElementById("PR_guardianEmailError").innerHTML = "Invalid email id";
            document.getElementById("PR_guardianEmail").style.border = "1px solid red";
            return false;
        } else {
            document.getElementById("PR_guardianEmailError").innerHTML = " &nbsp;";
            document.getElementById("PR_guardianEmail").style.border = "1px solid #ccc";
            return true;
        }
    }
}




//*************RESIDENTIAL ADDRESS*************

//MOBILE VALIDATION
function validateResMobile() {
    var elem = document.getElementById("PR_Res_Mobile").value;

    if (elem == "") {
        document.getElementById("PR_Res_MobileError").innerHTML = "Enter Mobile Number";
        document.getElementById("PR_Res_Mobile").style.border = "1px solid red";
        return false;
    } else {

        if (elem.length < 10 || elem.length > 10) {
            document.getElementById("PR_Res_MobileError").innerHTML = "Invalid Mobile Number";
            document.getElementById("PR_Res_Mobile").style.border = "1px solid red";
            return false;

        } else {
            document.getElementById("PR_Res_MobileError").innerHTML = " &nbsp;";
            document.getElementById("PR_Res_Mobile").style.border = "1px solid #ccc";
            return true;
        }
    }
}


//EMAIL VALIDATION
function validateEmail() {
    var elem = document.getElementById("PR_Res_email").value;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (elem == "") {
        document.getElementById("PR_Res_emailError").innerHTML = "Enter Email Id";
        document.getElementById("PR_Res_email").style.border = "1px solid red";
        return false;
    } else {

        if (reg.test(elem) == false) {
            document.getElementById("PR_Res_emailError").innerHTML = "Invalid E-Mail Id";
            document.getElementById("PR_Res_email").style.border = "1px solid red";
            return false;
        } else {
            document.getElementById("PR_Res_emailError").innerHTML = " &nbsp;";
            document.getElementById("PR_Res_email").style.border = "1px solid #ccc";
            return true;
        }
    }
}


//ADDRESS VALIDATION
function validateAddress() {
    var elem = document.getElementById("PR_Res_Address").value;

    if (elem == "") {
        document.getElementById("PR_Res_AddressError").innerHTML = "Enter Your Address";
        document.getElementById("PR_Res_Address").style.border = "1px solid red";
        return false;
    } else {

        if (elem.length < 20 || elem.length > 86) {
            document.getElementById("PR_Res_AddressError").innerHTML = "Invalid Address <br> (Min. 20 to Max 60 Digits)";
            document.getElementById("PR_Res_Address").style.border = "1px solid red";
        } else {
            document.getElementById("PR_Res_AddressError").innerHTML = " &nbsp;";
            document.getElementById("PR_Res_Address").style.border = "1px solid #ccc";
            return true;
        }
    }
}



//STATE VALIDATION
function validateResState() {
    var elem = document.getElementById("PR_Res_State").value;

    if (elem == 0) {
        document.getElementById("PR_Res_SampleDistric").style.display = "block";
        document.getElementById("PR_Res_StateError").innerHTML = "Select State";
        document.getElementById("PR_Res_State").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("PR_Res_StateError").innerHTML = " &nbsp;";
        document.getElementById("PR_Res_State").style.border = "1px solid #ccc";
        return true;
    }
}


//DISPLAY DIRSTIC

function displayResDistrict(){
    var elem =document.getElementById("PR_Res_State").value;
            document.getElementById("PR_Res_SampleDistric").style.display="none";
            document.getElementById("PR_Res_Abroad").style.display="none";
            document.getElementById("PR_Res_Abroad").style.display="none";
            document.getElementById("PR_Res_AndamanAndNicobar").style.display="none";
            document.getElementById("PR_Res_AndhraPradesh").style.display="none";
            document.getElementById("PR_Res_ArunachalPradesh").style.display="none";
            document.getElementById("PR_Res_Assam").style.display="none";
            document.getElementById("PR_Res_Bihar").style.display="none";
            document.getElementById("PR_Res_Chandigarh").style.display="none";
            document.getElementById("PR_Res_Chhattisgarh").style.display="none";
            document.getElementById("PR_Res_DadraAndNagarHaveli").style.display="none";
            document.getElementById("PR_Res_DamanAndDiu").style.display="none";
            document.getElementById("PR_Res_Goa").style.display="none";
            document.getElementById("PR_Res_Gujarat").style.display="none";
            document.getElementById("PR_Res_Haryana").style.display="none";
            document.getElementById("PR_Res_HimachalPradesh").style.display="none";
            document.getElementById("PR_Res_JammuAndKashmir").style.display="none";
            document.getElementById("PR_Res_Jharkhand").style.display="none";
            document.getElementById("PR_Res_Karnataka").style.display="none";
            document.getElementById("PR_Res_Kerala").style.display="none";
            document.getElementById("PR_Res_Lakshadweep").style.display="none";
            document.getElementById("PR_Res_MadhyaPradesh").style.display="none";
            document.getElementById("PR_Res_Maharashtra").style.display="none";
            document.getElementById("PR_Res_Manipur").style.display="none";
            document.getElementById("PR_Res_Meghalaya").style.display="none";
            document.getElementById("PR_Res_Mizoram").style.display="none";
            document.getElementById("PR_Res_Nagaland").style.display="none";
            document.getElementById("PR_Res_newDelhi").style.display="none";
            document.getElementById("PR_Res_Odisha").style.display="none";
            document.getElementById("PR_Res_Puducherry").style.display="none";
            document.getElementById("PR_Res_Punjab").style.display="none";
            document.getElementById("PR_Res_Rajasthan").style.display="none";
            document.getElementById("PR_Res_Sikkim").style.display="none";
            document.getElementById("PR_Res_TamilNadu").style.display="none";
            document.getElementById("PR_Res_Telangana").style.display="none";
            document.getElementById("PR_Res_Tripura").style.display="none";
            document.getElementById("PR_Res_UttarPradesh").style.display="none";
            document.getElementById("PR_Res_Uttarakhand").style.display="none";
            document.getElementById("PR_Res_WestBengal").style.display="none";
    
    if (elem == 0) {
        document.getElementById("PR_Res_SampleDistric").style.display = "block";
        } else {
        document.getElementById("PR_Res_" + elem).style.display="block";
        document.getElementById("PR_Res_" + elem).setAttribute("onblur","validate_Res_District()");
    }
    
}



//DISTRICT VALIDATION
function validate_Res_District() {
    var elem =  "PR_Res_" + document.getElementById("PR_Res_State").value;
    var elem2= document.getElementById(elem).value;
    if (elem2 == 0) {
        document.getElementById("PR_Res_districtError").innerHTML = "Select District";
        document.getElementById(elem).style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("PR_Res_districtError").innerHTML = " &nbsp;";
        document.getElementById(elem).style.border = "1px solid #ccc";
        return true;
    }
}


//CITY VALIDATION
function validateRefCity() {
    var elem = document.getElementById("PR_Res_City").value;
    if (elem == "") {
        document.getElementById("PR_Res_CityError").innerHTML = "Enter City Name";
        document.getElementById("PR_Res_City").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("PR_Res_CityError").innerHTML = " &nbsp;";
        document.getElementById("PR_Res_City").style.border = "1px solid #ccc";
        return true;
    }
}


//PINCODE VALIDATION

function validateRefPin() {
    var elem = document.getElementById("PR_Res_Pin").value;
    if (elem=="" ) {
        return true;
    } else {
        
    if (elem.length<6 || elem.length>6) {
        document.getElementById("PR_Res_PinError").innerHTML = "invalid Pin Code";
        document.getElementById("PR_Res_Pin").style.border = "1px solid red";
        return false;
            }else
        document.getElementById("PR_Res_PinError").innerHTML = " &nbsp;";
        document.getElementById("PR_Res_Pin").style.border = "1px solid #ccc";
        return true;
    }
}




//**************  Office Address/Present Postal Address **************

function checkOfficeAddress(){
    var elem = document.getElementById("checkOfficeAddres").checked;
    
    if (elem==true){
        document.getElementById("officeAddress").style.display="none";
        return elem;
    }else{
        document.getElementById("officeAddress").style.display="block"
        return elem;
    }
}


//OFFICE MOBILE VALIDATION
function validateOfcMobile() {
    var elem = document.getElementById("PR_ofc_Mobile").value;

    if (elem == "") {
        document.getElementById("PR_ofc_MobileError").innerHTML = "Enter Mobile Number";
        document.getElementById("PR_ofc_Mobile").style.border = "1px solid red";
        return false;
    }else{
        
        if (elem.length < 10 || elem.length > 10) {
        document.getElementById("PR_ofc_MobileError").innerHTML = "Invalid Mobile Number";
        document.getElementById("PR_ofc_Mobile").style.border = "1px solid red";
        return false;
        
    } else {
        document.getElementById("PR_ofc_MobileError").innerHTML = " &nbsp;";
        document.getElementById("PR_ofc_Mobile").style.border = "1px solid #ccc";
        return true;
    }
    }
}


//OFFICE EMAIL VALIDATION
function validateOfcEmail() {
    var elem = document.getElementById("PR_ofc_email").value;
    var reg =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (elem == "") {
        document.getElementById("PR_ofc_emailError").innerHTML = "Enter Email Id";
        document.getElementById("PR_ofc_email").style.border = "1px solid red";
        return false;
    }else{
   
    if (reg.test(elem) == false) {
        document.getElementById("PR_ofc_emailError").innerHTML = "Invalid E-Mail Id";
        document.getElementById("PR_ofc_email").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("PR_ofc_emailError").innerHTML = " &nbsp;";
        document.getElementById("PR_ofc_email").style.border = "1px solid #ccc";
        return true;
    }
    }
}


//OFFICE ADDRESS VALIDATION
function validateOfcAddress() {
    var elem = document.getElementById("PR_ofc_Address").value;

    if (elem == "") {
        document.getElementById("PR_ofc_AddressError").innerHTML = "Enter Your Address";
        document.getElementById("PR_ofc_Address").style.border = "1px solid red";
        return false;
    } 
    else {
        
        if (elem.length < 20 || elem.length > 86){
        document.getElementById("PR_ofc_AddressError").innerHTML = "Invalid Address <br> (Min. 20 to Max 60 Digits)";
        document.getElementById("PR_ofc_Address").style.border = "1px solid red";
        }else{
        document.getElementById("PR_ofc_AddressError").innerHTML = " &nbsp;";
        document.getElementById("PR_ofc_Address").style.border = "1px solid #ccc";
        return true;
        }
    }
}






//OFFICE STATE VALIDATION
function validateOfcState() {
    var elem = document.getElementById("PR_ofc_State").value;

    if (elem == 0) {
        document.getElementById("PR_ofc_SampleDistric").style.display = "block";
        document.getElementById("PR_ofc_StateError").innerHTML = "Select State";
        document.getElementById("PR_ofc_State").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("PR_ofc_StateError").innerHTML = " &nbsp;";
        document.getElementById("PR_ofc_State").style.border = "1px solid #ccc";
        return true;
    }
}

//OFFICE DISPLAY DIRSTIC

function displayOfcDistrict(){
    var elem =document.getElementById("PR_ofc_State").value;
            document.getElementById("PR_ofc_SampleDistric").style.display="none";
            document.getElementById("PR_ofc_Abroad").style.display="none";
            document.getElementById("PR_ofc_Abroad").style.display="none";
            document.getElementById("PR_ofc_AndamanAndNicobar").style.display="none";
            document.getElementById("PR_ofc_AndhraPradesh").style.display="none";
            document.getElementById("PR_ofc_ArunachalPradesh").style.display="none";
            document.getElementById("PR_ofc_Assam").style.display="none";
            document.getElementById("PR_ofc_Bihar").style.display="none";
            document.getElementById("PR_ofc_Chandigarh").style.display="none";
            document.getElementById("PR_ofc_Chhattisgarh").style.display="none";
            document.getElementById("PR_ofc_DadraAndNagarHaveli").style.display="none";
            document.getElementById("PR_ofc_DamanAndDiu").style.display="none";
            document.getElementById("PR_ofc_Goa").style.display="none";
            document.getElementById("PR_ofc_Gujarat").style.display="none";
            document.getElementById("PR_ofc_Haryana").style.display="none";
            document.getElementById("PR_ofc_HimachalPradesh").style.display="none";
            document.getElementById("PR_ofc_JammuAndKashmir").style.display="none";
            document.getElementById("PR_ofc_Jharkhand").style.display="none";
            document.getElementById("PR_ofc_Karnataka").style.display="none";
            document.getElementById("PR_ofc_Kerala").style.display="none";
            document.getElementById("PR_ofc_Lakshadweep").style.display="none";
            document.getElementById("PR_ofc_MadhyaPradesh").style.display="none";
            document.getElementById("PR_ofc_Maharashtra").style.display="none";
            document.getElementById("PR_ofc_Manipur").style.display="none";
            document.getElementById("PR_ofc_Meghalaya").style.display="none";
            document.getElementById("PR_ofc_Mizoram").style.display="none";
            document.getElementById("PR_ofc_Nagaland").style.display="none";
            document.getElementById("PR_ofc_newDelhi").style.display="none";
            document.getElementById("PR_ofc_Odisha").style.display="none";
            document.getElementById("PR_ofc_Puducherry").style.display="none";
            document.getElementById("PR_ofc_Punjab").style.display="none";
            document.getElementById("PR_ofc_Rajasthan").style.display="none";
            document.getElementById("PR_ofc_Sikkim").style.display="none";
            document.getElementById("PR_ofc_TamilNadu").style.display="none";
            document.getElementById("PR_ofc_Telangana").style.display="none";
            document.getElementById("PR_ofc_Tripura").style.display="none";
            document.getElementById("PR_ofc_UttarPradesh").style.display="none";
            document.getElementById("PR_ofc_Uttarakhand").style.display="none";
            document.getElementById("PR_ofc_WestBengal").style.display="none";
    
    if (elem == 0) {
        document.getElementById("PR_ofc_SampleDistric").style.display = "block";
        } else {
        document.getElementById("PR_ofc_" + elem).style.display="block";
        document.getElementById("PR_ofc_" + elem).setAttribute("onblur","validate_ofc_District()");
    }
    
}


//OFFICE DISTRICT VALIDATION
function validate_ofc_District() {
    var elem =  "PR_ofc_" + document.getElementById("PR_ofc_State").value;
    var elem2= document.getElementById(elem).value;
    if (elem2 == 0) {
        document.getElementById("PR_ofc_districtError").innerHTML = "Select District";
        document.getElementById(elem).style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("PR_ofc_districtError").innerHTML = " &nbsp;";
        document.getElementById(elem).style.border = "1px solid #ccc";
        return true;
    }
}


//OFFICE CITY VALIDATION
function validateOfcCity() {
    var elem = document.getElementById("PR_ofc_City").value;
    if (elem == "") {
        document.getElementById("PR_ofc_CityError").innerHTML = "Enter City Name";
        document.getElementById("PR_ofc_City").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("PR_ofc_CityError").innerHTML = " &nbsp;";
        document.getElementById("PR_ofc_City").style.border = "1px solid #ccc";
        return true;
    }
}


//OFFICE PINCODE VALIDATION

function validateOfcPin() {
    var elem = document.getElementById("PR_ofc_Pin").value;
    if (elem=="" ) {
        return true;
    } else {
        
    if (elem.length<6 || elem.length>6) {
        document.getElementById("PR_ofc_PinError").innerHTML = "invalid Pin Code";
        document.getElementById("PR_ofc_Pin").style.border = "1px solid red";
        return false;
            }else
        document.getElementById("PR_ofc_PinError").innerHTML = " &nbsp;";
        document.getElementById("PR_ofc_Pin").style.border = "1px solid #ccc";
        return true;
    }
}

//MOTHER TUNG VALIDATION
function validateMotherTongue() {
    var elem = document.getElementById("PR_motherTongue").value;
    if (elem == 0) {
        document.getElementById("PR_motherTongueError").innerHTML = "Select Mother Tongue";
        document.getElementById("PR_motherTongue").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("PR_motherTongueError").innerHTML = " &nbsp;";
        document.getElementById("PR_motherTongue").style.border = "1px solid #ccc";
        return true;
    }
}





//-------------------------ILLNESS VALIDATION-------------------------


//VAGITARION YEARS VALIDATION

function validateVegYears() {
    var elem = document.getElementById("PR_Ill_VegYears").value;

    if (elem == "") {
        document.getElementById("PR_Ill_VegYearsError").innerHTML = " &nbsp;";
        document.getElementById("PR_Ill_VegYears").style.border = "1px solid #ccc";
        return true;
    }else{
        if ((elem <= 0) || (elem >= 100) ) {
        document.getElementById("PR_Ill_VegYearsError").innerHTML = "Invalid Years";
        document.getElementById("PR_Ill_VegYears").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("PR_Ill_VegYearsError").innerHTML = " &nbsp;";
        document.getElementById("PR_Ill_VegYears").style.border = "1px solid #ccc";
        return true;
    }
    }
}


//VAGITARION MONTHS VALIDATION
function validateVegMonths() {
    var elem = document.getElementById("PR_Ill_VegMonths").value;

    if (elem == "") {
            document.getElementById("PR_Ill_VegMonthsError").innerHTML = " &nbsp";
            document.getElementById("PR_Ill_VegMonths").style.border = "1px solid #ccc";
        return true;
    } else {

        if (elem >= 12 || elem < 1) {
            document.getElementById("PR_Ill_VegMonthsError").innerHTML = "Invalid Months";
            document.getElementById("PR_Ill_VegMonths").style.border = "1px solid red";
            return true;
        } else {

            document.getElementById("PR_Ill_VegMonthsError").innerHTML = " &nbsp;";
            document.getElementById("PR_Ill_VegMonths").style.border = "1px solid #ccc";
            return true;
        }
    }
}



//MEDITATION DAYS VALIDATION
function validateMedDays() {
    var elem = document.getElementById("PR_Ill_MedDays").value;

    if (elem == "") {
         document.getElementById("PR_Ill_MedDaysError").innerHTML = " &nbsp";
         document.getElementById("PR_Ill_MedDays").style.border = "1px solid #ccc";
        return true;
    } else {
        if (elem > 31 || elem < 1) {
            document.getElementById("PR_Ill_MedDaysError").innerHTML = "Invalid Days";
            document.getElementById("PR_Ill_MedDays").style.border = "1px solid red";
            return false;
        } else {
            document.getElementById("PR_Ill_MedDaysError").innerHTML = " &nbsp;";
            document.getElementById("PR_Ill_MedDays").style.border = "1px solid #ccc";
            return true;
        }
    }
}




//MEDITATION MONTHS VALIDATION
function validateMedMonths() {
     var elem = document.getElementById("PR_Ill_MedMonths").value;

    if (elem == "") {
        alert("a");
         document.getElementById("PR_Ill_MedMonthsError").innerHTML = " &nbsp";
         document.getElementById("PR_Ill_MedMonths").style.border = "1px solid #ccc";
        return true;
    } else {
        if (elem > 11 || elem < 1) {
             alert("b");
            document.getElementById("PR_Ill_MedMonthsError").innerHTML = "Invalid Days";
            document.getElementById("PR_Ill_MedMonths").style.border = "1px solid red";
            return false;
        } else {
             alert("c");
            document.getElementById("PR_Ill_MedMonthsError").innerHTML = " &nbsp;";
            document.getElementById("PR_Ill_MedMonths").style.border = "1px solid #ccc";
            return true;
        }
    }
}


//MEDITATION YEARS VALIDATION

function validateMedYears() {
    var elem = document.getElementById("PR_Ill_MedYears").value;

    if (elem == "") {
            document.getElementById("PR_Ill_MedYearsError").innerHTML = " &nbsp;";
            document.getElementById("PR_Ill_MedYears").style.border = "1px solid #ccc";
            return true;
    }else{
        if ((elem <= 0) || (elem >= 100) ) {
      
        document.getElementById("PR_Ill_MedYearsError").innerHTML = "Invalid Years";
        document.getElementById("PR_Ill_MedYears").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("PR_Ill_MedYearsError").innerHTML = " &nbsp;";
        document.getElementById("PR_Ill_MedYears").style.border = "1px solid #ccc";
        return true;
    }
    }
}


//SPIRITUAL DAYS VALIDATION
//function validateSpiDays() {
//    var elem = document.getElementById("PR_Ill_SpiDays").value;
//    var elem2 = document.getElementById("PR_Ill_SpiMonths").value;
//    var elem3 = document.getElementById("PR_Ill_SpiYears").value;
//    var days31 = [1, 01, 3, 03, 5, 05, 7, 07, 8, 08, 10, 12];
//    var days30 = [4, 04, 6, 06, 9, 09, 11];
//    var days28 = [2, 02];
//    if (elem == "") {
//        document.getElementById("PR_Ill_SpiDaysError").innerHTML = " &nbsp";
//        return true;
//    } else {
//        var i, flag = 0;
//        for (i = 0; i < days31.length; i++) {
//            if ((elem2 == days31[i]) && (elem <= 0 || elem > 31)) {
//                document.getElementById("PR_Ill_SpiDaysError").innerHTML = "Invalid Days";
//                document.getElementById("PR_Ill_SpiDays").style.border = "1px solid red";
//                flag = 1;
//            }
//        }
//        for (i = 0; i < days30.length; i++) {
//            if ((elem2 == days30[i]) && (elem <= 0 || elem > 30)) {
//                document.getElementById("PR_Ill_SpiDaysError").innerHTML = "Invalid Days";
//                document.getElementById("PR_Ill_SpiDays").style.border = "1px solid red";
//                flag = 1;
//            }
//        }
//        for (i = 0; i < days28.length; i++) {
//            if ((elem2 == days28[i])) {
//                if (elem3 % 4 == 0) {
//                    if (elem <= 0 || elem > 29) {
//                        document.getElementById("PR_Ill_SpiDaysError").innerHTML = "Invalid Days";
//                        document.getElementById("PR_Ill_SpiDays").style.border = "1px solid red";
//                        flag = 1;
//                    }
//                } else {
//                    if (elem <= 0 || elem > 28) {
//                        document.getElementById("PR_Ill_SpiDaysError").innerHTML = "Invalid Days";
//                        document.getElementById("PR_Ill_SpiDays").style.border = "1px solid red";
//                        flag = 1;
//                    }
//                }
//            }
//        }
//        if (flag == 0) {
//            document.getElementById("PR_Ill_SpiDaysError").innerHTML = " &nbsp;";
//            document.getElementById("PR_Ill_SpiDays").style.border = "1px solid #ccc";
//            return true;
//        }
//
//
//    }
//}



//SPIRITUAL MONTHS VALIDATION
function validateSpiDays() {
    var elem = document.getElementById("PR_Ill_SpiDays").value;

    if (elem == "") {
        document.getElementById("PR_Ill_SpiDaysError").innerHTML = " &nbsp";
         document.getElementById("PR_Ill_SpiDays").style.border = "1px solid #ccc";
        return true;
    } else {

        if (elem > 31 || elem < 1) {
            document.getElementById("PR_Ill_SpiDaysError").innerHTML = "Invalid Days";
            document.getElementById("PR_Ill_SpiDays").style.border = "1px solid red";
            return true;
        } else {

            document.getElementById("PR_Ill_SpiDaysError").innerHTML = " &nbsp;";
            document.getElementById("PR_Ill_SpiDays").style.border = "1px solid #ccc";
            return true;
        }
    }
}

//SPIRITUAL MONTHS VALIDATION
function validateMedMonths() {
    var elem = document.getElementById("PR_Ill_MedMonths").value;

    if (elem == "") {
        document.getElementById("PR_Ill_MedMonthsError").innerHTML = " &nbsp";
         document.getElementById("PR_Ill_MedMonths").style.border = "1px solid #ccc";
        return true;
    } else {

        if (elem >= 12 || elem < 1) {
            document.getElementById("PR_Ill_MedMonthsError").innerHTML = "Invalid Months";
            document.getElementById("PR_Ill_MedMonths").style.border = "1px solid red";
            return true;
        } else {

            document.getElementById("PR_Ill_MedMonthsError").innerHTML = " &nbsp;";
            document.getElementById("PR_Ill_MedMonths").style.border = "1px solid #ccc";
            return true;
        }
    }
}


//SPIRITUAL MONTHS VALIDATION
function validateSpiMonths() {
    var elem = document.getElementById("PR_Ill_SpiMonths").value;

    if (elem == "") {
        document.getElementById("PR_Ill_SpiMonthsError").innerHTML = " &nbsp";
         document.getElementById("PR_Ill_SpiMonths").style.border = "1px solid #ccc";
        return true;
    } else {

        if (elem >= 12 || elem < 1) {
            document.getElementById("PR_Ill_SpiMonthsError").innerHTML = "Invalid Months";
            document.getElementById("PR_Ill_SpiMonths").style.border = "1px solid red";
            return true;
        } else {

            document.getElementById("PR_Ill_SpiMonthsError").innerHTML = " &nbsp;";
            document.getElementById("PR_Ill_SpiMonths").style.border = "1px solid #ccc";
            return true;
        }
    }
}


//SPIRITUAL YEARS VALIDATION

function validateSpiYears() {
    var elem = document.getElementById("PR_Ill_SpiYears").value;

    if (elem == "") {
        document.getElementById("PR_Ill_SpiYearsError").innerHTML = " &nbsp;";
        document.getElementById("PR_Ill_SpiYears").style.border = "1px solid #ccc";
        return true;
    }else{
        if ((elem <= 0) || (elem >= 100) ) {
        document.getElementById("PR_Ill_SpiYearsError").innerHTML = "Invalid Years";
        document.getElementById("PR_Ill_SpiYears").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("PR_Ill_SpiYearsError").innerHTML = " &nbsp;";
        document.getElementById("PR_Ill_SpiYears").style.border = "1px solid #ccc";
        return true;
    }
    }
}





//ILLNESS DETAILS VALIDATION
function validateIllnessDetails() {
    var elem = document.getElementById("PR_Ill_Details").value;
    if (elem == 0) {
        document.getElementById("PR_Ill_DetailsError").innerHTML = "Select Disease";
        document.getElementById("PR_Ill_Details").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("PR_Ill_DetailsError").innerHTML = " &nbsp;";
        document.getElementById("PR_Ill_Details").style.border = "1px solid #ccc";
        return true;
    }
}


//ILLNESS DESCRIPTION VALIDATION
function validateiLLNESSDescription() {
    var elem = document.getElementById("PR_Ill_Description").value;

    if (elem == "") {
        document.getElementById("PR_Ill_DescriptionError").innerHTML = "Enter Description";
        document.getElementById("PR_Ill_Description").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("PR_Ill_DescriptionError").innerHTML = " &nbsp;";
        document.getElementById("PR_Ill_Description").style.border = "1px solid #ccc";
    return true;
    }
}


//ILNESS YEARS VALIDATION
function validateIlnessYears() {
    var elem = document.getElementById("PR_Ill_years").value;

    if (elem == "") {
        document.getElementById("PR_Ill_yearsError").innerHTML = "Enter Years";
        document.getElementById("PR_Ill_years").style.border = "1px solid red";
        return false;
    }
    if (elem <= 0) {
        document.getElementById("PR_Ill_yearsError").innerHTML = "Invalid Years";
        document.getElementById("PR_Ill_years").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("PR_Ill_yearsError").innerHTML = " &nbsp;";
        document.getElementById("PR_Ill_years").style.border = "1px solid #ccc";
        return true;
    }
}



//MONTHS VALIDATION
function validateIlnessMonths() {
    var elem = document.getElementById("PR_Ill_Months").value;


    if (elem  == "" ) {
        document.getElementById("PR_Ill_MonthsError").innerHTML = " &nbsp";
        document.getElementById("PR_Ill_Months").style.border = "1px solid #ccc";
        return true;
    } else {
        
    if (elem >= 12 || elem < 1) {
        document.getElementById("PR_Ill_MonthsError").innerHTML = "Invalid Months";
        document.getElementById("PR_Ill_Months").style.border = "1px solid red";
        return true;
    }else{
        document.getElementById("PR_Ill_MonthsError").innerHTML = " &nbsp;";
        document.getElementById("PR_Ill_Months").style.border = "1px solid #ccc";
    return true;
    }
    }
}



//*************FAMILY DETAILS VALIDATION*************


//FAMILY RELATION VALIDATION
function validateFamilyRelation() {
    var elem = document.getElementById("PR_FamilyRelation").value;

    if (elem == 0) {
        document.getElementById("PR_FamilyRelationError").innerHTML = "Select Relation";
        document.getElementById("PR_FamilyRelation").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("PR_FamilyRelationError").innerHTML = " &nbsp;";
        document.getElementById("PR_FamilyRelation").style.border = "1px solid #ccc";
        return true;
    }
}

//FAMILY NAME VALIDATION
function validateFamilyName() {
    var elem = document.getElementById("PR_FamilyName").value;

    if (elem == "") {
        document.getElementById("PR_FamilyNameError").innerHTML = "Enter Relation Name";
        document.getElementById("PR_FamilyName").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("PR_FamilyNameError").innerHTML = " &nbsp;";
        document.getElementById("PR_FamilyName").style.border = "1px solid #ccc";
        return true;
    }
}

//AGE VALIDATION
function validateRelativeAge() {
    var elem = document.getElementById("PR_RelativeAge").value;

    if (elem == "") {
        document.getElementById("PR_RelativeAgeError").innerHTML = "Enter Relation Age";
        document.getElementById("PR_RelativeAge").style.border = "1px solid red";
        return false;
    } else {
         if ((elem < 1) || (elem >= 100)) {
        document.getElementById("PR_RelativeAgeError").innerHTML = "Invalid Age";
        document.getElementById("PR_RelativeAge").style.border = "1px solid red";
              return false;
         }else{
        document.getElementById("PR_RelativeAgeError").innerHTML = " &nbsp;";
        document.getElementById("PR_RelativeAge").style.border = "1px solid #ccc";
        return true;
             }
    }
}

//**************RELATIVES/FRIENDS AT FAR OFF PLACES SECTION

function validateRelationName(){
    var elem = document.getElementById("PR_FD_Relation").value;
    var elem2 = document.getElementById("PR_FD_RelationName").value;
    
    if( elem == 0){
            document.getElementById("PR_FD_RelationNameError").innerHTML=" &nbsp;"
            document.getElementById("PR_FD_RelationName").style.border = "1px solid #ccc";
            return true;
    }else{
        if((!elem == 0 && elem2 == "")){
            document.getElementById("PR_FD_RelationNameError").innerHTML="Enter " + elem + " Name"
            document.getElementById("PR_FD_RelationName").style.border = "1px solid red";
            return false;
        }else{
            document.getElementById("PR_FD_RelationNameError").innerHTML=" &nbsp;"
            document.getElementById("PR_FD_RelationName").style.border = "1px solid #ccc";
            return true;
            
        }
    }
}



//MOBILE VALIDATION
function validateRelationMobile() {
    var elem = document.getElementById("PR_FD_Mobile").value;

    if (elem == "") {
            document.getElementById("PR_FD_MobileError").innerHTML = " &nbsp;";
            document.getElementById("PR_FD_Mobile").style.border = "1px solid #ccc";
        return true;
    } else {

        if (elem.length < 10 || elem.length > 10) {
            document.getElementById("PR_FD_MobileError").innerHTML = "Invalid Mobile No";
            document.getElementById("PR_FD_Mobile").style.border = "1px solid red";
            return false;

        } else {
            document.getElementById("PR_FD_MobileError").innerHTML = " &nbsp;";
            document.getElementById("PR_FD_Mobile").style.border = "1px solid #ccc";
            return true;
        }
    }

}

//EMAIL VALIDATION
function validateRelationEmail() {
    var elem = document.getElementById("PR_FD_Email").value;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (elem == "") {
            document.getElementById("PR_FD_EmailError").innerHTML = " &nbsp;";
            document.getElementById("PR_FD_Email").style.border = "1px solid #ccc";
            return true;
    } else {
        if (reg.test(elem) == false) {
            document.getElementById("PR_FD_EmailError").innerHTML = "Invalid email id";
            document.getElementById("PR_FD_Email").style.border = "1px solid red";
            return false;
        } else {
            document.getElementById("PR_FD_EmailError").innerHTML = " &nbsp;";
            document.getElementById("PR_FD_Email").style.border = "1px solid #ccc";
            return true;
        }
    }
}

//******REFERENCE HISTORY SECTION

//MOBILE VALIDATION
function validateReferenceMobile() {
    var elem = document.getElementById("PR_FD_RefMobile").value;

    if (elem == "") {
            document.getElementById("PR_FD_RefMobileError").innerHTML = " &nbsp;";
            document.getElementById("PR_FD_RefMobile").style.border = "1px solid #ccc";
        return true;
    } else {

        if (elem.length < 10 || elem.length > 10) {
            document.getElementById("PR_FD_RefMobileError").innerHTML = "Invalid Mobile No";
            document.getElementById("PR_FD_RefMobile").style.border = "1px solid red";
            return false;

        } else {
            document.getElementById("PR_FD_RefMobileError").innerHTML = " &nbsp;";
            document.getElementById("PR_FD_RefMobile").style.border = "1px solid #ccc";
            return true;
        }
    }

}

//EMAIL VALIDATION
function validateReferenceEmail() {
    var elem = document.getElementById("PR_FD_RefEmail").value;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (elem == "") {
            document.getElementById("PR_FD_RefEmailError").innerHTML = " &nbsp;";
            document.getElementById("PR_FD_RefEmail").style.border = "1px solid #ccc";
            return true;
    } else {
        if (reg.test(elem) == false) {
            document.getElementById("PR_FD_RefEmailError").innerHTML = "Invalid email id";
            document.getElementById("PR_FD_RefEmail").style.border = "1px solid red";
            return false;
        } else {
            document.getElementById("PR_FD_RefEmailError").innerHTML = " &nbsp;";
            document.getElementById("PR_FD_RefEmail").style.border = "1px solid #ccc";
            return true;
        }
    }
}




//**************VALIDATE PERSONAL DETAILS FEELDS ON SUBMIT**************

 //FOR GETTING MULTIPLE LANGUAGES
    function getMultipleSelectedValue() {
        var values = [];
        var x = document.getElementById("PR_languageKnown");
        for (var i = 0; i < x.options.length; i++) {
            if (x.options[i].selected == true) {
                values.push(x.options[i].value);
            }
        }
        return values;
    }

    //FOR GETTING MULTIPLE ARTS KNOWN
    function getMultipleArtsValue() {
        var values = [];
        var x = document.getElementById("PR_artsKnown");
        for (var i = 0; i < x.options.length; i++) {
            if (x.options[i].selected == true) {
                values.push(x.options[i].value);
            }
        }
        return values;
    }


function PR_PersonalDetailsValidation() {

    var valid = false;

    if (!validateFirstName()) {
        document.getElementById("PR_firstName").focus();
        return valid;
    }

    if (!validateLastName()) {
        document.getElementById("PR_lastName").focus();
        return valid;
    }

    if (!validateYears()) {
        document.getElementById("PR_years").focus();
        return valid;
    }


    if (!validateGender()) {
        document.getElementById("PR_gender").focus();
        return valid;
    }


    if (!validateResMobile()) {
        document.getElementById("PR_Res_Mobile").focus();
        return valid;
    }


    if (!validateEmail()) {
        document.getElementById("PR_Res_email").focus();
        return valid;
    }


    if (!validateAddress()) {
        document.getElementById("PR_Res_Address").focus();
        return valid;
    }


    if (!validateResState()) {
        document.getElementById("PR_Res_State").focus();
        return valid;
    }


    if (!validate_Res_District()) {
        var elem = document.getElementById("PR_Res_State").value;
        document.getElementById("PR_Res_" + elem).focus();
        return valid;
    }

    if (!validateRefCity()) {
        document.getElementById("PR_Res_City").focus();
        return valid;
    }

    //    IF RESIDESCE ADDRESS AND OFFICE ADDRESS NOT SAME

    if (!checkOfficeAddress()) {


        if (!validateOfcMobile()) {
            document.getElementById("PR_ofc_Mobile").focus();
            return valid;
        }

        if (!validateOfcEmail()) {
            document.getElementById("PR_ofc_email").focus();
            return valid;
        }

        if (!validateOfcAddress()) {
            document.getElementById("PR_ofc_Address").focus();
            return valid;
        }

        if (!validateOfcState()) {
            document.getElementById("PR_ofc_State").focus();
            return valid;
        }

        if (!validate_ofc_District()) {
            var elem = document.getElementById("PR_ofc_State").value;
            document.getElementById("PR_ofc_" + elem).focus();
            return valid;
        }

        if (!validateOfcCity()) {
            document.getElementById("PR_ofc_City").focus();
            return valid;
        }

    }

    if (!validateMotherTongue()) {
        document.getElementById("PR_motherTongue").focus();
        return valid;
    }

   
    //Personal Details ******
    var PR_firstName = document.getElementById("PR_firstName").value;
    var PR_lastName = document.getElementById("PR_lastName").value;
    var PR_years = document.getElementById("PR_years").value;
    var PR_Months = document.getElementById("PR_Months").value;
    var PR_gender = document.getElementById("PR_gender").value;
    var PR_education = document.getElementById("PR_education").value;
    var PR_profession = document.getElementById("PR_profession").value;
    var PR_guardian = document.getElementById("PR_guardian").value;
    var PR_relation = document.getElementById("PR_relation").value;
    var PR_guardianProfesion = document.getElementById("PR_guardianProfesion").value;
    var PR_guardianMobile = document.getElementById("PR_guardianMobile").value;
    var PR_guardianEmail = document.getElementById("PR_guardianEmail").value;

    //Residential Address
    var PR_Res_Mobile = document.getElementById("PR_Res_Mobile").value;
    var PR_Res_LandNumber = document.getElementById("PR_Res_LandNumber").value;
    var PR_Res_email = document.getElementById("PR_Res_email").value;
    var PR_Res_Address = document.getElementById("PR_Res_Address").value;
    var PR_Res_State = document.getElementById("PR_Res_State").value;
    var PR_Res_Dirstic = document.getElementById("PR_Res_"+PR_Res_State).value;
    var PR_Res_City = document.getElementById("PR_Res_City").value;
    var PR_Res_Pin = document.getElementById("PR_Res_Pin").value;

    //Office Address/Present Postal Address
    var checkOfficeAddres = document.getElementById("checkOfficeAddres").checked;
    if(checkOfficeAddres==true){
        
    var PR_ofc_Mobile = PR_Res_Mobile;
    var PR_ofc_address = PR_Res_LandNumber;
    var PR_ofc_email = PR_Res_email;
    var PR_ofc_Address =  PR_Res_Address;
    var PR_ofc_State =  PR_Res_State;
    var PR_ofc_Dirstic =  PR_Res_Dirstic;
    var PR_ofc_City =  PR_Res_City;
    var PR_ofc_Pin =  PR_Res_Pin;
        
    }else{
    var PR_ofc_Mobile = document.getElementById("PR_ofc_Mobile").value;
    var PR_ofc_address = document.getElementById("PR_ofc_address").value;
    var PR_ofc_email = document.getElementById("PR_ofc_email").value;
    var PR_ofc_Address = document.getElementById("PR_ofc_Address").value;
    var PR_ofc_State = document.getElementById("PR_ofc_State").value;
    var PR_ofc_Dirstic = document.getElementById("PR_ofc_"+PR_ofc_State).value;
    var PR_ofc_City = document.getElementById("PR_ofc_City").value;
    var PR_ofc_Pin = document.getElementById("PR_ofc_Pin").value;
}

    //Mother Tongue
    var PR_motherTongue = document.getElementById("PR_motherTongue").value;
    var languageKnown = getMultipleSelectedValue();
    var artsKnown = getMultipleArtsValue();



    var ref = firebase.database().ref();
    var pr_PerSonalref = ref.child("patientRegistration");
    var key = pr_PerSonalref.push().getKey();
    document.getElementById("tempKey").value=key;
    var PersonalDetails = pr_PerSonalref.child(key);
    PersonalDetails.child("personalDetails").update({

                PR_firstName: PR_firstName,
                PR_lastName: PR_lastName,
                PR_years: PR_years,
                PR_Months: PR_Months,
                PR_gender: PR_gender,
                PR_education: PR_education,
                PR_profession: PR_profession,
                PR_guardian: PR_guardian,
                PR_relation: PR_relation,
                PR_guardianProfesion: PR_guardianProfesion,
                PR_guardianMobile: PR_guardianMobile,
                PR_guardianEmail: PR_guardianEmail,

                PR_Res_Mobile: PR_Res_Mobile,
                PR_Res_LandNumber: PR_Res_LandNumber,
                PR_Res_email: PR_Res_email,
                PR_Res_Address: PR_Res_Address,
                PR_Res_State: PR_Res_State,
                PR_Res_Dirstic: PR_Res_Dirstic,
                PR_Res_City: PR_Res_City,
                PR_Res_Pin: PR_Res_Pin,

                checkOfficeAddres: checkOfficeAddres,

                PR_ofc_Mobile: PR_ofc_Mobile,
                PR_ofc_address: PR_ofc_address,
                PR_ofc_email: PR_ofc_email,
                PR_ofc_Address: PR_ofc_Address,
                PR_ofc_State: PR_ofc_State,
                PR_ofc_Dirstic: PR_ofc_Dirstic,
                PR_ofc_City: PR_ofc_City,
                PR_ofc_Pin: PR_ofc_Pin,


                PR_motherTongue: PR_motherTongue,
                languageKnown: languageKnown,
                artsKnown: artsKnown,
                submittedOn : firebase.database.ServerValue.TIMESTAMP
            });
    
                displayIllnessDetails();
                return true;
            }
                         
                         

//**************VALIDATE ILLNESS DETAILS FEELDS ON SUBMIT**************
                         
function PR_IllnessDetailsValidation() {

    var validate = false;

    if (!validateIllnessDetails()) {
        document.getElementById("PR_Ill_Details").focus();
        return validate;
    }

    if (!validateiLLNESSDescription()) {
        document.getElementById("PR_Ill_Description").focus();
        return validate;
    }

    if (!validateIlnessYears()) {
        document.getElementById("PR_Ill_years").focus();
        return validate;
    }

    //Illness Details *******
    var PR_Ill_Pre_Stress_Mental = document.getElementById("PR_Ill_Pre_Stress_Mental").checked;
    if (PR_Ill_Pre_Stress_Mental == true) {
        PR_Ill_Pre_Stress_Mental = document.getElementById("PR_Ill_Pre_Stress_Mental").value;
    } else {
        PR_Ill_Pre_Stress_Mental = "";
    }

    var PR_Ill_Pre_Stress_Social = document.getElementById("PR_Ill_Pre_Stress_Social").checked;
    if (PR_Ill_Pre_Stress_Social == true) {
        PR_Ill_Pre_Stress_Social = document.getElementById("PR_Ill_Pre_Stress_Social").value;
    } else {
        PR_Ill_Pre_Stress_Social = "";
    }

    var PR_Ill_Pre_Stress_Mental_Details = document.getElementById("PR_Ill_Pre_Stress_Mental_Details").value;

    var PR_Ill_Crnt_Treatment_Medical = document.getElementById("PR_Ill_Crnt_Treatment_Medical").checked;
    if (PR_Ill_Crnt_Treatment_Medical == true) {
        PR_Ill_Crnt_Treatment_Medical = document.getElementById("PR_Ill_Crnt_Treatment_Medical").value;
    } else {
        PR_Ill_Crnt_Treatment_Medical = "";
    }
    var PR_Ill_Crnt_Treatment_Surgery = document.getElementById("PR_Ill_Crnt_Treatment_Surgery").checked;
    if (PR_Ill_Crnt_Treatment_Surgery == true) {
        PR_Ill_Crnt_Treatment_Surgery = document.getElementById("PR_Ill_Crnt_Treatment_Surgery").value;
    } else {
        PR_Ill_Crnt_Treatment_Surgery = "";
    }
    
    var PR_Ill_Crnt_Treatment_Details = document.getElementById("PR_Ill_Crnt_Treatment_Details").value;
    var PR_Ill_Veg = document.getElementById("PR_Ill_Veg").value;
    var PR_Ill_VegYears = document.getElementById("PR_Ill_VegYears").value;
    var PR_Ill_VegMonths = document.getElementById("PR_Ill_VegMonths").value;
    var PR_Ill_MedDays = document.getElementById("PR_Ill_MedDays").value;
    var PR_Ill_MedMonths = document.getElementById("PR_Ill_MedMonths").value;
    var PR_Ill_MedYears = document.getElementById("PR_Ill_MedYears").value;
    var PR_Ill_MaritalStatus = document.getElementById("PR_Ill_MaritalStatus").value;
    var PR_Ill_JontFaliy = document.getElementById("PR_Ill_JontFaliy").value;
    var PR_Ill_Class = document.getElementById("PR_Ill_Class").value;
    var PR_Ill_Support = document.getElementById("PR_Ill_Support").value;

    //Spiritual Practices
    var PR_Ill_Spi_Pooja = document.getElementById("PR_Ill_Spi_Pooja").checked;
    if (PR_Ill_Spi_Pooja == true) {
        PR_Ill_Spi_Pooja = document.getElementById("PR_Ill_Spi_Pooja").value;
    } else {
        PR_Ill_Spi_Pooja = "";
    }

    var PR_Ill_Spi_Mantra = document.getElementById("PR_Ill_Spi_Mantra").checked;
    if (PR_Ill_Spi_Mantra == true) {
        PR_Ill_Spi_Mantra = document.getElementById("PR_Ill_Spi_Mantra").value;
    } else {
        PR_Ill_Spi_Mantra = "";
    }

    var PR_Ill_Spi_Japa = document.getElementById("PR_Ill_Spi_Japa").checked;
    if (PR_Ill_Spi_Japa == true) {
        PR_Ill_Spi_Japa = document.getElementById("PR_Ill_Spi_Japa").value;
    } else {
        PR_Ill_Spi_Japa = "";
    }


    var PR_Ill_Spi_Yoga = document.getElementById("PR_Ill_Spi_Yoga").checked;
    if (PR_Ill_Spi_Yoga == true) {
        PR_Ill_Spi_Yoga = document.getElementById("PR_Ill_Spi_Yoga").value;
    } else {
        PR_Ill_Spi_Yoga = "";
    }
    var PR_Ill_SpiYears = document.getElementById("PR_Ill_SpiYears").value;
    var PR_Ill_SpiMonths = document.getElementById("PR_Ill_SpiMonths").value;
    var PR_Ill_SpiDays = document.getElementById("PR_Ill_SpiDays").value;
    var PR_Ill_SpiCurrentTreatment = document.getElementById("PR_Ill_SpiCurrentTreatment").value;


    //Vital Signs
    var PR_Ill_Pulse = document.getElementById("PR_Ill_Pulse").value;
    var PR_Ill_BloodPressure = document.getElementById("PR_Ill_BloodPressure").value;
    var PR_Ill_Temperature = document.getElementById("PR_Ill_Temperature").value;
    var PR_Ill_RespiratoryRate = document.getElementById("PR_Ill_RespiratoryRate").value;
    var PR_Ill_Weight = document.getElementById("PR_Ill_Weight").value;
    var PR_Ill_Height = document.getElementById("PR_Ill_Height").value;

    //Illness History
    var PR_Ill_Details = document.getElementById("PR_Ill_Details").value;
    var PR_Ill_Description = document.getElementById("PR_Ill_Description").value;
    var PR_Ill_years = document.getElementById("PR_Ill_years").value;
    var PR_Ill_Months = document.getElementById("PR_Ill_Months").value;
    var PR_Ill_InvestigationDetail = document.getElementById("PR_Ill_InvestigationDetail").value;
    var PR_Ill_UploadDocuments = document.getElementById("PR_Ill_UploadDocuments").value;


    var ref = firebase.database().ref();
    var pr_Illnessref = ref.child("patientRegistration");
    var key = document.getElementById("tempKey").value;
    var illnessDetails = pr_Illnessref.child(key);
    illnessDetails.child("illnessDetails").update({

                PR_Ill_Pre_Stress_Mental: PR_Ill_Pre_Stress_Mental,
                PR_Ill_Pre_Stress_Social: PR_Ill_Pre_Stress_Social,
                PR_Ill_Pre_Stress_Mental_Details: PR_Ill_Pre_Stress_Mental_Details,
                PR_Ill_Crnt_Treatment_Medical: PR_Ill_Crnt_Treatment_Medical,
                PR_Ill_Crnt_Treatment_Surgery: PR_Ill_Crnt_Treatment_Surgery,
                PR_Ill_Crnt_Treatment_Details: PR_Ill_Crnt_Treatment_Details,
                PR_Ill_Veg: PR_Ill_Veg,
                PR_Ill_VegYears: PR_Ill_VegYears,
                PR_Ill_VegMonths: PR_Ill_VegMonths,
                PR_Ill_MedDays: PR_Ill_MedDays,
                PR_Ill_MedMonths: PR_Ill_MedMonths,
                PR_Ill_MedYears: PR_Ill_MedYears,
                PR_Ill_MaritalStatus: PR_Ill_MaritalStatus,
                PR_Ill_JontFaliy: PR_Ill_JontFaliy,
                PR_Ill_Class: PR_Ill_Class,
                PR_Ill_Support: PR_Ill_Support,

                PR_Ill_Spi_Pooja: PR_Ill_Spi_Pooja,
                PR_Ill_Spi_Mantra: PR_Ill_Spi_Mantra,
                PR_Ill_Spi_Japa: PR_Ill_Spi_Japa,
                PR_Ill_Spi_Yoga: PR_Ill_Spi_Yoga,
                PR_Ill_SpiYears: PR_Ill_SpiYears,
                PR_Ill_SpiMonths: PR_Ill_SpiMonths,
                PR_Ill_SpiDays: PR_Ill_SpiDays,
                PR_Ill_SpiCurrentTreatment: PR_Ill_SpiCurrentTreatment,


                PR_Ill_Pulse: PR_Ill_Pulse,
                PR_Ill_BloodPressure: PR_Ill_BloodPressure,
                PR_Ill_Temperature: PR_Ill_Temperature,
                PR_Ill_RespiratoryRate: PR_Ill_RespiratoryRate,
                PR_Ill_Weight: PR_Ill_Weight,
                PR_Ill_Height: PR_Ill_Height,


                PR_Ill_Details: PR_Ill_Details,
                PR_Ill_Description: PR_Ill_Description,
                PR_Ill_years: PR_Ill_years,
                PR_Ill_Months: PR_Ill_Months,
                PR_Ill_InvestigationDetail: PR_Ill_InvestigationDetail,
                PR_Ill_UploadDocuments: PR_Ill_UploadDocuments

             });
    
                displayFamilyDetails();
                return true;
            }

//**************VALIDATE FAMILY DETAILS FEELDS ON SUBMIT**************
                        
function PR_FamilyDetailsValidation() {

    var validate = false;

    if (!validateFamilyRelation()) {
        document.getElementById("PR_FamilyRelation").focus();
        return validate;
    }

    if (!validateFamilyName()) {
        document.getElementById("PR_FamilyName").focus();
        return validate;
    }

    if (!validateRelativeAge()) {
        document.getElementById("PR_RelativeAge").focus();
        return validate;
    }

    //Family Details (Family Tree)****
    var PR_FamilyRelation = document.getElementById("PR_FamilyRelation").value;
    var PR_FamilyName = document.getElementById("PR_FamilyName").value;
    var PR_RelativeAge = document.getElementById("PR_RelativeAge").value;
    var PR_Remarks = document.getElementById("PR_Remarks").value;

    //Relatives/Friends at far off places
    var PR_FD_Relation = document.getElementById("PR_FD_Relation").value;
    var PR_FD_RelationName = document.getElementById("PR_FD_RelationName").value;
    var PR_FD_Abroad = document.getElementById("PR_FD_Abroad").value;
    var PR_FD_District = document.getElementById("PR_FD_District").value;
    var PR_FD_State = document.getElementById("PR_FD_State").value;
    var PR_FD_Country = document.getElementById("PR_FD_Country").value;
    var PR_FD_Email = document.getElementById("PR_FD_Email").value;
    var PR_FD_Mobile = document.getElementById("PR_FD_Mobile").value;

    //Reference History
    var PR_FD_ReferedBy = document.getElementById("PR_FD_ReferedBy").value;
    var PR_FD_RefMobile = document.getElementById("PR_FD_RefMobile").value;
    var PR_FD_RefEmail = document.getElementById("PR_FD_RefEmail").value;
    var PR_FD_Address_1 = document.getElementById("PR_FD_Address_1").value;
    var PR_FD_Address_2 = document.getElementById("PR_FD_Address_2").value;
    var PR_FD_Address_3 = document.getElementById("PR_FD_Address_3").value;
    var PR_FD_HowKnow = document.getElementById("PR_FD_HowKnow").value;


    var ref = firebase.database().ref();
    var pr_familyDetails = ref.child("patientRegistration");
    var key = document.getElementById("tempKey").value;
    var familyDetails = pr_familyDetails.child(key);
    familyDetails.child("familyDetails").update({

        PR_FamilyRelation: PR_FamilyRelation,
        PR_FamilyName: PR_FamilyName,
        PR_RelativeAge: PR_RelativeAge,
        PR_Remarks: PR_Remarks,

        PR_FD_Relation: PR_FD_Relation,
        PR_FD_RelationName: PR_FD_RelationName,
        PR_FD_Abroad: PR_FD_Abroad,
        PR_FD_District: PR_FD_District,
        PR_FD_State: PR_FD_State,
        PR_FD_Country: PR_FD_Country,
        PR_FD_Email: PR_FD_Email,
        PR_FD_Mobile: PR_FD_Mobile,

        PR_FD_ReferedBy: PR_FD_ReferedBy,
        PR_FD_RefMobile: PR_FD_RefMobile,
        PR_FD_RefEmail: PR_FD_RefEmail,
        PR_FD_Address_1: PR_FD_Address_1,
        PR_FD_Address_2: PR_FD_Address_2,
        PR_FD_Address_3: PR_FD_Address_3,
        PR_FD_HowKnow: PR_FD_HowKnow

    });
    return true;

}
    
