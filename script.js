console.log("Script Loaded");


document.body.classList.add("page-loading");

window.addEventListener(
    "load",
    () => {

        requestAnimationFrame(() => {

            document.body.classList.remove(
                "page-loading"
            );

            document.body.classList.add(
                "page-loaded"
            );

            setTimeout(() => {

                document.body.style.overflow = "";

            }, 1400);

        });

    }
);


/* =====================================================
   DOM ELEMENTS
===================================================== */

const navLinks =
    document.querySelectorAll(".nav-link");

const sections =
    document.querySelectorAll("section");

const activePill =
    document.querySelector(".active-pill");

const progressBar =
    document.getElementById("progress-bar");

const cursorGlow =
    document.querySelector(".cursor-glow");

const menuBtn =
    document.querySelector(".menu-btn");

const navMenu =
    document.querySelector(".nav-links");

const navbar =
    document.querySelector(".navbar");

const navbarAvatar =
    document.querySelector(".navbar-avatar");

const profileImage =
    document.querySelector(".home-image img");

const certificateRows =
    document.querySelectorAll(
        ".certificate-row[data-image]"
    );

const certificateModal =
    document.querySelector(".certificate-modal");

const certificatePreview =
    document.getElementById("certificate-preview");

const closeModal =
    document.querySelector(".close-modal");

const contactCards =
    document.querySelectorAll(".contact-card");


/* =====================================================
   ACTIVE NAVBAR PILL
===================================================== */

function movePill(element) {

    if (
        !activePill ||
        !element ||
        window.innerWidth <= 768
    ) {
        return;
    }

    const navContainer =
        document.querySelector(".nav-links");

    if (!navContainer) {
        return;
    }

    const rect =
        element.getBoundingClientRect();

    const parentRect =
        navContainer.getBoundingClientRect();

    activePill.style.width =
        `${rect.width}px`;

    activePill.style.height =
        `${rect.height}px`;

    activePill.style.left =
        `${rect.left - parentRect.left}px`;

    activePill.style.top =
        `${rect.top - parentRect.top}px`;
}


/* Initial position */

window.addEventListener(
    "load",
    () => {

        const activeLink =
            document.querySelector(
                ".nav-link.active"
            );

        if (activeLink) {

            movePill(activeLink);
        }
    }
);


/* Recalculate when window size changes */

window.addEventListener(
    "resize",
    () => {

        const activeLink =
            document.querySelector(
                ".nav-link.active"
            );

        if (activeLink) {

            movePill(activeLink);
        }
    }
);


/* =====================================================
   NAVIGATION CLICK
===================================================== */

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navLinks.forEach(item => {

                item.classList.remove("active");

            });

            link.classList.add("active");

            movePill(link);

            if (navMenu) {

                navMenu.classList.remove(
                    "active"
                );
            }
        }
    );

});


/* =====================================================
   ACTIVE SECTION DETECTION
===================================================== */

function updateActiveSection() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >=
            sectionTop - 300
        ) {

            currentSection =
                section.id;
        }
    });


    navLinks.forEach(link => {

        link.classList.remove(
            "active"
        );

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add(
                "active"
            );

            movePill(link);
        }
    });

}


/* =====================================================
   SCROLL PROGRESS
===================================================== */

function updateScrollProgress() {

    if (!progressBar) {
        return;
    }

    const scrollTop =
        document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    if (scrollHeight <= 0) {

        progressBar.style.width = "0%";

        return;
    }

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width =
        `${progress}%`;
}


/* =====================================================
   CURSOR GLOW
===================================================== */

document.addEventListener(
    "mousemove",
    event => {

        if (!cursorGlow) {
            return;
        }

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;
    }
);


/* =====================================================
   MOBILE MENU
===================================================== */

if (menuBtn && navMenu) {

    menuBtn.addEventListener(
        "click",
        event => {

            event.stopPropagation();

            navMenu.classList.toggle(
                "active"
            );
        }
    );
}


/* Close menu when clicking outside */

