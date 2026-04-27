document.addEventListener("DOMContentLoaded", function () {


    const date = new Date();
    document.getElementById("year").innerText = date.getFullYear();


    const hamburger= document.getElementById("hamburger");
   

    hamburger.addEventListener("click"), function (navlist) {

        const navlist= document.getElementsByClassName("nav")

        if (caja.style.display === "none") {
            navlist.style.display = "flex";
            navlist.style.flexDirection= "column";
            
        } else {
            navlist.style.display = "none";
        }
    }






    document.addEventListener("DOMContentLoaded", function () {

        // Contact form
        const form = document.querySelector(".form");

        form.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent default form submission
            alert("Gracias por tu mensaje. Pronto te contactaré."); // Success message
        });

    });

}
);