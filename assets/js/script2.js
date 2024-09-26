// Use GSAP to handle animations
window.addEventListener('load', function () {
    // GSAP animations for the loader
    gsap.from(".clip-top, .clip-bottom", 2,{
        delay: 1,
        height: "50vh",
        duration: 2,
        ease: "power4.inOut",
    });

    gsap.to(".marquee", 3.5,{
        delay: 0.75,
        top: "50%",
        duration: 3.5,
        ease: "power4.inOut",
    });

    gsap.to(".clip-top .marquee, .clip-bottom .marquee", 5, {
        delay: 1,
        left: "100%",
        duration: 5,
        ease: "power3.inOut",
    });

    gsap.to(".clip-center .marquee", 5,{
        delay: 1,
        left: "-50%",
        duration: 5,
        ease: "power3.inOut",
    });

    gsap.to(".clip-top", 2,{
        delay: 6,
        clipPath: "inset(0 0 100% 0)",
        duration: 2,
        ease: "power4.inOut",
    });

    gsap.to(".clip-bottom", 2,{
        delay: 6,
        clipPath: "inset(100% 0 0 0)",
        duration: 2,
        ease: "power4.inOut",
    });

    gsap.to(".clip-top .marquee, .clip-bottom .marquee, .clip-center .marquee span", {
        delay: 6,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
    });

   

    // Ensure that the class switch happens after the animations
    gsap.to(".loader", {
        delay: 6, // Adjust to ensure it’s after all animations
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: function() {
            document.body.classList.remove("loading");
            document.body.classList.add("loaded");
            
            // Redirect to home.html after transition
            setTimeout(function() {
                window.location.href = "home.html";
            }, 700); // Adjust delay as needed
        }
    });


});