document.addEventListener(
    "click",
    event => {

        if (!navMenu || !menuBtn) {
            return;
        }

        const clickedInsideMenu =
            navMenu.contains(
                event.target
            );

        const clickedMenuButton =
            menuBtn.contains(
                event.target
            );

        if (
            !clickedInsideMenu &&
            !clickedMenuButton
        ) {

            navMenu.classList.remove(
                "active"
            );
        }
    }
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".about-card, .education-item, .skill-category, .certificate-box, .contact-card"
    );


revealElements.forEach(element => {

    element.classList.add(
        "reveal"
    );

});

/* =====================================================
   STAGE 7.2 — SCROLL ANIMATION POLISH
===================================================== */

revealElements.forEach((element) => {
    element.style.willChange = "transform, opacity";
});


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;

    revealElements.forEach(
        element => {

            const elementTop =
                element.getBoundingClientRect()
                    .top;

            const revealPoint = 120;

            if (
                elementTop <
                windowHeight - revealPoint
            ) {

                element.classList.add(
                    "active"
                );
            }
        }
    );
}


/* =====================================================
   BUTTON FLOAT EFFECT
===================================================== */

const buttons =
    document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener(
        "mouseenter",
        () => {

            button.style.transform =
                "translateY(-5px)";
        }
    );

    button.addEventListener(
        "mouseleave",
        () => {

            button.style.transform =
                "translateY(0)";
        }
    );

});


/* =====================================================
   SKILL HOVER
===================================================== */

const skills =
    document.querySelectorAll(".skill");

skills.forEach(skill => {

    skill.addEventListener(
        "mouseenter",
        () => {

            skill.style.boxShadow =
                "0 0 18px rgba(47,140,255,.35)";
        }
    );

    skill.addEventListener(
        "mouseleave",
        () => {

            skill.style.boxShadow =
                "none";
        }
    );

});


/* =====================================================
   CONTACT CARD EFFECT
===================================================== */

contactCards.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "translateY(-10px)";
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "translateY(0)";
        }
    );

});


/* =====================================================
   CERTIFICATE MODAL
===================================================== */

function openCertificate(imagePath) {

    if (
        !certificatePreview ||
        !certificateModal
    ) {
        return;
    }

    certificatePreview.src =
        imagePath;

    certificateModal.classList.add(
        "active"
    );

    document.body.style.overflow =
        "hidden";
}


/* Make function available to inline HTML */

window.openCertificate =
    openCertificate;


/* Certificate rows */

certificateRows.forEach(row => {

    row.addEventListener(
        "click",
        () => {

            const imagePath =
                row.getAttribute(
                    "data-image"
                );

            openCertificate(
                imagePath
            );
        }
    );

});


/* Close modal */

function closeCertificateModal() {

    if (!certificateModal) {
        return;
    }

    certificateModal.classList.remove(
        "active"
    );

    document.body.style.overflow =
        "";
}


if (closeModal) {

    closeModal.addEventListener(
        "click",
        closeCertificateModal
    );
}


/* Close outside */

if (certificateModal) {

    certificateModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                certificateModal
            ) {

                closeCertificateModal();
            }
        }
    );
}


/* Close ESC */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeCertificateModal();
        }
    }
);


/* =====================================================
   SPECIALIZATION TOGGLE
===================================================== */

const specializations =
    document.querySelectorAll(
        ".specialization"
    );


specializations.forEach(
    specialization => {

        const main =
            specialization.querySelector(
                ".specialization-main"
            );

        if (!main) {
            return;
        }

        main.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                specialization.classList.toggle(
                    "open"
                );
            }
        );
    }
);


/* =====================================================
   HOME IMAGE PARALLAX
===================================================== */

window.addEventListener(
    "scroll",
    () => {

        if (!profileImage) {
            return;
        }

        const scrollY =
            window.scrollY;

        profileImage.style.transform =
            `translateY(${scrollY * 0.05}px)`;
    }
);


