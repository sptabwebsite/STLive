//NAME VALIDATION
function validateFirstName() {

    var elem = document.getElementById("RC_FirstName").value;

    if (elem == "") {
        document.getElementById("RC_FirstNameError").innerHTML = "Enter First Name";
        document.getElementById("RC_FirstName").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("RC_FirstNameError").innerHTML = " &nbsp";
        document.getElementById("RC_FirstName").style.border = "1px solid #ccc";
        return true;
    }

}


//GENDER VALIDATION
function validateGender() {
    var elem = document.getElementById("RC_Gender").value;

    if (elem == 0) {
        document.getElementById("RC_GenderError").innerHTML = "Select Gender";
        document.getElementById("RC_Gender").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("RC_GenderError").innerHTML = " &nbsp;";
        document.getElementById("RC_Gender").style.border = "1px solid #ccc";
    }
    return true;
}

//YEARS VALIDATION
function validateYears() {
    var elem = document.getElementById("RC_years").value;

    if (elem == "") {
        document.getElementById("RC_yearsError").innerHTML = "Enter Years";
        document.getElementById("RC_years").style.border = "1px solid red";
        return false;
    }
    if (elem <= 0) {
        document.getElementById("RC_yearsError").innerHTML = "Enter Valide Years";
        document.getElementById("RC_years").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("RC_yearsError").innerHTML = " &nbsp;";
        document.getElementById("RC_years").style.border = "1px solid #ccc";
    }
    return true;
}

//MONTHS VALIDATION
function validateMonths() {
    var elem = document.getElementById("RC_Months").value;

    if (elem >= 12 || elem < 1) {
        document.getElementById("RC_MonthsError").innerHTML = "Enter Valide Months";
        document.getElementById("RC_Months").style.border = "1px solid red";
        return true;
    }
    if (elem  == "" ) {
        document.getElementById("RC_MonthsError").innerHTML = " &nbsp";
        return false;
    } else {
        document.getElementById("RC_MonthsError").innerHTML = " &nbsp;";
        document.getElementById("RC_Months").style.border = "1px solid #ccc";
    }
    return true;
}

//MOBILE VALIDATION
function validateMobile() {
    var elem = document.getElementById("RC_Mobile").value;

    if (elem == "") {
        document.getElementById("RC_MobileError").innerHTML = "Enter Mobile Number";
        document.getElementById("RC_Mobile").style.border = "1px solid red";
        return false;
    }
    if (elem.length < 10 || elem.length > 10) {
        document.getElementById("RC_MobileError").innerHTML = "Enter Valide Mobile Number";
        document.getElementById("RC_Mobile").style.border = "1px solid red";
        return false;

    } else {
        document.getElementById("RC_MobileError").innerHTML = " &nbsp;";
        document.getElementById("RC_Mobile").style.border = "1px solid #ccc";
        return true;
    }
}


//EMAIL VALIDATION
function validateEmail() {
    var elem = document.getElementById("RC_Email").value;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (elem == "") {
        document.getElementById("RC_EmailError").innerHTML = "Enter Email Id";
        document.getElementById("RC_Email").style.border = "1px solid red";
        return false;
    } else {

        if (reg.test(elem) == false) {
            document.getElementById("RC_EmailError").innerHTML = "Enter Valide E-Mail Id";
            document.getElementById("RC_Email").style.border = "1px solid red";
            return false;
        } else {
            document.getElementById("RC_EmailError").innerHTML = " &nbsp;";
            document.getElementById("RC_Email").style.border = "1px solid #ccc";
            return true;
        }
    }
}


//DISEASE VALIDATION
function validateDisease() {
    var elem = document.getElementById("RC_Disease").value;
    if (elem == 0) {
        document.getElementById("RC_DiseaseError").innerHTML = "Select Disease";
        document.getElementById("RC_Disease").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("RC_DiseaseError").innerHTML = " &nbsp;";
        document.getElementById("RC_Disease").style.border = "1px solid #ccc";
        return true;
    }
}



//DISEASE VALIDATION
function validateCounselingMode() {
    var elem = document.getElementById("RC_CounselingMode").value;
    if (elem == 0) {
        document.getElementById("RC_CounselingModeError").innerHTML = "Select Counseling Mode";
        document.getElementById("RC_CounselingMode").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("RC_CounselingModeError").innerHTML = " &nbsp;";
        document.getElementById("RC_CounselingMode").style.border = "1px solid #ccc";
        return true;
    }
}

function validateRC_form() {
    var valide = false;

    if (!validateFirstName()) {
        document.getElementById("RC_FirstName").focus();
        return valide;
    }

    if (!validateGender()) {
        document.getElementById("RC_Gender").focus();
        return valide;
    }

    if (!validateYears()) {
        document.getElementById("RC_years").focus();
        return valide;
    }

    if (!validateMobile()) {
        document.getElementById("RC_Mobile").focus();
        return valide;
    }

    if (!validateEmail()) {
        document.getElementById("RC_Email").focus();
        return valide;
    }

    if (!validateDisease()) {
        document.getElementById("RC_Disease").focus();
        return valide;
    }

    if (!validateCounselingMode()) {
        document.getElementById("RC_CounselingMode").focus();
        return valide;
    }

    submitRCform();
    return true;
}



function submitRCform() {

    var firstName = document.getElementById("RC_FirstName").value;
    var lastName = document.getElementById("RC_LastName").value;
    var gender = document.getElementById("RC_Gender").value;
    var years = document.getElementById("RC_years").value;
    var months = document.getElementById("RC_Months").value;
    var mobile = document.getElementById("RC_Mobile").value;
    var email = document.getElementById("RC_Email").value;
    var disease = document.getElementById("RC_Disease").value;
    var counseling = document.getElementById("RC_CounselingMode").value;
    var specificCounselor = document.getElementById("RC_SpecificCounselor").value;
    var onlineId = document.getElementById("RC_SkypeId").value;

    var ref = firebase.database().ref();
    var rcref = ref.child("requestForCounselings");
    rcref.push({
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        years: years,
        months: months,
        mobile: mobile,
        email: email,
        disease: disease,
        counseling: counseling,
        specificCounselor: specificCounselor,
        onlineId: onlineId
    });
}