const excuseList = ["You're not in the perfect state of mind right now.",
    "You are strategically delaying things.", "You work better under pressure.",
    "If today is not the due date, then it's not the do date.",
    "It is a problem for future you, so live in the moment.",
    "If you can do it tomorrow, why do it today?",
    "You can deal with the consequences later.",
    "You are waiting until you are older and wiser to get it done.", "Haste makes waste.",
    "Great things take time.", "The more your mind is rested the more productive it will be.",
    "Your best ideas come with a little waiting."]

const excuse = document.getElementById("excuse")
const excuseBtn = document.getElementById("excuseBtn")

function triggerGlint(el) {
    el.classList.remove("run-glint");
    void el.offsetWidth; // restart animation
    el.classList.add("run-glint");
}

const buttons = document.querySelectorAll(".button");
setInterval(() => {
    buttons.forEach(btn => triggerGlint(btn));
}, 6000);

excuseBtn.addEventListener("click", function () {
    let x = Math.floor(Math.random() * excuseList.length)
    excuse.innerHTML = excuseList[x]
    speak(excuseList[x])
})

function speak(text) {
    const msg = new SpeechSynthesisUtterance(text)

    msg.rate = 1.05;
    msg.pitch = 1.2;
    msg.volume = 1;

    const voices = speechSynthesis.getVoices();
    msg.voice = voices.find(v =>
        v.name.includes("David") && v.name.includes("Microsoft")
    )

    speechSynthesis.speak(msg)
}

function getVoices() {
    return new Promise(resolve => {
        let voices = speechSynthesis.getVoices()

        if (voices.length) {
            return resolve(voices)
        }

        speechSynthesis.onvoiceschanged = () => {
            resolve(speechSynthesis.getVoices())
        }

    })
}