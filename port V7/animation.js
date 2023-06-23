const menuBtn = document.querySelector('.menu-btn');
const menuPage = document.querySelector('.cont-page');

let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuPage.classList.add('open');
        menuOpen = true;
    }else{
        menuBtn.classList.remove('open');
        menuPage.classList.remove('open');
        menuOpen = false;
    }
});

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".hBox", {
    y: 0,
    opacity: 0
    }, {
    y: 30,
    opacity: 1,
    duration: 4.65,
    ease: "rough.inOut"
});

gsap.fromTo(".eBox", {
    y: 50,
    opacity: .2
  }, {
    y: 0,
    opacity: 1,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: "#eBox",
        start: "bottom center",
        end: "bottom center 50px",
        scrub: .6,
    }
  });

  gsap.fromTo(".cBox", {
    y: 50,
    opacity: .2
  }, {
    y: 0,
    opacity: 1,
    ease: "power2.inOut",
    scrollTrigger: {
        trigger: "#cBox",
        start: "-150%",
        end: "-100%",
        scrub: .8,
    }
  });