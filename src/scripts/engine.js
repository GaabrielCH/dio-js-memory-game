const emojis = [
    "✨",
    "✨",
    "🎂",
    "🎂",
    "🐱‍👤",
    "🐱‍👤",
    "🌹",
    "🌹",
    "❤",
    "❤",
    "👍",
    "👍",
    "🎁",
    "🎁",
    "🖼",
    "🖼",
];

const openCards = [];

let shuffleEmojis = emojis.sort(() => Math.random() - 0.5);

for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "itemBox";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = addClick; // Corrigido de oncclick para onclick
    document.querySelector(".game").appendChild(box);
}

function addClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }

    if (openCards.length === 2) {
        setTimeout(checkBox, 500);
    }
}

function addSound(audioName){
    let audio = new Audio(`./src/audios/${audioName}.m4a`);
    audio.volume = 0.1;
    audio.play();
}

function checkBox() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatched");
        openCards[1].classList.add("boxMatched");

        addSound("match");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }

    openCards.length = 0; // Limpa o array openCards de forma eficiente

    addSound("click");

    if (document.querySelectorAll(".boxMatched").length === emojis.length) {
        addSound("win");
        alert("Você ganhou!");
    }

}
