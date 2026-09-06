
    const navToggle = document.querySelector(".nav-toggle");
    const siteNav = document.querySelector(".site-nav");
    const navLinks = document.querySelectorAll(".site-nav a");
    const sections = document.querySelectorAll("main section[id]");
    const contactForm = document.querySelector("#contactForm");
    const formStatus = document.querySelector("#formStatus");

    document.querySelector("#year").textContent = new Date().getFullYear();

    navToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        siteNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      contactForm.reset();
      formStatus.textContent = "Thanks! Your message is ready to connect with a backend.";
    });
  