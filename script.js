console.log("Script Loaded");
/* =====================================
   DOM ELEMENTS
===================================== */

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

const activePill = document.querySelector(".active-pill");

const progressBar = document.getElementById("progress-bar");

const cursorGlow = document.querySelector(".cursor-glow");

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-links");


/* =====================================
   ACTIVE NAVBAR PILL
===================================== */

function movePill(element) {

    if (!activePill || window.innerWidth <= 768) return;

    const rect = element.getBoundingClientRect();
    const parentRect =
        document.querySelector(".nav-links")
        .getBoundingClientRect();

    activePill.style.width =
        `${rect.width}px`;

    activePill.style.height =
        `${rect.height}px`;

    activePill.style.left =
        `${rect.left - parentRect.left}px`;

    activePill.style.top =
        `${rect.top - parentRect.top}px`;
}

/* Initial Position */

window.addEventListener("load", () => {

    const activeLink =
        document.querySelector(".nav-link.active");

    if (activeLink) {
        movePill(activeLink);
    }
});

/* Click Position */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item =>
            item.classList.remove("active"));

        link.classList.add("active");

        movePill(link);

        navMenu.classList.remove("active");
    });
});


/* =====================================
   ACTIVE SECTION DETECTION
===================================== */

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 300) {

            currentSection = section.id;
        }
    });

    console.log(currentSection);
    
    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            console.log(currentSection);

            link.classList.add("active");

            movePill(link);
        }
    });
});


/* =====================================
   SCROLL PROGRESS BAR
===================================== */

window.addEventListener("scroll", () => {

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
        `${progress}%`;
});


/* =====================================
   CURSOR SPOTLIGHT EFFECT
===================================== */

document.addEventListener("mousemove", (e) => {

    cursorGlow.style.left =
        `${e.clientX}px`;

    cursorGlow.style.top =
        `${e.clientY}px`;
});


/* =====================================
   MOBILE MENU
===================================== */

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");
});


/* =====================================
   CLOSE MENU WHEN CLICK OUTSIDE
===================================== */

document.addEventListener("click", (e) => {

    const clickedInsideMenu =
        navMenu.contains(e.target);

    const clickedMenuBtn =
        menuBtn.contains(e.target);

    if (
        !clickedInsideMenu &&
        !clickedMenuBtn
    ) {

        navMenu.classList.remove("active");
    }
});


/* =====================================
   SCROLL REVEAL ANIMATION
===================================== */

const revealElements =
    document.querySelectorAll(
        ".about-card, .edu-item, .skill-category, .certificate-box, .contact-card"
    );

revealElements.forEach(el => {
    el.classList.add("reveal");
});

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (
            elementTop <
            windowHeight - revealPoint
        ) {

            element.classList.add("active");
        }
    });
}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =====================================
   BUTTON FLOAT EFFECT
===================================== */

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-5px)";
    });

    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0px)";
    });
});


/* =====================================
   SKILL HOVER ENHANCEMENT
===================================== */

const skills =
    document.querySelectorAll(".skill");

skills.forEach(skill => {

    skill.addEventListener("mouseenter", () => {

        skill.style.boxShadow =
            "0 0 18px rgba(47,140,255,.35)";
    });

    skill.addEventListener("mouseleave", () => {

        skill.style.boxShadow =
            "none";
    });
});


/* =====================================
   CONTACT CARD EFFECT
===================================== */

const contactCards =
    document.querySelectorAll(".contact-card");

contactCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-10px)";
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0px)";
    });
});
/* =====================================
   CERTIFICATE MODAL VIEWER
===================================== */

const certificateRows =
    document.querySelectorAll(
        ".certificate-row[data-image]"
    );

const certificateModal =
    document.querySelector(
        ".certificate-modal"
    );

const certificatePreview =
    document.getElementById(
        "certificate-preview"
    );

const closeModal =
    document.querySelector(
        ".close-modal"
    );

/* Open Modal */

certificateRows.forEach(row => {

    row.addEventListener("click", () => {

        const imagePath =
            row.getAttribute("data-image");

        certificatePreview.src =
            imagePath;

        certificateModal.classList.add(
            "active"
        );

        document.body.style.overflow =
            "hidden";
    });

});

/* Close Modal Button */

closeModal.addEventListener("click", () => {

    certificateModal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "auto";
});

/* Close on Outside Click */

certificateModal.addEventListener(
    "click",
    (e) => {

        if (
            e.target === certificateModal
        ) {

            certificateModal.classList.remove(
                "active"
            );

            document.body.style.overflow =
                "auto";
        }
    }
);

