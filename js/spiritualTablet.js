
 
window.onload=function(){
    
    var url = window.location.href;
    var res = url.split("#");
    var temp = url.split("/");
    var id= res[1];
    if(id==undefined){
        
    document.getElementById("SPbooks").style.display="block";
    document.getElementById("SPAudios").style.display="none";
    document.getElementById("SPVideos").style.display="none";
    document.getElementById("SPShortFilms").style.display="none";
    document.getElementById("SPNewsLetters").style.display="none";
    }else{
        document.getElementById("SPbooks").style.display="none";
        document.getElementById("SPAudios").style.display="none";
        document.getElementById("SPVideos").style.display="none";
        document.getElementById("SPShortFilms").style.display="none";
        document.getElementById("SPNewsLetters").style.display="none";
        document.getElementById("SP"+id).style.display="block";
         document.getElementById("booksPage").style.backgroundColor="#022f5a";
    }
   validateSelectLanguage() ;
}

function displaySpContent(id){
    document.getElementById("SPbooks").style.display="none";
    document.getElementById("SPAudios").style.display="none";
    document.getElementById("SPVideos").style.display="none";
    document.getElementById("SPShortFilms").style.display="none";
    document.getElementById("SPNewsLetters").style.display="none";
    document.getElementById("SP"+id).style.display="block";
    document.getElementById("booksPage").style.backgroundColor="transparent";
    document.getElementById("AudiosPage").style.backgroundColor="transparent";;
    document.getElementById("VideosPage").style.backgroundColor="transparent";
    document.getElementById("ShortFilmsPage").style.backgroundColor="transparent"; 
    document.getElementById("NewsLettersPage").style.backgroundColor="transparent";  
    document.getElementById(id+"Page").style.backgroundColor="#022f5a";
}


function validateSelectLanguage(){
    
    var languase = document.getElementById("selectLanguage").value;
    
    if (languase == "-" || languase == "English" ){
        document.getElementById("NameofLanguage").innerHTML="English Books";
        document.getElementById("EnglishBooks").style.display="block"
        document.getElementById("teluguBooks").style.display="none"
        document.getElementById("tamilbooks").style.display="none"
    }else if(languase == "Telugu"){
        document.getElementById("NameofLanguage").innerHTML="Telugu Books";
            document.getElementById("teluguBooks").style.display="block"
        document.getElementById("EnglishBooks").style.display="none"
        document.getElementById("tamilbooks").style.display="none"
    }else if (languase == "Tamil"){
        document.getElementById("NameofLanguage").innerHTML="Tamil Books";
            document.getElementById("tamilbooks").style.display="block"
        document.getElementById("EnglishBooks").style.display="none"
        document.getElementById("teluguBooks").style.display="none"
    }else{
        document.getElementById("NameofLanguage").innerHTML="English Books";
        document.getElementById("teluguBooks").style.display="none"
        document.getElementById("tamilbooks").style.display="none"
        document.getElementById("EnglishBooks").style.display="block"
    }
    return true
}