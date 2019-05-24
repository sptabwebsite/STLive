//NAME VALIDATION
function validateFirstName() {

    var elem = document.getElementById("Query_FirstName").value;

    if (elem == "") {
        document.getElementById("Query_FirstNameError").innerHTML = "Enter First Name";
        document.getElementById("Query_FirstName").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("Query_FirstNameError").innerHTML = " &nbsp";
        document.getElementById("Query_FirstName").style.border = "1px solid #ccc";
        return true;
    }

}


//GENDER VALIDATION
function validateGender() {
    var elem = document.getElementById("Query_Gender").value;

    if (elem == 0) {
        document.getElementById("Query_GenderError").innerHTML = "Select Gender";
        document.getElementById("Query_Gender").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("Query_GenderError").innerHTML = " &nbsp;";
        document.getElementById("Query_Gender").style.border = "1px solid #ccc";
    }
    return true;
}

//YEARS VALIDATION
function validateYears() {
    var elem = document.getElementById("Query_years").value;

    if (elem == "") {
        document.getElementById("Query_yearsError").innerHTML = "Enter Years";
        document.getElementById("Query_years").style.border = "1px solid red";
        return false;
    }
    if (elem <= 0) {
        document.getElementById("Query_yearsError").innerHTML = "Enter Valide Years";
        document.getElementById("Query_years").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("Query_yearsError").innerHTML = " &nbsp;";
        document.getElementById("Query_years").style.border = "1px solid #ccc";
    }
    return true;
}

//MONTHS VALIDATION
function validateMonths() {
    var elem = document.getElementById("Query_Months").value;

    if (elem >= 12 || elem < 1) {
        document.getElementById("Query_MonthsError").innerHTML = "Enter Valide Months";
        document.getElementById("Query_Months").style.border = "1px solid red";
        return true;
    }
    if (elem  == "" ) {
        document.getElementById("Query_MonthsError").innerHTML = " &nbsp";
        return false;
    } else {
        document.getElementById("Query_MonthsError").innerHTML = " &nbsp;";
        document.getElementById("Query_Months").style.border = "1px solid #ccc";
    }
    return true;
}

//MOBILE VALIDATION
function validateMobile() {
    var elem = document.getElementById("Query_Mobile").value;

    if (elem == "") {
        document.getElementById("Query_MobileError").innerHTML = "Enter Mobile Number";
        document.getElementById("Query_Mobile").style.border = "1px solid red";
        return false;
    }
    if (elem.length < 10 || elem.length > 10) {
        document.getElementById("Query_MobileError").innerHTML = "Enter Valide Mobile Number";
        document.getElementById("Query_Mobile").style.border = "1px solid red";
        return false;

    } else {
        document.getElementById("Query_MobileError").innerHTML = " &nbsp;";
        document.getElementById("Query_Mobile").style.border = "1px solid #ccc";
        return true;
    }
}


//EMAIL VALIDATION
function validateEmail() {
    var elem = document.getElementById("Query_Email").value;
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (elem == "") {
        document.getElementById("Query_EmailError").innerHTML = "Enter Email Id";
        document.getElementById("Query_Email").style.border = "1px solid red";
        return false;
    } else {

        if (reg.test(elem) == false) {
            document.getElementById("Query_EmailError").innerHTML = "Enter Valide E-Mail Id";
            document.getElementById("Query_Email").style.border = "1px solid red";
            return false;
        } else {
            document.getElementById("Query_EmailError").innerHTML = " &nbsp;";
            document.getElementById("Query_Email").style.border = "1px solid #ccc";
            return true;
        }
    }
}

//NAME VALIDATION
function validateQuery() {

    var elem = document.getElementById("Query_text").value;

    if (elem == "") {
        document.getElementById("Query_textError").innerHTML = "Enter your Query";
        document.getElementById("Query_text").style.border = "1px solid red";
        return false;
    } else {
        document.getElementById("Query_textError").innerHTML = " &nbsp";
        document.getElementById("Query_text").style.border = "1px solid #ccc";
        return true;
    }

}


function validateQuery_form() {
    var valide = false;

    if (!validateFirstName()) {
        document.getElementById("Query_FirstName").focus();
        return valide;
    }

    if (!validateGender()) {
        document.getElementById("Query_Gender").focus();
        return valide;
    }

    if (!validateYears()) {
        document.getElementById("Query_years").focus();
        return valide;
    }

    if (!validateMobile()) {
        document.getElementById("Query_Mobile").focus();
        return valide;
    }

    if (!validateEmail()) {
        document.getElementById("Query_Email").focus();
        return valide;
    }

    if (!validateQuery()) {
        document.getElementById("Query_text").focus();
        return valide;
    }


    submitRCform();
    return true;
}



function submitRCform() {

    var firstName = document.getElementById("Query_FirstName").value;
    var lastName = document.getElementById("Query_LastName").value;
    var gender = document.getElementById("Query_Gender").value;
    var years = document.getElementById("Query_years").value;
    var months = document.getElementById("Query_Months").value;
    var mobile = document.getElementById("Query_Mobile").value;
    var email = document.getElementById("Query_Email").value;
    var query = document.getElementById("Query_text").value;

    var ref = firebase.database().ref();
    var rcref = ref.child("enquiry");
    rcref.push({
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        years: years,
        months: months,
        mobile: mobile,
        email: email,
        query: query,
    });
    document.getElementById("RequestForCounseling").style.display="none";
    document.getElementById("sucessQueary").style.display="block";
}

function closeQuerySucessMessage(){
    document.getElementById("RequestForCounseling").style.display="block";
    document.getElementById("sucessQueary").style.display="none"
    
    document.getElementById("Query_FirstName").value="";
    document.getElementById("Query_LastName").value="";
    document.getElementById("Query_Gender").value="0";
    document.getElementById("Query_years").value="";
    document.getElementById("Query_Months").value="";
    document.getElementById("Query_Mobile").value="";
    document.getElementById("Query_Email").value="";
    document.getElementById("Query_text").value="";
    
}