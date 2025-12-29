const words = ["Full Stack Developer", "UI/UX Designer", "Tech Enthusiast"];
let i = 0, j = 0, isDeleting = false;
const typing = document.getElementById("typing");

function typeEffect() {
  let current = words[i];
  typing.textContent = current.substring(0, j);
  if (!isDeleting && j < current.length) j++;
  else if (isDeleting && j > 0) j--;
  if (j === current.length) isDeleting = true;
  if (j === 0 && isDeleting) {
    isDeleting = false;
    i = (i + 1) % words.length;
  }
  setTimeout(typeEffect, isDeleting ? 80 : 120);
}
typeEffect();

gsap.registerPlugin(ScrollTrigger);

gsap.from(".service-card", {
  scrollTrigger: "#services",
  y: 60,
  opacity: 0,
  duration: 1,
  stagger: 0.2
});

gsap.from(".skill-bar", {
  scrollTrigger: "#skills",
  width: 0,
  duration: 1.5,
  ease: "power3.out",
  stagger: 0.1
});


gsap.from("#contact", {
  scrollTrigger: "#contact",
  y: 80,
  opacity: 0,
  duration: 1.2
});
// ================= NAVBAR ACTIVE SECTION =================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("text-primary", "font-semibold");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-primary", "font-semibold");
    }
  });
});

// ================= SCROLL TO TOP BUTTON =================
const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.classList.remove("hidden");
  } else {
    scrollBtn.classList.add("hidden");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



// ================= PROJECT HOVER ANIMATION =================
gsap.utils.toArray(".project-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card.querySelector(".project-overlay"), {
      opacity: 1,
      duration: 0.3
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card.querySelector(".project-overlay"), {
      opacity: 0,
      duration: 0.3
    });
  });
});


// ================= HERO ENTRANCE ANIMATION =================
window.addEventListener("load", () => {
  const heroTl = gsap.timeline();

  heroTl
    .from(".hero-sub", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    })
    .from(".hero-title", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.3")
    .from(".hero-typing", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.4")
    .from(".hero-buttons", {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out"
    }, "-=0.3");
});
