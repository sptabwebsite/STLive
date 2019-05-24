
 
window.onload=function(){
    
    var url = window.location.href;
    var res = url.split("#");
    var temp = url.split("/");
    var id= res[1];
    if(id==undefined){
        
    document.getElementById("Aboutintroduction").style.display="block";
    document.getElementById("introductionPage").style.backgroundColor="#022f5a";
    document.getElementById("AboutPrinciple").style.display="none";
    document.getElementById("AboutPyramidDoctors").style.display="none";
    document.getElementById("AboutOutlets").style.display="none";
    document.getElementById("AboutOrganisation").style.display="none";
        
    }else{
        document.getElementById("Aboutintroduction").style.display="none";
        document.getElementById("AboutPrinciple").style.display="none";
        document.getElementById("AboutPyramidDoctors").style.display="none";
        document.getElementById("AboutOutlets").style.display="none";
        document.getElementById("AboutOrganisation").style.display="none";
        document.getElementById("About"+id).style.display="block";
    }
    
}

function displayContent(id){
    document.getElementById("Aboutintroduction").style.display="none";
    document.getElementById("AboutPrinciple").style.display="none";
    document.getElementById("AboutPyramidDoctors").style.display="none";
    document.getElementById("AboutOutlets").style.display="none";
    document.getElementById("AboutOrganisation").style.display="none";
    document.getElementById("About"+id).style.display="block";
    document.getElementById("introductionPage").style.backgroundColor="transparent";
    document.getElementById("PrinciplePage").style.backgroundColor="transparent";
    document.getElementById("PyramidDoctorsPage").style.backgroundColor="transparent";
    document.getElementById("OutletsPage").style.backgroundColor="transparent";
    document.getElementById("OrganisationPage").style.backgroundColor="transparent";
    document.getElementById(id+"Page").style.backgroundColor="#022f5a";
}