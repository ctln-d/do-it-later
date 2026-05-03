const excuseList = ["You're not in the perfect state of mind right now.",
    "You are strategically delaying things.", "You work better under pressure.",
    "If today is not the due date, then it's not the do date.",
    "It is a problem for future you, so live in the moment.",
    "If you can do it tomorrow, why do it today?",
    "You can deal with the consequences later.",
    "You are waiting until you are older and wiser to do get it done.", "Haste makes waste.",
    "Great things take time.", "The more your mind is rested the more productive it will be.",
    "Your best ideas come with a little waiting."]

const excuse = document.getElementById("excuse")
const excuseBtn = document.getElementById("excuseBtn")

excuseBtn.addEventListener("click", function () {
    let x = Math.floor(Math.random() * excuseList.length)
    excuse.innerHTML = excuseList[x]
})