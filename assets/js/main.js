document.addEventListener("DOMContentLoaded", function () {


    const date = new Date();
    document.getElementById("year").innerText = date.getFullYear();


    const hamburger= document.querySelector("#hamburger");

    const navlist= document.querySelector("#navbar")
   


    function toggleMenu() {
    navlist.style.display = (navlist.style.display === "none") ? "block" : "none";
}

    hamburger.addEventListener("click", toggleMenu);




    // Contact form
    const form = document.querySelector(".form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission
        alert("Thank you for your message. We will contact you soon..."); // Success message
    });

});

