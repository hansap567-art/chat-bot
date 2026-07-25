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
// Floating chatbot

const chatbotBtn = document.getElementById("chatbot-btn");
const chatbotBox = document.getElementById("chatbot-box");
const closeChat = document.getElementById("close-chat");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBody = document.getElementById("chat-body");

// Open Chat
chatbotBtn.addEventListener("click", () => {
    chatbotBox.style.display = "block";
});

// Close Chat
closeChat.addEventListener("click", () => {
    chatbotBox.style.display = "none";
});

// Send Message
function sendMessage() {

    const message = userInput.value.trim();

    if(message==="") return;

    // User Message
    chatBody.innerHTML += `
        <div class="user-message">
            ${message}
        </div>
    `;

    userInput.value="";

    // Dummy AI Reply
    setTimeout(()=>{

        chatBody.innerHTML += `
            <div class="bot-message">
                🤖 Thanks! Your message has been received.
                We'll connect this to the Django AI chatbot next.
            </div>
        `;

        chatBody.scrollTop = chatBody.scrollHeight;

    },600);

}

sendBtn.addEventListener("click",sendMessage);

userInput.addEventListener("keypress",function(e){

    if(e.key==="Enter"){

        sendMessage();

    }

});