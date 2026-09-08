/* ==========================================
   SHINCHAN'S CHAOTIC DAY
   GAME LOGIC
   ========================================== */


/* ==========================================
   GAME VARIABLES
   ========================================== */

let chaos = 0;

let snacks = 0;

let combo = 0;

let lastClickTime = 0;

let escapeTimer;

let escapeActive = false;


/* ==========================================
   GET HTML ELEMENTS
   ========================================== */

const chaosButton =
    document.getElementById("chaosButton");

const moodButton =
    document.getElementById("moodButton");

const snackButton =
    document.getElementById("snackButton");

const escapeButton =
    document.getElementById("escapeButton");

const themeButton =
    document.getElementById("themeButton");

const character =
    document.getElementById("character");

const message =
    document.getElementById("message");

const chaosScore =
    document.getElementById("chaosScore");

const snackScore =
    document.getElementById("snackScore");

const bestScore =
    document.getElementById("bestScore");

const comboScore =
    document.getElementById("comboScore");

const comboMessage =
    document.getElementById("comboMessage");

const gameWorld =
    document.querySelector(".game-world");

const effects =
    document.getElementById("effects");

const escapePanel =
    document.getElementById("escapePanel");

const timer =
    document.getElementById("timer");

const runButton =
    document.getElementById("runButton");

const secretMessage =
    document.getElementById("secretMessage");


/* ==========================================
   CHAOS MESSAGES
   ========================================== */

const chaosMessages = [

    "Shinchan did something suspicious... 👀",

    "Misae is going to be angry! 😨",

    "Someone heard that! 🚨",

    "CHAOS LEVEL INCREASING! 🔥",

    "Shinchan has entered maximum mischief! 😈",

    "What have you done?! 😂",

    "This was definitely NOT a good idea.",

    "He did it again. 🤦",

    "Kasukabe is no longer safe! 🏠",

    "Nene is judging you. 😐",

    "Hiroshi has no idea what's happening. 😂",

    "SHINCHAN!!! STOP!!! 😭"

];


/* ==========================================
   CHAOS BUTTON
   ========================================== */

chaosButton.addEventListener(
    "click",
    function () {

        chaos++;

        chaosScore.textContent = chaos;


        /* ==========================
           COMBO
           ========================== */

        const currentTime =
            Date.now();

        if (
            currentTime - lastClickTime
            < 1200
        ) {

            combo++;

        } else {

            combo = 1;

        }

        lastClickTime =
            currentTime;


        comboScore.textContent =
            "x" + combo;


        if (combo >= 3) {

            comboMessage.textContent =
                "🔥 COMBO x" +
                combo +
                "! KEEP GOING!";

        } else {

            comboMessage.textContent =
                "Click fast to build a combo! 🔥";

        }


        /* ==========================
           RANDOM MESSAGE
           ========================== */

        const randomMessage =
            chaosMessages[
                Math.floor(
                    Math.random()
                    * chaosMessages.length
                )
            ];


        message.textContent =
            randomMessage;


        /* ==========================
           SCREEN SHAKE
           ========================== */

        document.body.classList.add(
            "screen-shake"
        );


        setTimeout(
            function () {

                document.body.classList.remove(
                    "screen-shake"
                );

            },
            450
        );


        /* ==========================
           CHARACTER REACTION
           ========================== */

        character.style.transform =
            "scale(1.15) rotate(" +
            (Math.random() * 12 - 6) +
            "deg)";


        setTimeout(
            function () {

                character.style.transform =
                    "";

            },
            300
        );


        /* ==========================
           PARTICLES
           ========================== */

        createParticles();


        /* ==========================
           BEST SCORE
           ========================== */

        const oldBest =
            Number(
                localStorage.getItem(
                    "bestChaos"
                ) || 0
            );


        if (chaos > oldBest) {

            localStorage.setItem(
                "bestChaos",
                chaos
            );

            bestScore.textContent =
                chaos;

        }


        /* ==========================
           SECRET EASTER EGG
           ========================== */

        if (chaos === 42) {

            secretMessage.classList.remove(
                "hidden"
            );

            message.textContent =
                "🥚 YOU FOUND THE SECRET!";

        }

    }
);


/* ==========================================
   PARTICLES
   ========================================== */

function createParticles() {

    const particleSymbols = [
        "🌸",
        "⭐",
        "🍪",
        "😂",
        "🔥",
        "💥",
        "😈"
    ];


    for (
        let i = 0;
        i < 8;
        i++
    ) {

        const particle =
            document.createElement(
                "div"
            );


        particle.className =
            "particle";


        particle.textContent =
            particleSymbols[
                Math.floor(
                    Math.random()
                    * particleSymbols.length
                )
            ];


        particle.style.left =
            (
                40 +
                Math.random() * 20
            ) + "%";


        particle.style.top =
            "55%";


        particle.style.setProperty(
            "--x",
            (
                Math.random() * 300 - 150
            ) + "px"
        );


        particle.style.setProperty(
            "--y",
            (
                Math.random() * -250 - 50
            ) + "px"
        );


        gameWorld.appendChild(
            particle
        );


        setTimeout(
            function () {

                particle.remove();

            },
            1000
        );

    }

}


