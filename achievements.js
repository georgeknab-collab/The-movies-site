// ======================================
// GEORGE'S UNIVERSE ACHIEVEMENTS
// ======================================

const ACHIEVEMENTS = {

    firstMovie: {
        name: "First Movie",
        description: "Finish your first movie on George's Universe.",
        icon: "🎬"
    },

    darkGamer: {
        name: "Enter the Dark",
        description: "Visit the DarkGamers headquarters.",
        icon: "🌑"
    },

    firstGame: {
        name: "First Game",
        description: "Play your first game.",
        icon: "🎮"
    },

    explorer: {
        name: "Universe Explorer",
        description: "Visit 5 different sections of George's Universe.",
        icon: "🌌"
    },

    creator: {
        name: "Creator",
        description: "Create your first project.",
        icon: "💻"
    },

    supporter: {
        name: "Supporter",
        description: "Favorite your first movie or game.",
        icon: "❤️"
    },

    vaultLegend: {
        name: "VAULT Legend",
        description: "Unlock every other achievement.",
        icon: "👑"
    }

};


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

        moviesWatched: 0,

        gamesPlayed: 0,

        pagesVisited: []

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
// UNLOCK
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

    // First movie achievement
    if (data.moviesWatched >= 1) {

        unlockAchievement("firstMovie");

    }

}


// ======================================
// GAME PLAYED
// ======================================

function gamePlayed() {

    const data =
        getAchievementData();

    data.gamesPlayed++;

    saveAchievementData(data);

    if (data.gamesPlayed >= 1) {

        unlockAchievement("firstGame");

    }

}


// ======================================
// PAGE TRACKING
// ======================================

function trackPage() {

    const data =
        getAchievementData();

    const page =
        location.pathname;

    if (!data.pagesVisited.includes(page)) {

        data.pagesVisited.push(page);

    }

    saveAchievementData(data);


    // 5 different pages
    if (data.pagesVisited.length >= 5) {

        unlockAchievement("explorer");

    }


    // DarkGamers headquarters
    if (
        page.includes("darkgamers")
    ) {

        unlockAchievement("darkGamer");

    }

}


// ======================================
// CREATOR
// ======================================

function becameCreator() {

    unlockAchievement("creator");

}


// ======================================
// SUPPORTER
// ======================================

function becameSupporter() {

    unlockAchievement("supporter");

}


// ======================================
// POPUP
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


// ======================================
// START TRACKING
// ======================================

trackPage();