/* Close on ESC */

document.addEventListener(
    "keydown",
    (e) => {

        if (
            e.key === "Escape"
        ) {

            certificateModal.classList.remove(
                "active"
            );

            document.body.style.overflow =
                "auto";
        }
    }
);


/* =====================================
   DEVTOWN SPECIALIZATION EFFECT
===================================== */

const specialization =
    document.querySelector(
        ".specialization"
    );

if (specialization) {

    specialization.addEventListener(
        "mouseenter",
        () => {

            specialization.style.background =
                "rgba(47,140,255,.15)";
        }
    );

    specialization.addEventListener(
        "mouseleave",
        () => {

            specialization.style.background =
                "transparent";
        }
    );
}


/* =====================================
   PARALLAX HOME IMAGE
===================================== */

const profileImage =
    document.querySelector(
        ".home-image img"
    );

window.addEventListener(
    "scroll",
    () => {

        const scrollY =
            window.scrollY;

        if (profileImage) {

            profileImage.style.transform =
                `translateY(${scrollY * 0.05}px)`;
        }
    }
);


/* =====================================
   NAVBAR BACKGROUND ENHANCEMENT
===================================== */

const navbar =
    document.querySelector(
        ".navbar"
    );
    const navbarAvatar =
    document.querySelector(".navbar-avatar");
   
    window.addEventListener("scroll", () => {

    if(window.scrollY > 350){

        navbar.style.background =
            "rgba(5,10,20,0.85)";

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.3)";

        navbarAvatar.classList.add("show");
    }

    else{

        navbar.style.background =
            "rgba(8,16,30,.65)";

        navbar.style.boxShadow =
            "none";

        navbarAvatar.classList.remove("show");
    }
});

/*window.addEventListener(
    "scroll",
    () => {

        if (
            window.scrollY > 80
        ) {

            navbar.style.background =
                "rgba(5,10,20,0.85)";

            navbar.style.boxShadow =
                "0 5px 20px rgba(0,0,0,.3)";
        }

        else {

            navbar.style.background =
                "rgba(8,16,30,.65)";

            navbar.style.boxShadow =
                "none";
        }
    }
);


/* =====================================
   SECTION TITLE ANIMATION
===================================== */

const sectionTitles =
    document.querySelectorAll(
        ".section-title"
    );

const titleObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";
                    }
                }
            );
        },
        {
            threshold: 0.2
        }
    );

sectionTitles.forEach(title => {

    title.style.opacity = "0";

    title.style.transform =
        "translateY(40px)";

    title.style.transition =
        ".8s ease";

    titleObserver.observe(title);
});


/* =====================================
   SKILL CARD STAGGER ANIMATION
===================================== */

const skillCategories =
    document.querySelectorAll(
        ".skill-category"
    );

skillCategories.forEach(
    (card, index) => {

        card.style.transitionDelay =
            `${index * 0.1}s`;
    }
);


/* =====================================
   CONTACT CARD STAGGER ANIMATION
===================================== */

contactCards.forEach(
    (card, index) => {

        card.style.transitionDelay =
            `${index * 0.08}s`;
    }
);


/* =====================================
   PERFORMANCE OPTIMIZATION
===================================== */

/* Lazy load certificate images */

const lazyImages =
    document.querySelectorAll(
        "img"
    );

const imageObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        const img =
                            entry.target;

                        img.classList.add(
                            "loaded"
                        );

                        imageObserver.unobserve(
                            img
                        );
                    }
                }
            );
        }
    );

lazyImages.forEach(
    img => imageObserver.observe(img)
);

/* =====================================
   OPEN CERTIFICATE FUNCTION
===================================== */

function openCertificate(imagePath){

    certificatePreview.src = imagePath;

    certificateModal.classList.add("active");

    document.body.style.overflow = "hidden";
}

/*window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }
    });
});

/* =====================================
   CONSOLE SIGNATURE
===================================== */

console.log(
`
=========================================
 Portfolio Developed For
 Paturi Avinash
=========================================

Features Included:

✓ Animated Navigation Pill
✓ Smooth Scrolling
✓ Education Hover Cards
✓ Scrollable Skills
✓ Certification Viewer
✓ DevTown Specialization
✓ Resume Download
✓ LinkedIn Integration
✓ GitHub Placeholder
✓ Glassmorphism UI
✓ Mobile Responsive
✓ Scroll Animations

=========================================
`
);
