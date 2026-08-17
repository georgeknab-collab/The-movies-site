// ======================================
// GEORGE'S UNIVERSE ACHIEVEMENTS
// ======================================

const ACHIEVEMENTS = {

    firstMovie: {
        name: "First Movie",
        description: "Finish your first movie on George's Universe.",
        icon: "🎬"
    }

};


// ======================================
// RANDOM MESSAGES
// ======================================

const RANDOM_MESSAGES = [

    "🚀 You have entered the unknown.",
    "👀 Someone is watching... probably.",
    "🎮 GAME ON!",
    "🌌 Welcome to the Universe.",
    "🍿 Time for a movie!",
    "💻 The computers are thinking.",
    "🔥 GEORGE'S UNIVERSE IS ON FIRE!",
    "🧠 Your brain has been upgraded.",
    "👑 You have discovered absolutely nothing.",
    "🦆 A random duck has entered the Universe.",
    "⚡ SYSTEM OVERLOAD!",
    "🎲 The Universe has rolled the dice.",
    "🌑 YOU ARE A DARK GAMER."

];


// ======================================
// RANDOM BUTTON
// ======================================

function randomUniverseMessage() {

    const randomIndex =
        Math.floor(
            Math.random() * RANDOM_MESSAGES.length
        );

    const message =
        RANDOM_MESSAGES[randomIndex];

    showRandomMessage(message);

}


// ======================================
// RANDOM MESSAGE POPUP
// ======================================

function showRandomMessage(message) {

    const oldPopup =
        document.getElementById(
            "randomUniversePopup"
        );

    if (oldPopup) {
        oldPopup.remove();
    }


    const popup =
        document.createElement("div");

    popup.id =
        "randomUniversePopup";


    popup.innerHTML = `

        <div style="
            font-size:45px;
            margin-bottom:10px;
        ">
            🎲
        </div>

        <div style="
            font-size:20px;
            font-weight:bold;
        ">
            ${message}
        </div>

    `;


    popup.style.position = "fixed";

    popup.style.left = "50%";

    popup.style.top = "50%";

    popup.style.transform =
        "translate(-50%, -50%)";

    popup.style.zIndex = "999999";

    popup.style.background = "#111";

    popup.style.color = "white";

    popup.style.padding = "30px 40px";

    popup.style.borderRadius = "20px";

    popup.style.textAlign = "center";

    popup.style.fontFamily =
        "Arial, sans-serif";

    popup.style.border =
        "1px solid rgba(232,39,30,0.6)";

    popup.style.boxShadow =
        "0 0 60px rgba(232,39,30,0.4)";

    popup.style.maxWidth = "90%";


    document.body.appendChild(popup);


    setTimeout(() => {

        popup.remove();

    }, 3000);

}


// ======================================
// GET DATA
// ======================================

function getAchievementData() {

    const saved =
        localStorage.getItem(
            "georgesUniverseAchievements"
        );

    if (saved) {

        return JSON.parse(saved);

    }

    return {

        unlocked: [],

        moviesWatched: 0

    };

}


// ======================================
// SAVE DATA
// ======================================

function saveAchievementData(data) {

    localStorage.setItem(
        "georgesUniverseAchievements",
        JSON.stringify(data)
    );

}


// ======================================
// UNLOCK ACHIEVEMENT
// ======================================

function unlockAchievement(id) {

    const data =
        getAchievementData();

    if (!data.unlocked.includes(id)) {

        data.unlocked.push(id);

        saveAchievementData(data);

        showAchievementPopup(id);

    }

}


// ======================================
// MOVIE WATCHED
// ======================================

function movieWatched() {

    const data =
        getAchievementData();

    data.moviesWatched++;

    saveAchievementData(data);


    if (data.moviesWatched >= 1) {

        unlockAchievement("firstMovie");

    }

}


// ======================================
// ACHIEVEMENT POPUP
// ======================================

function showAchievementPopup(id) {

    const achievement =
        ACHIEVEMENTS[id];

    if (!achievement) return;


    const popup =
        document.createElement("div");


    popup.innerHTML = `

        <div style="
            font-size:32px;
        ">
            ${achievement.icon}
        </div>

        <div>

            <div style="
                color:#e8271e;
                font-size:11px;
                font-weight:bold;
                letter-spacing:1px;
                margin-bottom:4px;
            ">
                ACHIEVEMENT UNLOCKED
            </div>

            <div style="
                font-size:16px;
                font-weight:bold;
            ">
                ${achievement.name}
            </div>

        </div>

    `;


    popup.style.position =
        "fixed";

    popup.style.right =
        "25px";

    popup.style.bottom =
        "25px";

    popup.style.zIndex =
        "999999";

    popup.style.background =
        "#111";

    popup.style.color =
        "white";

    popup.style.padding =
        "18px 22px";

    popup.style.borderRadius =
        "15px";

    popup.style.border =
        "1px solid rgba(232,39,30,0.5)";

    popup.style.boxShadow =
        "0 0 35px rgba(232,39,30,0.35)";

    popup.style.display =
        "flex";

    popup.style.alignItems =
        "center";

    popup.style.gap =
        "15px";

    popup.style.fontFamily =
        "Arial, sans-serif";


    document.body.appendChild(
        popup
    );


    setTimeout(() => {

        popup.remove();

    }, 4000);

}
