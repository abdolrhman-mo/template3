//  MENU BUTTON
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu ul li a");

//  Event Listener and Function
let menuOpen = false;

let closeOpenMenu = (openMenu) => {
  if (openMenu === "open") {
    menuOpen = true;
    menuBtn.classList.add("open");
    menu.classList.add("open");
  } else {
    menuOpen = false;
    menuBtn.classList.remove("open");
    menu.classList.remove("open");
  }
};

menuBtn.addEventListener("click", () => {
  // If menu is closed open menu and vise versa
  if (!menuOpen) {
    closeOpenMenu("open");
  } else {
    closeOpenMenu("close");
  }
});

// If clicked on a menu's link close menu
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeOpenMenu("close");
  });
});

// MENU BTN CHANGE COLOR
window.addEventListener("scroll", menuBtnChangeColor);
function menuBtnChangeColor() {
  if (window.scrollY > 6000) {
    // menuBtn.style.color = "white";
    menuBtn.classList.add("modal-reverse-color");
  } else {
    // menuBtn.style.color = "black";
    menuBtn.classList.remove("modal-reverse-color");
  }
}

// MODAL LINKS HOVER
menuLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.classList.add("modal-links-mouseenter");
    link.classList.remove("modal-links-mouseleave");
  });
  link.addEventListener("mouseleave", () => {
    link.classList.remove("modal-links-mouseenter");
    link.classList.add("modal-links-mouseleave");
    mainModal.style.backgroundImage = "none";
  });
});

// MODAL LINKS EVERYONE
const modalLinkAbout = document.querySelector(".modal-about a");
const modalLinkProjects = document.querySelector(".modal-projects a");
const modalLinkContact = document.querySelector(".modal-contact a");
const modalLinkTwitter = document.querySelector(".modal-twitter a");
const modalLinkGithub = document.querySelector(".modal-github a");
const mainModal = document.querySelector(".menu");

modalLinkAbout.addEventListener("mouseenter", () => {
  mainModal.style.backgroundImage = "url('assets/images/modal-about.jpg')";
});

modalLinkProjects.addEventListener("mouseenter", () => {
  mainModal.style.backgroundImage = "url('assets/images/modal-projects.jpg')";
});

modalLinkContact.addEventListener("mouseenter", () => {
  mainModal.style.backgroundImage = "url('assets/images/modal-contact.jpg')";
});

modalLinkGithub.addEventListener("mouseenter", () => {
  mainModal.style.backgroundImage = "url('assets/images/modal-github.jpg')";
});

// Smooth Links

menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // If the clicked link is section-link not social-link
    if (e.target.dataset.type === "section-link") {
      document.querySelector(e.target.dataset.destination).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
