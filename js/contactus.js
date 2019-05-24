
 
window.onload=function(){
    
    var url = window.location.href;
    var res = url.split("#");
    var temp = url.split("/");
    var id= res[1];
    if(id==undefined){
        
    document.getElementById("ContactRegisteredOffice").style.display="block";
    document.getElementById("ContactPrimaryCenters").style.display="none";
    document.getElementById("ContactAdmissionCenters").style.display="none";
    document.getElementById("ContactHolisticCenters").style.display="none";
    document.getElementById("ContactEnquiry").style.display="none";
    document.getElementById("ContactFeedback").style.display="none";
    }else{
        document.getElementById("ContactRegisteredOffice").style.display="none";
        document.getElementById("ContactPrimaryCenters").style.display="none";
        document.getElementById("ContactAdmissionCenters").style.display="none";
        document.getElementById("ContactHolisticCenters").style.display="none";
        document.getElementById("ContactEnquiry").style.display="none";
        document.getElementById("ContactFeedback").style.display="none";
        document.getElementById("Contact"+id).style.display="block";
    }
   
}

function displayContact(id){
    document.getElementById("ContactRegisteredOffice").style.display="none";
    document.getElementById("ContactPrimaryCenters").style.display="none";
    document.getElementById("ContactAdmissionCenters").style.display="none";
    document.getElementById("ContactHolisticCenters").style.display="none";
    document.getElementById("ContactEnquiry").style.display="none";
    document.getElementById("ContactFeedback").style.display="none";
    document.getElementById("Contact"+id).style.display="block";
    document.getElementById("RegisteredOfficePage").style.backgroundColor="transparent";
    document.getElementById("PrimaryCentersPage").style.backgroundColor="transparent";
    document.getElementById("AdmissionCentersPage").style.backgroundColor="transparent";
    document.getElementById("HolisticCentersPage").style.backgroundColor="transparent";
    document.getElementById("EnquiryPage").style.backgroundColor="transparent";
    document.getElementById("FeedbackPage").style.backgroundColor="transparent";
    document.getElementById(id+"Page").style.backgroundColor="#022f5a";
}