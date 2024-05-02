document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section");

    navLinks.forEach((link, index) => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            this.classList.add("active");

            sections[index].scrollIntoView({
                behavior: "smooth" });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let menu = document.querySelector(".fixed-menu");

    menu.addEventListener('click', function(event) {
        let clickTarget = event.target;
        let activeBtn = document.querySelector('.active');
        if (clickTarget.classList.contains('nav-link')) {
            clickTarget.classList.add('active');
            activeBtn.classList.remove('active');
        }
    });

    window.onscroll = function() {
        let h = document.documentElement.clientHeight;
        let classLink = '.main-link';
        if (window.scrollY >= h * 4) {
            classLink = '.comments-link';
        } else if (window.scrollY >= h * 3) {
            classLink = '.works-link';
        } else if (window.scrollY >= h * 2) {
            classLink = '.skills-link';
        } else if (window.scrollY >= h) {
            classLink = '.about-link';
        }
        let activeBtn = document.querySelector('.active');
        let newActiveBtn = document.querySelector(classLink);
        if (newActiveBtn && !newActiveBtn.classList.contains('active')) {
            newActiveBtn.classList.add('active');
            activeBtn.classList.remove('active');
        }
    };
});