/* =====================================================
   NAVBAR BACKGROUND
===================================================== */

function updateNavbar() {

    if (
        !navbar ||
        !navbarAvatar
    ) {
        return;
    }

    if (window.scrollY > 350) {

        navbar.style.background =
            "rgba(5,10,20,0.85)";

        navbar.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.3)";

        navbarAvatar.classList.add(
            "show"
        );

    } else {

        navbar.style.background =
            "rgba(8,16,30,.65)";

        navbar.style.boxShadow =
            "none";

        navbarAvatar.classList.remove(
            "show"
        );
    }
}


/* =====================================================
   SECTION TITLE ANIMATION
===================================================== */

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

    title.style.opacity =
        "0";

    title.style.transform =
        "translateY(40px)";

    title.style.transition =
        "0.8s ease";

    titleObserver.observe(
        title
    );

});


/* =====================================================
   STAGGER ANIMATIONS
===================================================== */

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


contactCards.forEach(
    (card, index) => {

        card.style.transitionDelay =
            `${index * 0.08}s`;
    }
);


/* =====================================================
   CARD CURSOR SPOTLIGHT
===================================================== */

const spotlightCards =
    document.querySelectorAll(
        ".about-card, .skill-category, .education-card, .certificate-box, .certificate-row, .contact-card"
    );


spotlightCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;

            card.style.setProperty(
                "--mouse-x",
                `${x}px`
            );

            card.style.setProperty(
                "--mouse-y",
                `${y}px`
            );
        }
    );

});


/* =====================================================
   IMAGE LOADING
===================================================== */

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

                        const image =
                            entry.target;

                        image.classList.add(
                            "loaded"
                        );

                        imageObserver.unobserve(
                            image
                        );
                    }
                }
            );

        }
    );


lazyImages.forEach(
    image =>
        imageObserver.observe(
            image
        )
);


/* =====================================================
   MAIN SCROLL HANDLER
===================================================== */

window.addEventListener(
    "scroll",
    () => {

        updateActiveSection();

        updateScrollProgress();

        revealOnScroll();

        updateNavbar();
    }
);


/* Initial state */

revealOnScroll();

updateActiveSection();

updateScrollProgress();

updateNavbar();

/* =====================================================
   INTERACTIVE PARTICLE NETWORK
===================================================== */

const particleCanvas =
    document.getElementById("particle-network");

