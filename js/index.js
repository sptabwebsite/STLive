        

$(function(){
        $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                $('b', this).toggleClass("caret caret-up");                
            });
    });



function displayMenu(){
    
    document.write('<div class="container">\
<nav class="navbar-fixed-top container">\
    <div class="container">\
        <div class="navbar-header">\
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#main-menu">\
                <span class="icon-bar"></span>\
                <span class="icon-bar"></span>\
                <span class="icon-bar"></span> \
            </button>\
        </div>\
        <div class="collapse navbar-collapse" id="main-menu">\
            <ul class="nav navbar-nav">\
                <li id="homePage"><a href="index.html">Home</a></li>\
\
                <li id="aboutUspage" class="dropdown">\
                    <a href="aboutUs.html" class="dropdown-toggle" > About Us <b class="caret"></b></a>\
                    <ul class="dropdown-menu">\
                        <li id="introductionPage"><a href="aboutUs.html#introduction" onclick="displayContent(\'introduction\')">Introduction</a></li>\
                        <li id="PrinciplePage"><a href="aboutUs.html#Principle" onclick="displayContent(\'Principle\')">Principle</a></li>\
                        <li id="PyramidDoctorsPage"><a href="aboutUs.html#PyramidDoctors" onclick="displayContent(\'PyramidDoctors\')">Pyramid Doctors</a></li>\
                        <li id="OutletsPage"><a href="aboutUs.html#Outlets" onclick="displayContent(\'Outlets\')">Outlets</a></li>\
                        <li id="OrganisationPage"><a href="aboutUs.html#Organisation" onclick="displayContent(\'Organisation\')">Organisation</a></li>\
                    </ul>\
                </li>\
\
                <li id="testmonialsPage" class="dropdown">\
                    <a href="testimonials" class="dropdown-toggle" data-toggle="dropdown"> Testimonials <b class="caret"></b></a>\
                    <ul class="dropdown-menu">\
                        <li><a href="testmonials.html">Counsellors</a></li>\
                        <li><a href="">Pyramid Doctors</a></li>\
                        <li><a href="">Patients</a></li>\
                    </ul>\
                </li>\
\
                <li id="spiritualTabletesPage" class="dropdown">\
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"> Spiritual Tablets <b class="caret"></b></a>\
                    <ul class="dropdown-menu">\
                        <li id="booksPage"><a href="spiritualTablet.html#books" onclick="displaySpContent(\'books\')">Books</a></li>\
                        <li id="AudiosPage"><a href="spiritualTablet.html#Audios" onclick="displaySpContent(\'Audios\')">Audios</a></li>\
                        <li id="VideosPage"><a href="spiritualTablet.html#Videos" onclick="displaySpContent(\'Videos\')">Videos</a></li>\
                        <li id="ShortFilmsPage"><a href="spiritualTablet.html#Shortfilims" onclick="displaySpContent(\'ShortFilms\')">Short Films</a></li>\
                        <li id="NewsLettersPage"><a href="spiritualTablet.html#NewsLetters" onclick="displaySpContent(\'NewsLetters\')">News Letters</a></li>\
                    </ul>\
                </li>\
\
                <li id="patientResigrationPage" class="dropdown">\
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">Patient Registration <b class="caret"></b></a>\
                    <ul class="dropdown-menu">\
                        <li id="RRPage"><a href="RapidRegistration.html">Rapid Registration</a></li>\
                        <li id="DRPage"><a href="PatientRegistration.html">Detail Registration</a></li>\
                        <li id="RCPage"><a href="RequestForCounseling.html">Request Counseling</a></li>\
                    </ul>\
                </li>\
\
                <li id="eventPage"><a href="events.html">Events</a></li>\
                <li id=""><a href="">Live</a></li>\
                <li id="galleryPage"><a href="gallery.html">Gallery</a></li>\
                <li id=""><a href="">Donate </a></li>\
                <li id="contactPage" class="dropdown">\
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown"> Contact Us <b class="caret"></b></a>\
                    <ul class="dropdown-menu">\
                        <li id="RegisteredOfficePage"><a href="contact.html#RegisteredOffice" onclick="displayContact(\'RegisteredOffice\')">Registred Office</a></li>\
                        <li id="PrimaryCentersPage"><a href="contact.html#PrimaryCenters" onclick="displayContact(\'PrimaryCenters\')">Primary Centers</a></li>\
                        <li id="AdmissionCentersPage"><a href="contact.html#AdmissionCenters" onclick="displayContact(\'AdmissionCenters\')">Admission Centers</a></li>\
                        <li id="HolisticCentersPage"><a href="contact.html#HolisticCenters" onclick="displayContact(\'HolisticCenters\')">Holistic Centers</a></li>\
                        <li id="EnquiryPage"><a href="contact.html#Enquiry" onclick="displayContact(\'Enquiry\')">Enquiry</a></li>\
                        <li id="FeedbackPage"><a href="contact.html#Feedback" onclick="displayContact(\'Feedback\')">Feedback</a></li>\
                    </ul>\
                </li>\
                <li><a href="login.html">Login </a></li>\
            </ul>\
        </div>\
    </div>\
</nav>\
</div>\
     <div class="container homeSlideDiv">\
     <div class="row">\
            <img src="images/sliders/home-banner.jpg">\
    </div>\
    </div>');
    }

function displayFooter(){
    
    document.write('<div class="container footerDiv">\
        <div class="col-sm-4">\
            <h3 class="footerHeading">Contact Us</h3>\
            <h4>Spiritual Tablets Research Foundation</h4>\
            <h5>LIG-6, Opp. Sr.Citizens Home,<br> 48A Last Bus Stop, VUDA Colony,<br> Madhavadhara, Visakhapatnam - 530018,<br> Andhra Pradesh, India.</h5>\
        </div>\
        <div class="col-sm-4">\
            <h3 class="footerHeading">Contact Us</h3>\
            <h4 class="contactNo"><i class="fa fa-mobile" style="font-size: 28px"></i><a href="callto:+919246648411"> +91(0) 92466 48411</a></h4>\
            <h4 class="contactNo"><i class="fa fa-envelope"></i><a href="mailto:spiritualtablet@gmail.com"> spiritualtablet@gmail.com</a></h4>\
        </div>\
\
        <div class="col-sm-4">\
             <h3 class="footerHeading">Follow Us</h3>\
            <h4 class="socialMedia"><a href="https://www.facebook.com/spiritualhealth.care" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a> &nbsp; &nbsp;<a href="https://www.youtube.com/channel/UCId8SiDTSyYh0IqsDxbEMiQ" target="_blank"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></h4>\
        </div>\
    </div>')
}


