const openButton = document.getElementById("openButton");
const loveSection = document.getElementById("letter");

const heartContainer = document.querySelector(".letter-hearts");
const sparkleContainer = document.querySelector(".sparkles");


/* =========================
   OPEN LOVE LETTER
========================= */

openButton.addEventListener("click", function () {

    loveSection.scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================
   HEART COLLECTION
========================= */

const hearts = [
    "❤️",
    "💗",
    "💕",
    "💖",
    "💓",
    "💞",
    "💘"
];


/* =========================
   CREATE 150 HEARTS
========================= */

for (let i = 0; i < 150; i++) {

    const heart = document.createElement("span");

    heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];


    /* Random horizontal position */

    heart.style.left =
        Math.random() * 100 + "%";


    /* Random vertical starting position */

    heart.style.bottom =
        (-10 + Math.random() * 110) + "%";


    /* Random heart size */

    heart.style.fontSize =
        (14 + Math.random() * 30) + "px";


    /* Random floating speed */

    heart.style.animationDuration =
        (8 + Math.random() * 14) + "s";


    /* Start animations at different moments */

    heart.style.animationDelay =
        (-Math.random() * 18) + "s";


    /* Random transparency */

    heart.style.opacity =
        0.35 + Math.random() * 0.6;


    /* Soft romantic glow */

    heart.style.filter =
        `drop-shadow(
            0 0 ${3 + Math.random() * 9}px
            rgba(220, 80, 140, 0.35)
        )`;


    heartContainer.appendChild(heart);
}


/* =========================
   SPARKLE COLLECTION
========================= */

const stars = [
    "✦",
    "✧",
    "⋆",
    "✶",
    "✷",
    "✹"
];


/* =========================
   CREATE 180 SPARKLES
========================= */

for (let i = 0; i < 180; i++) {

    const sparkle = document.createElement("span");


    sparkle.textContent =
        stars[Math.floor(Math.random() * stars.length)];


    /* Random position */

    sparkle.style.left =
        Math.random() * 100 + "%";

    sparkle.style.top =
        Math.random() * 100 + "%";


    /* Random sparkle size */

    sparkle.style.fontSize =
        (7 + Math.random() * 19) + "px";


    /* Random twinkle speed */

    sparkle.style.animationDuration =
        (2 + Math.random() * 5) + "s";


    /* Different animation starting points */

    sparkle.style.animationDelay =
        (-Math.random() * 7) + "s";


    /* Random brightness */

    sparkle.style.opacity =
        0.25 + Math.random() * 0.75;


    /* Slight variation in sparkle color */

    sparkle.style.color =
        Math.random() > 0.5
            ? "#d98aa6"
            : "#f0a6bf";


    sparkleContainer.appendChild(sparkle);
}

/* =========================
   OUR STORY SCROLL REVEAL
========================= */

const storyItems =
    document.querySelectorAll(".story-item");


const storyObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "story-visible"
                    );

                    storyObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.18
        }
    );


storyItems.forEach(function (item) {

    storyObserver.observe(item);

});

/* =========================
   OUR STORY ATMOSPHERE
========================= */

const storyHeartContainer =
    document.querySelector(".story-background-hearts");

const storyParticleContainer =
    document.querySelector(".story-particles");


/* =========================
   STORY HEARTS
========================= */

const storyHeartTypes = [
    "❤️",
    "💗",
    "💕",
    "💖",
    "💓"
];


for (let i = 0; i < 35; i++) {

    const heart =
        document.createElement("span");

    heart.textContent =
        storyHeartTypes[
            Math.floor(
                Math.random() *
                storyHeartTypes.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.setProperty(
        "--story-heart-size",
        (12 + Math.random() * 20) + "px"
    );

    heart.style.setProperty(
        "--story-heart-duration",
        (14 + Math.random() * 12) + "s"
    );

    heart.style.setProperty(
        "--story-heart-delay",
        (-Math.random() * 18) + "s"
    );

    storyHeartContainer.appendChild(heart);
}


/* =========================
   STORY PARTICLES
========================= */

const storyParticleTypes = [
    "✦",
    "✧",
    "⋆",
    "✶"
];


for (let i = 0; i < 45; i++) {

    const particle =
        document.createElement("span");

    particle.textContent =
        storyParticleTypes[
            Math.floor(
                Math.random() *
                storyParticleTypes.length
            )
        ];

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.top =
        Math.random() * 100 + "%";

    particle.style.setProperty(
        "--particle-size",
        (6 + Math.random() * 12) + "px"
    );

    particle.style.setProperty(
        "--particle-duration",
        (4 + Math.random() * 5) + "s"
    );

    particle.style.setProperty(
        "--particle-delay",
        (-Math.random() * 8) + "s"
    );

    storyParticleContainer.appendChild(
        particle
    );
}

/* =========================================
   STORY PHOTO SCROLL ANIMATION
========================================= */

const storyPhotos =
    document.querySelectorAll(".story-item .story-photos img");

const photoObserver =
    new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const photos =
                        entry.target.querySelectorAll(
                            ".story-photos img"
                        );

                    photos.forEach(function (photo, index) {

                        photo.style.animation =
                            `photoScrollIn 2s ease forwards`;

                        photo.style.animationDelay =
                            `${index * 0.30}s`;

                    });

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.18
        }
    );


storyPhotos.forEach(function (photo) {

    const storyItem =
        photo.closest(".story-item");

    if (storyItem) {
        photoObserver.observe(storyItem);
    }

});

/* =========================================
   NEXT CHAPTER BUTTON
========================================= */

const next =
    document.getElementById("next");

const feelingsSection =
    document.getElementById("feelings");


if (next && feelingsSection) {

    next.addEventListener(
        "click",
        function () {

            feelingsSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }
    );

}

const nextButton=document.getElementById("nextChapterButton");

const photoWall=document.getElementById("photoWall");

nextButton.addEventListener("click",()=>{

    nextButton.animate(

        [

            {transform:"scale(1)"},

            {transform:"scale(.9)"},

            {transform:"scale(1.08)"},

            {transform:"scale(1)"}

        ],

        {

            duration:450,

            easing:"ease"

        }

    );

    setTimeout(()=>{

        photoWall.scrollIntoView({

            behavior:"smooth"

        });

    },250);

});

const observer=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const photos=document.querySelectorAll(".photo-wall img");

            photos.forEach((photo,index)=>{

                setTimeout(()=>{

                    photo.classList.add("show");

                },index*180);

            });

            setTimeout(()=>{

                document.querySelector(".wall-message").classList.add("show");

            },photos.length*180+500);

            observer.disconnect();

        }

    });

},

{

    threshold:0.25

});

observer.observe(photoWall);

const revealOrder = [

0,1,4,2,5,8,3,6,
9,12,7,10,13,11,14,15

];

revealOrder.forEach((index,i)=>{

    setTimeout(()=>{

        photos[index].classList.add("show");

    },i*170);

});