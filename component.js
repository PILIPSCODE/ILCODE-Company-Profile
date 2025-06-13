const tlLoader = gsap.timeline();
const tlNavbar = gsap.timeline({ paused: true, reversed: true });

addLoader();
addNavBar();
addFooter();

async function Loader() {
  try {
    const component = await fetch("/component/loader.html");
    const data = await component.text();
    return data;
  } catch (error) {
    console.log(error);
  }
}
async function Navbar() {
  try {
    const component = await fetch("/component/navbar.html");
    const data = await component.text();
    return data;
  } catch (error) {
    console.log(error);
  }
}
async function Footer() {
  try {
    const component = await fetch("/component/footer.html");
    const data = await component.text();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function addNavBar() {
  const data = await Navbar();
  const nav = document.querySelectorAll(".nav");
  nav.forEach((e) => {
    e.innerHTML = data;
  });

  tlNavbar
    .to(".container-nav-left", {
      left: "0%",
      duration: 1,
      ease: "power2.out",
    })
    .to(
      ".container-nav-right",
      {
        right: "0%",
        duration: 1,
        ease: "power2.out",
      },
      "-=1"
    )
    .to(
      ".nav-item",
      {
        y: "-300%",
        duration: 0.8,
        stagger: 0.07,
      },
      "-=1"
    )
    .to(
      ".line-nav",
      {
        scaleX: 1,
        duration: 0.8,
        transformOrigin: "left",
        stagger: 0.07,
      },
      "-=1"
    )
    .to(
      ".fade-up",
      {
        scaleY: 1,
        duration: 0.8,
        stagger: 0.07,
        transformOrigin: "bottom",
      },
      "-=1"
    );

  tlNavbar.eventCallback("onComplete", () => {
    tlNavbar.pause();
  });

  const hamburger = document.querySelector(".menu-btn");
  const navpin = document.querySelector("#nav");
  hamburger.addEventListener("click", () => {
    if (hamburger.classList.contains("active")) {
      tlNavbar.play(0);
      navpin.style.pointerEvents = "auto";
    } else {
      tlNavbar.time(tlNavbar.duration()).reverse();
      navpin.style.pointerEvents = "none";
      console.log(tlNavbar.time(), tlNavbar.progress(), tlNavbar.isActive());
    }
  });

  document.querySelectorAll(".reverse-nav").forEach((nav, index) => {
    nav.addEventListener("click", (event) => {
      event.preventDefault();
      let targetURL = nav.getAttribute("href");
      if (targetURL !== null) {
        if (tlLoader.reversed()) {
          tlLoader.play();
        } else {
          tlLoader.reverse().eventCallback("onReverseComplete", () => {
            window.location.href = targetURL;
          });
        }
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelectorAll(".wrapper-animation");
  wrapper.forEach((e) => {
    setTimeout(() => {
      e.style.display = "block";
    }, 2000);
  });
});

async function addLoader() {
  const data = await Loader();
  const loader = document.querySelectorAll(".loader-website");
  loader.forEach((e) => {
    e.innerHTML = data;
  });

  tlLoader
    .to(".line-left", {
      scaleY: 0,
      transformOrigin: "top",
      duration: 2,
      delay: 0.2,
      ease: "power2.out",
    })
    .to(
      ".line-right",
      {
        scaleY: 0,
        transformOrigin: "bottom",
        duration: 1.8,
        ease: "power2.out",
      },
      "-=2"
    )
    .to(
      ".inner-logo",
      {
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
      },
      "-=1.5"
    )
    .to(
      ".center-line",
      {
        scaleY: 0,
        duration: 1.5,
        ease: "power2.out",
      },
      "-=1.5"
    )
    .to(
      ".hidden-logo",
      {
        opacity: 0,
        duration: 0,
        ease: "power2.out",
      },
      "-=0.5"
    )
    .to(
      ".open-load",
      {
        opacity: 1,
        duration: 0,
        ease: "power2.out",
      },
      "-=0.8"
    )
    .to(
      ".left-fence",
      {
        left: "-50%",
        duration: 2,
        ease: "power2.out",
      },
      "-=0.2"
    )
    .to(
      ".right-fence",
      {
        right: "-50%",
        duration: 2,
        ease: "power2.out",
      },
      "-=2"
    );
}

async function addFooter() {
  const data = await Footer();
  const footer = document.querySelectorAll("#footer");
  footer.forEach((e) => {
    e.innerHTML = data;
  });
}