if (particleCanvas) {

    const particleCtx =
        particleCanvas.getContext("2d");

    let particles = [];

    let mouse = {
        x: null,
        y: null,
        radius: 150
    };


    /* =================================================
       PARTICLE SETTINGS
    ================================================= */

    const particleSettings = {

        desktop: {
            count: 75,
            speed: 0.35,
            connectionDistance: 165,
            particleSize: 1.6
        },

        mobile: {
            count: 35,
            speed: 0.25,
            connectionDistance: 135,
            particleSize: 1.3
        }

    };


    /* =================================================
       CURRENT SETTINGS
    ================================================= */

    function getSettings() {

        if (window.innerWidth <= 768) {

            return particleSettings.mobile;

        }

        return particleSettings.desktop;
    }


    /* =================================================
       CANVAS SIZE
    ================================================= */

    function resizeParticleCanvas() {

        const pixelRatio =
            Math.min(
                window.devicePixelRatio || 1,
                2
            );

        particleCanvas.width =
            window.innerWidth * pixelRatio;

        particleCanvas.height =
            window.innerHeight * pixelRatio;

        particleCanvas.style.width =
            `${window.innerWidth}px`;

        particleCanvas.style.height =
            `${window.innerHeight}px`;

        particleCtx.setTransform(
            pixelRatio,
            0,
            0,
            pixelRatio,
            0,
            0
        );
    }


    /* =================================================
       PARTICLE CLASS
    ================================================= */

    class Particle {

        constructor() {

            this.x =
                Math.random() *
                window.innerWidth;

            this.y =
                Math.random() *
                window.innerHeight;

            const settings =
                getSettings();

            this.size =
                settings.particleSize *
                (0.7 + Math.random() * 0.6);

            this.speedX =
                (Math.random() - 0.5) *
                settings.speed;

            this.speedY =
                (Math.random() - 0.5) *
                settings.speed;

            this.opacity =
                0.25 +
                Math.random() * 0.45;
        }


        /* =============================================
           UPDATE
        ============================================= */

        update() {

            this.x += this.speedX;

            this.y += this.speedY;


            /* -----------------------------------------
               Screen wrapping
            ----------------------------------------- */

            if (this.x < -10) {

                this.x =
                    window.innerWidth + 10;
            }

            if (
                this.x >
                window.innerWidth + 10
            ) {

                this.x = -10;
            }


            if (this.y < -10) {

                this.y =
                    window.innerHeight + 10;
            }

            if (
                this.y >
                window.innerHeight + 10
            ) {

                this.y = -10;
            }


            /* -----------------------------------------
               Mouse interaction
            ----------------------------------------- */

            if (
                mouse.x !== null &&
                mouse.y !== null
            ) {

                const dx =
                    this.x - mouse.x;

                const dy =
                    this.y - mouse.y;

                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    );

                if (
                    distance <
                    mouse.radius
                ) {

                    const force =
                        (mouse.radius -
                        distance) /
                        mouse.radius;

                    const angle =
                        Math.atan2(
                            dy,
                            dx
                        );

                    /*
                     * Very gentle repulsion.
                     * This keeps the network alive
                     * without making particles jump.
                     */

                    this.x +=
                        Math.cos(angle) *
                        force *
                        0.8;

                    this.y +=
                        Math.sin(angle) *
                        force *
                        0.8;
                }
            }
        }


        /* =============================================
           DRAW
        ============================================= */

        draw() {

            particleCtx.beginPath();

            particleCtx.arc(
                this.x,
                this.y,
                this.size,
                0,
                Math.PI * 2
            );

            particleCtx.fillStyle =
                `rgba(80, 180, 255, ${this.opacity})`;

            particleCtx.shadowBlur = 8;

            particleCtx.shadowColor =
                "rgba(0, 170, 255, 0.45)";

            particleCtx.fill();

            particleCtx.shadowBlur = 0;
        }

    }


    /* =================================================
       CREATE PARTICLES
    ================================================= */

    function createParticles() {

        particles = [];

        const settings =
            getSettings();

        for (
            let i = 0;
            i < settings.count;
            i++
        ) {

            particles.push(
                new Particle()
            );
        }
    }


    /* =================================================
       CONNECT PARTICLES
    ================================================= */

    function connectParticles() {

        const settings =
            getSettings();

        for (
            let i = 0;
            i < particles.length;
            i++
        ) {

            for (
                let j = i + 1;
                j < particles.length;
                j++
            ) {

                const particleA =
                    particles[i];

                const particleB =
                    particles[j];

                const dx =
                    particleA.x -
                    particleB.x;

                const dy =
                    particleA.y -
                    particleB.y;

                const distance =
                    Math.sqrt(
                        dx * dx +
                        dy * dy
                    );


                if (
                    distance <
                    settings.connectionDistance
                ) {

                    const opacity =
                     (1 - distance / settings.connectionDistance) * 0.32;


                    particleCtx.beginPath();

                    particleCtx.moveTo(
                        particleA.x,
                        particleA.y
                    );

                    particleCtx.lineTo(
                        particleB.x,
                        particleB.y
                    );

                    particleCtx.strokeStyle =
                        `rgba(40, 150, 255, ${opacity})`;

                    particleCtx.lineWidth = 0.9;

                    particleCtx.stroke();
                }
            }
        }
    }


    /* =================================================
       MOUSE → PARTICLE CONNECTION
    ================================================= */

    function connectMouse() {

        if (
            mouse.x === null ||
            mouse.y === null
        ) {

            return;
        }


        for (
            let i = 0;
            i < particles.length;
            i++
        ) {

            const particle =
                particles[i];

            const dx =
                particle.x -
                mouse.x;

            const dy =
                particle.y -
                mouse.y;

            const distance =
                Math.sqrt(
                    dx * dx +
                    dy * dy
                );


            if (
                distance <
                mouse.radius
            ) {

                const opacity =
                    (1 - distance / mouse.radius) * 0.45;


                particleCtx.beginPath();

                particleCtx.moveTo(
                    particle.x,
                    particle.y
                );

                particleCtx.lineTo(
                    mouse.x,
                    mouse.y
                );

                particleCtx.strokeStyle =
                    `rgba(0, 170, 255, ${opacity})`;

                particleCtx.lineWidth = 1;

                particleCtx.stroke();
            }
        }
    }


    /* =================================================
       ANIMATION
    ================================================= */

    let animationFrame;


    function animateParticles() {

        particleCtx.clearRect(
            0,
            0,
            window.innerWidth,
            window.innerHeight
        );


        particles.forEach(
            particle => {

                particle.update();

                particle.draw();
            }
        );


        connectParticles();

        connectMouse();


        animationFrame =
            requestAnimationFrame(
                animateParticles
            );
    }


    /* =================================================
       MOUSE MOVEMENT
    ================================================= */

    window.addEventListener(
        "mousemove",
        event => {

            mouse.x =
                event.clientX;

            mouse.y =
                event.clientY;
        }
    );


    /* =================================================
       MOUSE LEAVE
    ================================================= */

    document.addEventListener(
        "mouseleave",
        () => {

            mouse.x = null;

            mouse.y = null;
        }
    );


    /* =================================================
       TOUCH DEVICES
    ================================================= */

    window.addEventListener(
        "touchstart",
        () => {

            mouse.x = null;

            mouse.y = null;
        },
        {
            passive: true
        }
    );


    /* =================================================
       RESIZE
    ================================================= */

    let resizeTimeout;

    window.addEventListener(
        "resize",
        () => {

            clearTimeout(
                resizeTimeout
            );

            resizeTimeout =
                setTimeout(
                    () => {

                        resizeParticleCanvas();

                        createParticles();

                    },
                    150
                );
        }
    );


    /* =================================================
       INITIALIZE
    ================================================= */

    resizeParticleCanvas();

    createParticles();

    animateParticles();

}

