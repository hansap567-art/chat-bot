const chatForm = document.getElementById("chatForm");
const chatBox = document.getElementById("chatBox");
const questionInput = document.getElementById("question");

// ------------------------------
// Auto Scroll
// ------------------------------

function scrollToBottom() {
    chatBox.scrollTop = chatBox.scrollHeight;
}

// ------------------------------
// Typing Animation
// ------------------------------

function showTyping() {

    const typing = document.createElement("div");

    typing.className = "bot-message typing";

    typing.innerHTML = `
        <div class="icon">🤖</div>
        <div class="message">
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </div>
    `;

    chatBox.appendChild(typing);

    scrollToBottom();

    return typing;
}

// ------------------------------
// User Message
// ------------------------------

function addUserMessage(message) {

    const div = document.createElement("div");

    div.className = "user-message";

    div.innerHTML = `
        <div class="message">
            ${message}
        </div>
    `;

    chatBox.appendChild(div);

    scrollToBottom();
}

// ------------------------------
// Bot Message
// ------------------------------

function addBotMessage(message) {

    const div = document.createElement("div");

    div.className = "bot-message";

    div.innerHTML = `
        <div class="icon">
            🤖
        </div>

        <div class="message">
            ${message}
        </div>
    `;

    chatBox.appendChild(div);

    scrollToBottom();
}

// ------------------------------
// Quick Buttons
// ------------------------------

function sendSuggestion(text){

    questionInput.value = text;

    chatForm.dispatchEvent(new Event("submit"));

}

// ------------------------------
// Form Submit
// ------------------------------

chatForm.addEventListener("submit", function(e){

    e.preventDefault();

    const message = questionInput.value.trim();

    if(message==="") return;

    addUserMessage(message);

    questionInput.value="";

    const typing = showTyping();

    setTimeout(function(){

        typing.remove();

        addBotMessage(
            "Processing your question..."
        );

    },1000);

});

scrollToBottom();
// ------------------------------
// CSRF Token
// ------------------------------

function getCookie(name) {

    let cookieValue = null;

    if (document.cookie && document.cookie !== "") {

        const cookies = document.cookie.split(";");

        for (let i = 0; i < cookies.length; i++) {

            const cookie = cookies[i].trim();

            if (cookie.substring(0, name.length + 1) === (name + "=")) {

                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));

                break;

            }

        }

    }

    return cookieValue;

}

const csrftoken = getCookie("csrftoken");

// ------------------------------
// Send Message to Django
// ------------------------------

chatForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const message = questionInput.value.trim();

    if (message === "") return;

    addUserMessage(message);

    questionInput.value = "";

    const typing = showTyping();

    fetch("/", {

        method: "POST",

        headers: {

            "Content-Type": "application/x-www-form-urlencoded",

            "X-CSRFToken": csrftoken

        },

        body: new URLSearchParams({

            question: message

        })

    })

    .then(response => response.text())

    .then(html => {

        typing.remove();

        const parser = new DOMParser();

        const doc = parser.parseFromString(html, "text/html");

        const answer = doc.querySelector("#django-answer");

        if (answer) {

            addBotMessage(answer.innerText);

        }

        else {

            addBotMessage("Sorry, something went wrong.");

        }

    })

    .catch(error => {

        typing.remove();

        addBotMessage("Server Error.");

        console.error(error);

    });

});

// ------------------------------
// Enter Key
// ------------------------------

questionInput.addEventListener("keypress", function(e){

    if(e.key==="Enter"){

        e.preventDefault();

        chatForm.dispatchEvent(new Event("submit"));

    }

});

// ------------------------------
// Scroll
// ------------------------------

scrollToBottom();