/* ==========================================
   MOOD GENERATOR
   ========================================== */

moodButton.addEventListener(
    "click",
    function () {

        const moods = [

            ["😈", "Mischievous Shinchan!"],

            ["😂", "Shinchan is laughing!"],

            ["😴", "Shinchan wants to sleep."],

            ["🍪", "Shinchan wants snacks!"],

            ["🎮", "Gaming time!"],

            ["😎", "Shinchan thinks he's cool."],

            ["😭", "Shinchan is in trouble!"],

            ["🤪", "Maximum craziness activated!"],

            ["🤔", "Shinchan is planning something..."]

        ];


        const mood =
            moods[
                Math.floor(
                    Math.random()
                    * moods.length
                )
            ];


        message.textContent =
            mood[0] +
            " " +
            mood[1];


        character.style.transform =
            "scale(1.12) rotate(-5deg)";


        setTimeout(
            function () {

                character.style.transform =
                    "";

            },
            500
        );

    }
);


/* ==========================================
   SNACK BUTTON
   ========================================== */

snackButton.addEventListener(
    "click",
    function () {

        snacks++;

        snackScore.textContent =
            snacks;


        const snackMessages = [

            "🍪 You found a chocolate biscuit!",

            "🍫 Shinchan found chocolate!",

            "🍭 FREE CANDY!",

            "🍩 Donut acquired!",

            "🥤 Shinchan found a drink!",

            "🍕 Somehow... pizza appeared!"

        ];


        message.textContent =
            snackMessages[
                Math.floor(
                    Math.random()
                    * snackMessages.length
                )
            ];


        createSnackParticle();


        if (
            snacks % 10 === 0
        ) {

            message.textContent =
                "🍪 10 snacks! Shinchan is HAPPY!";

        }

    }
);


/* ==========================================
   SNACK PARTICLE
   ========================================== */

function createSnackParticle() {

    const snack =
        document.createElement(
            "div"
        );


    snack.className =
        "particle";


    snack.textContent =
        "🍪";


    snack.style.left =
        "50%";


    snack.style.top =
        "55%";


    snack.style.setProperty(
        "--x",
        (
            Math.random() * 200 - 100
        ) + "px"
    );


    snack.style.setProperty(
        "--y",
        "-150px"
    );


    gameWorld.appendChild(
        snack
    );


    setTimeout(
        function () {

            snack.remove();

        },
        1000
    );

}


/* ==========================================
   MISAe ESCAPE GAME
   ========================================== */

escapeButton.addEventListener(
    "click",
    function () {

        if (escapeActive) {
            return;
        }


        escapeActive = true;


        escapePanel.classList.remove(
            "hidden"
        );


        let timeLeft =
            5.00;


        timer.textContent =
            timeLeft.toFixed(2);


        escapeTimer =
            setInterval(
                function () {

                    timeLeft -= 0.01;


                    timer.textContent =
                        timeLeft.toFixed(2);


                    if (
                        timeLeft <= 0
                    ) {

                        clearInterval(
                            escapeTimer
                        );


                        escapeActive =
                            false;


                        escapePanel.classList.add(
                            "hidden"
                        );


                        message.textContent =
                            "😱 OH NO! Misae caught you!";

                    }

                },
                10
            );

    }
);


/* ==========================================
   RUN BUTTON
   ========================================== */

runButton.addEventListener(
    "click",
    function () {

        if (!escapeActive) {
            return;
        }


        clearInterval(
            escapeTimer
        );


        escapeActive =
            false;


        escapePanel.classList.add(
            "hidden"
        );


        chaos += 5;

        chaosScore.textContent =
            chaos;


        message.textContent =
            "🏃💨 YOU ESCAPED MISAe! +5 CHAOS!";


        character.style.transform =
            "translateX(150px)";


        setTimeout(
            function () {

                character.style.transform =
                    "";

            },
            700
        );


        createParticles();

    }
);


/* ==========================================
   NIGHT MODE
   ========================================== */

themeButton.addEventListener(
    "click",
    function () {

        document.body.classList.toggle(
            "night"
        );


        if (
            document.body.classList.contains(
                "night"
            )
        ) {

            themeButton.innerHTML =
                "☀️ <span>Day Mode</span>";

        } else {

            themeButton.innerHTML =
                "🌙 <span>Night Mode</span>";

        }

    }
);


/* ==========================================
   CHARACTER CLICK
   ========================================== */

character.addEventListener(
    "click",
    function () {

        message.textContent =
            "Hey! Why did you click me?! 😳";

        chaos += 1;

        chaosScore.textContent =
            chaos;


        character.style.transform =
            "scale(1.2) rotate(8deg)";


        setTimeout(
            function () {

                character.style.transform =
                    "";

            },
            400
        );

    }
);


/* ==========================================
   LOAD BEST SCORE
   ========================================== */

const savedBest =
    Number(
        localStorage.getItem(
            "bestChaos"
        ) || 0
    );


bestScore.textContent =
    savedBest;