/* =================================================
       INFINITE SCROLL
    ================================================= */


const container = document.getElementById('skillsMarquee');

if (container) {
    container.addEventListener('scroll', () => {
        // Find the width of one full set of skills
        const track = container.querySelector('.skills-marquee-track');
        const singleSetWidth = track.scrollWidth / 2;

        // If the user manually scrolls past the first set, instantly loop back
        if (container.scrollLeft >= singleSetWidth) {
            container.scrollLeft -= singleSetWidth;
        } 
        // If they scroll backward past the start, loop forward
        else if (container.scrollLeft <= 0) {
            container.scrollLeft += singleSetWidth;
        }
    });
}

/* =================================================
       Skills Card
    ================================================= */

let hideTimeout;
const tooltip = document.getElementById('globalSkillTooltip');
const skillCards = document.querySelectorAll('.skill-card');
const marqueeTrack = document.querySelector('.skills-marquee-track');

function showTooltip(card) {
    clearTimeout(hideTimeout);
    if (marqueeTrack) marqueeTrack.style.animationPlayState = 'paused';

    const level = card.getAttribute('data-level');
    const percent = card.getAttribute('data-percent');
    const detailsRaw = card.getAttribute('data-details');

    if (tooltip) {
        tooltip.querySelector('.tooltip-level').textContent = `Level: ${level}`;
        tooltip.querySelector('.tooltip-bar-fill').style.width = percent;
        tooltip.querySelector('.tooltip-percent').textContent = percent;

        const ul = tooltip.querySelector('.tooltip-sub-list');
        ul.innerHTML = '';
        if (detailsRaw) {
            detailsRaw.split('|').forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                ul.appendChild(li);
            });
        }

        const rect = card.getBoundingClientRect();
        tooltip.style.display = 'block';
        tooltip.style.left = `${rect.left + rect.width / 2 - 110}px`;
        tooltip.style.top = `${rect.bottom + 12}px`;
    }
}

