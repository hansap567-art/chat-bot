// ==============================
// AI Suggestion Buttons
// ==============================

function sendSuggestion(text) {
    const input = document.getElementById("questionInput");

    if (input) {
        input.value = text;
        input.focus();
    }
}

// ==============================
// Smooth Scroll
// ==============================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});

// ==============================
// Chat Input Animation
// ==============================

const questionInput = document.getElementById("questionInput");

if (questionInput) {

    questionInput.addEventListener("focus", function () {
        this.style.border = "2px solid #0d6efd";
    });

    questionInput.addEventListener("blur", function () {
        this.style.border = "1px solid #ccc";
    });

}

// ==============================
// Auto Scroll to Chat Response
// ==============================

window.addEventListener("load", () => {

    const botReply = document.querySelector(".chat-box.bot");

    if (botReply) {

        botReply.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }

});

// ==============================
// Button Hover Animation
// ==============================

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.05)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });

});

// ==============================
// Welcome Message
// ==============================

console.log("✅ Nilgiri Smart Campus Portal Loaded Successfully");