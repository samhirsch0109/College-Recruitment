const texts = [
    "Hello Future Panthers!",
    "Hail to Pitt!",
    "Go Panthers!",
    "H2P!",
    "Welcome!",
];

// Function to get a random text
function getRandomText() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
}

const randomSayingElement = document.getElementById('text');
randomSayingElement.innerHTML = `<strong style="color: #FFB81C">${getRandomText()}</strong>`;