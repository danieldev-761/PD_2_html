document.addEventListener("DOMContentLoaded", function () {


    const date = new Date();
    document.getElementById("year").innerText = date.getFullYear();


    const hamburger= document.getElementById("hamburger");

    const navlist= document.getElementsByClassName("nav")
   

    hamburger.addEventListener('click'), function () {

        

        if (navlist.style.display === "none") {
            navlist.style.display = "flex";
            navlist.style.flexDirection= "column";
            
        } else {
            navlist.style.display = "none";
        }
    }


    // Contact form
    const form = document.querySelector(".form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission
        alert("Gracias por tu mensaje. Pronto te contactaré."); // Success message
    });

});

