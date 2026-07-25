document.addEventListener("DOMContentLoaded", function () {

    const chatbotBtn = document.getElementById("chatbot-btn");
    const chatbotBox = document.getElementById("chatbot-box");
    const closeChat = document.getElementById("close-chat");
    const sendBtn = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");
    const chatBody = document.getElementById("chat-body");

    // Stop if chatbot elements don't exist
    if (!chatbotBtn || !chatbotBox) return;

    // ==========================
    // Open Chat
    // ==========================
    chatbotBtn.addEventListener("click", function () {
        chatbotBox.style.display = "block";
    });

    // ==========================
    // Close Chat
    // ==========================
    closeChat.addEventListener("click", function () {
        chatbotBox.style.display = "none";
    });

    // ==========================
    // Add Message
    // ==========================
    function addMessage(text, sender) {

        const message = document.createElement("div");

        if (sender === "user") {
            message.className = "user-message";
        } else {
            message.className = "bot-message";
        }

        message.innerHTML = text;

        chatBody.appendChild(message);

        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // ==========================
    // Dummy AI Response
    // ==========================
    function getBotReply(message) {

        message = message.toLowerCase();

        if (message.includes("bsc")) {

            return "📘 BSc Computer Science is a 3-year undergraduate programme focusing on Programming, AI, Cloud Computing, Networking and Software Development.";

        }

        if (message.includes("admission")) {

            return "🎓 Admissions are open. You can apply online by submitting your documents and application form.";

        }

        if (message.includes("placement")) {

            return "💼 Nilgiri College has 95% placement assistance with companies like Infosys, TCS, IBM, Wipro and Accenture.";

        }

        if (message.includes("library")) {

            return "📚 Our Digital Library provides books, journals, e-books and online resources for students.";

        }

        if (message.includes("course")) {

            return "📖 We offer BSc CS, BCA AI & Robotics, Cyber Security, Multimedia, BBA, MSc CS, MA English and MCom.";

        }

        if (message.includes("hello") || message.includes("hi")) {

            return "👋 Hello! Welcome to Nilgiri Smart Campus Portal. How can I help you?";

        }

        return "🤖 Thanks for your question. This chatbot will soon be connected to the Django AI Assistant.";
    }

    // ==========================
    // Send Message
    // ==========================
    function sendMessage() {

        const message = userInput.value.trim();

        if (message === "") return;

        addMessage(message, "user");

        userInput.value = "";

        setTimeout(function () {

            const reply = getBotReply(message);

            addMessage(reply, "bot");

        }, 600);

    }

    // ==========================
    // Button Click
    // ==========================
    sendBtn.addEventListener("click", sendMessage);

    // ==========================
    // Press Enter
    // ==========================
    userInput.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            sendMessage();

        }

    });

});

// ==========================
// Quick Question Buttons
// ==========================
function quickQuestion(text) {

    const input = document.getElementById("user-input");

    if (!input) return;

    input.value = text;

    document.getElementById("send-btn").click();

}