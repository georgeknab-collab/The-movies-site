// ===============================
// GEORGE'S UNIVERSE ACHIEVEMENTS
// ===============================

const ACHIEVEMENTS = {

    firstMovie: {
        name: "First Movie",
        description: "Watch your first movie.",
        icon: "🎬"
    },

    darkGamer: {
        name: "Enter the Dark",
        description: "Visit the DarkGamers headquarters.",
        icon: "🌑"
    },

    movieMarathon: {
        name: "Movie Marathon",
        description: "Watch 5 movies.",
        icon: "🍿",
        goal: 5
    },

    gamer: {
        name: "Gamer",
        description: "Play 5 games.",
        icon: "🎮",
        goal: 5
    },

    explorer: {
        name: "Explorer",
        description: "Visit 10 different pages.",
        icon: "⭐",
        goal: 10
    },

    creator: {
        name: "Creator",
        description: "Create your first project.",
        icon: "💻"
    }

};


// ===============================
// GET SAVED DATA
// ===============================

function getAchievementData() {

    const saved = localStorage.getItem(
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


// ===============================
// SAVE DATA
// ===============================

function saveAchievementData(data) {

    localStorage.setItem(
        "georgesUniverseAchievements",
        JSON.stringify(data)
    );

}


// ===============================
// UNLOCK ACHIEVEMENT
// ===============================

function unlockAchievement(id) {

    const data = getAchievementData();

    if (!data.unlocked.includes(id)) {

        data.unlocked.push(id);

        saveAchievementData(data);

        showAchievementPopup(id);

    }

}


// ===============================
// MOVIE WATCHED
// ===============================

function movieWatched() {

    const data = getAchievementData();

    data.moviesWatched++;

    saveAchievementData(data);

    // First movie
    if (data.moviesWatched >= 1) {
        unlockAchievement("firstMovie");
    }

    // Movie marathon
    if (data.moviesWatched >= 5) {
        unlockAchievement("movieMarathon");
    }

}


// ===============================
// GAME PLAYED
// ===============================

function gamePlayed() {

    const data = getAchievementData();

    data.gamesPlayed++;

    saveAchievementData(data);

    if (data.gamesPlayed >= 5) {

        unlockAchievement("gamer");

    }

}


// ===============================
// PAGE VISITED
// ===============================

function trackPage() {

    const data = getAchievementData();

    const page = location.pathname;

    if (!data.pagesVisited.includes(page)) {

        data.pagesVisited.push(page);

    }

    saveAchievementData(data);

    if (data.pagesVisited.length >= 10) {

        unlockAchievement("explorer");

    }

}


// ===============================
// DARKGAMERS
// ===============================

function visitedDarkGamers() {

    unlockAchievement("darkGamer");

}


// ===============================
// CREATOR
// ===============================

function becameCreator() {

    unlockAchievement("creator");

}


// ===============================
// POPUP
// ===============================

function showAchievementPopup(id) {

    const achievement = ACHIEVEMENTS[id];

    if (!achievement) return;

    const popup = document.createElement("div");

    popup.innerHTML = `
        <div class="achievement-icon">
            ${achievement.icon}
        </div>

        <div>
            <strong>ACHIEVEMENT UNLOCKED!</strong>

            <div>
                ${achievement.name}
            </div>
        </div>
    `;

    popup.style.position = "fixed";
    popup.style.right = "25px";
    popup.style.bottom = "25px";
    popup.style.zIndex = "999999";

    popup.style.background = "#111";
    popup.style.color = "white";

    popup.style.padding = "18px 22px";

    popup.style.borderRadius = "15px";

    popup.style.border =
        "1px solid rgba(232,39,30,0.5)";

    popup.style.boxShadow =
        "0 0 35px rgba(232,39,30,0.35)";

    popup.style.display = "flex";

    popup.style.alignItems = "center";

    popup.style.gap = "15px";

    popup.style.fontFamily =
        "Arial, sans-serif";

    document.body.appendChild(popup);


    setTimeout(() => {

        popup.remove();

    }, 4000);

}


// ===============================
// AUTOMATIC PAGE TRACKING
// ===============================

trackPage();