function hideTooltip() {
    hideTimeout = setTimeout(() => {
        if (marqueeTrack) marqueeTrack.style.animationPlayState = 'running';
        if (tooltip) tooltip.style.display = 'none';
    }, 150);
}

skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => showTooltip(card));
    card.addEventListener('mouseleave', hideTooltip);
});

if (tooltip) {
    tooltip.addEventListener('mouseenter', () => clearTimeout(hideTimeout));
    tooltip.addEventListener('mouseleave', hideTooltip);
}

// ============================================================
// CERTIFICATIONS 3D COVERFLOW & LIGHTBOX LOGIC
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('coverflowTrack');
    if (!track) return;

    const cards = Array.from(track.querySelectorAll('.coverflow-card'));
    const prevBtn = document.getElementById('coverflowPrev');
    const nextBtn = document.getElementById('coverflowNext');
    
    let currentIndex = 0;
    const totalCards = cards.length;

    // 1. Calculate 3D coverflow positions strictly between buttons
    function updateCoverflow() {
        cards.forEach((card, i) => {
            let diff = i - currentIndex;
            
            // Infinite circular wrapping logic
            if (diff > totalCards / 2) diff -= totalCards;
            if (diff < -totalCards / 2) diff += totalCards;

            const absDiff = Math.abs(diff);

            if (diff === 0) {
                // Center Active Card
                card.style.transform = `translateX(0px) scale(1.05) translateZ(120px) rotateY(0deg)`;
                card.style.opacity = '1';
                card.style.zIndex = '30';
                card.classList.add('active-card');
                card.style.pointerEvents = 'auto';
            } else if (absDiff <= 2) {
                // Adjacent cards with balanced 210px offset to sit perfectly between buttons
                const translateX = diff * 210; 
                const rotateY = diff > 0 ? -18 : 18; 
                const scale = 1 - absDiff * 0.14; 
                const opacity = 1 - absDiff * 0.28; 

                card.style.transform = `translateX(${translateX}px) scale(${scale}) translateZ(0px) rotateY(${rotateY}deg)`;
                card.style.opacity = opacity.toString();
                card.style.zIndex = (20 - absDiff).toString();
                card.classList.remove('active-card');
                card.style.pointerEvents = 'auto';
            } else {
                // Hidden outer cards in infinite loop
                const translateX = diff > 0 ? 550 : -550;
                card.style.transform = `translateX(${translateX}px) scale(0.4) translateZ(-200px)`;
                card.style.opacity = '0';
                card.style.zIndex = '0';
                card.classList.remove('active-card');
                card.style.pointerEvents = 'none';
            }
        });
    }

    // Navigation triggers
    function goNext() {
        currentIndex = (currentIndex + 1) % totalCards;
        updateCoverflow();
    }

    function goPrev() {
        currentIndex = (currentIndex - 1 + totalCards) % totalCards;
        updateCoverflow();
    }

    if (prevBtn) prevBtn.addEventListener('click', goPrev);
    if (nextBtn) nextBtn.addEventListener('click', goNext);

    // Click side card to bring to center
    cards.forEach((card, index) => {
        card.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;
            if (index !== currentIndex) {
                currentIndex = index;
                updateCoverflow();
            }
        });
    });

    // Swipe & Touch Support
    let startX = 0;
    let isDragging = false;

    track.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
    });

    window.addEventListener('mouseup', (e) => {
        if (!isDragging) return;
        isDragging = false;
        const diffX = e.clientX - startX;
        if (diffX < -40) goNext();
        else if (diffX > 40) goPrev();
    });

    track.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        const endX = e.changedTouches[0].clientX;
        const diffX = endX - startX;
        if (diffX < -40) goNext();
        else if (diffX > 40) goPrev();
    }, { passive: true });

    // Initialize position layout on load
    updateCoverflow();
});

