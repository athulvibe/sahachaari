// Booking Form

const bookingForm = document.querySelector(".booking-form");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("✅ Booking Request Submitted Successfully!\n\nOur team will contact you shortly.");

        bookingForm.reset();
    });
}


// Contact Form

const contactForm = document.querySelector(".contact form");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("📩 Thank you for contacting Sahachari!\n\nWe will reply soon.");

        contactForm.reset();
    });
}


// Newsletter

const newsletter = document.querySelector(".newsletter-form");

if (newsletter) {
    newsletter.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("🎉 Successfully Subscribed!");

        newsletter.reset();

    });
}


// Rent Now Buttons

const rentButtons = document.querySelectorAll(".card button");

rentButtons.forEach(function(btn){

    btn.addEventListener("click", function(){

        document.querySelector(".booking").scrollIntoView({

            behavior:"smooth"

        });

    });

});


// Hero Button

const heroBtn=document.querySelector(".hero-btn");

if(heroBtn){

heroBtn.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(".vehicles").scrollIntoView({

behavior:"smooth"

});

});

}


// Book Now Navbar Button

const navBtn=document.querySelector(".btn");

if(navBtn){

navBtn.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(".booking").scrollIntoView({

behavior:"smooth"

});

});

}


// Back To Top Button

const topBtn=document.querySelector(".top-btn");

if(topBtn){

window.addEventListener("scroll",function(){

if(window.scrollY>300){

topBtn.style.display="flex";

}else{

topBtn.style.display="none";

}

});

}