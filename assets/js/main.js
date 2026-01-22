const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
  });
}

/* Close menu when link is clicked */
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
});


/* ================= HEADER SCROLL ================= */
function scrollHeader() {
  const header = document.querySelector('.header');
  const logo = document.getElementById('logo-img');

  if (!header || !logo) return;

  if (window.scrollY >= 50) {
    header.classList.add('scroll-header');
    logo.src = 'assets/img/marci-metzger-homes-logo.png';
  } else {
    header.classList.remove('scroll-header');
    logo.src = 'assets/img/marci-metzger-transparent-header-logo.png';
  }
}
window.addEventListener('scroll', scrollHeader);

/* ================= LIGHTBOX ================= */
const lightbox = document.getElementById("lightbox");

if (lightbox) {
  const lightboxImg = lightbox.querySelector("img");

  document.querySelectorAll(".gallery img").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.classList.add("show");
      lightboxImg.src = img.src;
    });
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImg) {
      lightbox.classList.remove("show");
      lightboxImg.src = "";
    }
  });
}


/* ================= SCROLL UP ================= */
function scrollUP() {
  const scrollUp = document.getElementById('scroll-up');
  if (!scrollUp) return;

  if (window.scrollY >= 350) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollUP);

const scrollUpButton = document.getElementById('scroll-up');
if (scrollUpButton) {
  scrollUpButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
