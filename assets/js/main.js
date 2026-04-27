document.addEventListener("DOMContentLoaded", function () {


    const date = new Date();
    document.getElementById("year").innerText = date.getFullYear();


    const hamburger= document.querySelector("#hamburger");

    const navlist= document.querySelector("#navbar")
   


    




    hamburger.addEventListener('click'), function () {

        

        if (navlist.style.display === 'none') {
            navlist.style.display = 'flex';
            navlist.style.flexDirection= 'column';
            
        } else {
            navlist.style.display = 'none';
        }
    }


    

    // Contact form
    const form = document.querySelector(".form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission
        alert("Thank you for your message. We will contact you soon..."); // Success message
    });

});

