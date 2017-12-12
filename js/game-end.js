var score = document.querySelector(".score");
var clicks = localStorage.getItem("clicks");

if (clicks > 1) {
    score.innerHTML = clicks + " Clicks";
} else if (clicks != 0) {
    score.innerHTML = "1 Click";
} else {
    score.innerHTML = "NO CLICKS. WHY?";
}