// 2. Full-Screen Lightbox Modal Logic
function openCertLightbox(imagePath) {
    let overlay = document.getElementById('certLightboxOverlay');
    
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'certLightboxOverlay';
        overlay.className = 'cert-lightbox-overlay';
        overlay.innerHTML = `
            <span class="cert-lightbox-close" onclick="closeCertLightbox()">&times;</span>
            <img class="cert-lightbox-img" id="certLightboxImg" src="" alt="Full Certificate View">
        `;
        document.body.appendChild(overlay);

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeCertLightbox();
        });
    }

    const img = document.getElementById('certLightboxImg');
    if (img) img.src = imagePath;
    overlay.classList.add('active');
}

function closeCertLightbox() {
    const overlay = document.getElementById('certLightboxOverlay');
    if (overlay) overlay.classList.remove('active');
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCertLightbox();
});

// 3. Sub-certificate Switch Handler
function switchSubCert(buttonElement, subType, imagePath) {
    const card = buttonElement.closest('.coverflow-card');
    if (!card) return;
    
    const previewImg = card.querySelector('.cert-preview-img');
    if (previewImg) previewImg.style.backgroundImage = `url('${imagePath}')`;
    
    const title = card.querySelector('h3');
    if (title) title.textContent = `GeeksforGeeks - ${subType}`;
    
    const viewBtn = card.querySelector('.view-cert-btn');
    if (viewBtn) viewBtn.setAttribute('onclick', `openCertLightbox('${imagePath}')`);
    
    const buttons = card.querySelectorAll('.sub-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');
}
// ============================================================
// MY WORK SECTION - INDEPENDENT STACK ANIMATION LOGIC
// ============================================================

const stackStates = {
    student: 0,
    designer: 0
};

function slideProjectStack(category, direction) {
    const stackId = category === 'student' ? 'studentStack' : 'designerStack';
    const stackEl = document.getElementById(stackId);
    
    if (!stackEl) {
        console.error(`Stack element #${stackId} not found!`);
        return;
    }

    const cards = Array.from(stackEl.querySelectorAll('.project-card'));
    const totalCards = cards.length;
    if (totalCards === 0) return;

    if (direction === 'down') {
        stackStates[category] = (stackStates[category] + 1) % totalCards;
    } else if (direction === 'up') {
        stackStates[category] = (stackStates[category] - 1 + totalCards) % totalCards;
    }

    const activeIndex = stackStates[category];

    cards.forEach((card, i) => {
        card.className = 'project-card'; // Clear previous state classes

        let relativePos = (i - activeIndex + totalCards) % totalCards;

        if (relativePos === 0) {
            card.classList.add('active');
        } else if (relativePos === 1) {
            card.classList.add('next');
        } else {
            card.classList.add('depth');
        }
    });
}
/* =====================================================
   Rewards
===================================================== */
function toggleLetterPopup(button) {
    const card = button.closest('.reward-card');
    const popup = card.querySelector('.full-image-popup');
    
    // Toggle active state
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
        popup.style.opacity = '0';
        popup.style.visibility = 'hidden';
    } else {
        popup.style.display = 'block';
        popup.style.opacity = '1';
        popup.style.visibility = 'visible';
    }
}

/* =====================================================
   CONSOLE SIGNATURE
===================================================== */

console.log(
`
=========================================
 Portfolio Developed For
 Paturi Avinash
=========================================

Features Included:

✓ Animated Navigation Pill
✓ Smooth Scrolling
✓ Education Timeline
✓ Scrollable Skills
✓ Certification Viewer
✓ DevTown Specialization
✓ Resume Download
✓ LinkedIn Integration
✓ GitHub Integration
✓ Glassmorphism UI
✓ Electric Blue Glow
✓ Cursor Spotlight
✓ Mobile Responsive
✓ Scroll Animations

=========================================
`
);