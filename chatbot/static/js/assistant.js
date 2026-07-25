const chatBox = document.getElementById("chatBox");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const micBtn = document.getElementById("micBtn");
const newChatBtn = document.getElementById("newChatBtn");

// Send with Enter
input.addEventListener("keypress", function(e){
    if(e.key==="Enter"){
        sendMessage();
    }
});

sendBtn.onclick = sendMessage;

// ----------------------------
// Send Message
// ----------------------------

async function sendMessage(){

    const message=input.value.trim();

    if(message==="") return;

    addUserMessage(message);

    input.value="";

    const typing=showTyping();

    try{

        const response=await fetch("/chatbot/",{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                message:message
            })

        });

        const data=await response.json();

        typing.remove();

        addAIMessage(data.answer);

    }

    catch(error){

        typing.remove();

        addAIMessage("⚠ Sorry, I couldn't connect to the AI server. Please try again.");

    }

}

// ----------------------------
// User Bubble
// ----------------------------

function addUserMessage(text){

    chatBox.innerHTML+=`

    <div class="user-message">

        <div class="bubble">

            ${escapeHtml(text)}

        </div>

    </div>

    `;

    scrollBottom();

}

// ----------------------------
// AI Bubble
// ----------------------------

function addAIMessage(text){

    chatBox.innerHTML += `

    <div class="ai-message">

        <div class="icon">🤖</div>

        <div>

            <div class="bubble ai-text">

                ${formatText(text)}

            </div>

            <div class="message-actions">

                <button onclick="copyMessage(this)">
                    📋 Copy
                </button>

                <button onclick="likeMessage(this)">
                    👍
                </button>

                <button onclick="dislikeMessage(this)">
                    👎
                </button>

            </div>

        </div>

    </div>

    `;

    scrollBottom();

}
// ----------------------------
// Typing Animation
// ----------------------------

function showTyping(){

    const div=document.createElement("div");

    div.className="ai-message";

    div.innerHTML=`

        <div class="icon">🤖</div>

        <div class="bubble">

            <span class="typing">

                <span></span>

                <span></span>

                <span></span>

            </span>

        </div>

    `;

    chatBox.appendChild(div);

    scrollBottom();

    return div;

}

// ----------------------------

function scrollBottom(){

    chatBox.scrollTop=chatBox.scrollHeight;

}

// ----------------------------

newChatBtn.onclick=function(){

    chatBox.innerHTML=`

    <div class="ai-message">

        <div class="icon">🤖</div>

        <div class="bubble">

            👋 Hello again!<br><br>

            What would you like to know today?

        </div>

    </div>

    `;

};

// ----------------------------
// Speech Recognition
// ----------------------------

if('webkitSpeechRecognition' in window){

const recognition=new webkitSpeechRecognition();

recognition.lang="en-US";

recognition.continuous=false;

recognition.interimResults=false;

micBtn.onclick=function(){

recognition.start();

};

recognition.onresult=function(event){

input.value=event.results[0][0].transcript;

};

}

// ----------------------------
// Formatting
// ----------------------------

function formatText(text){

return escapeHtml(text)
.replace(/\n/g,"<br>");

}

function escapeHtml(text){

const div=document.createElement("div");

div.innerText=text;

return div.innerHTML;

}
// Animated Counter

function animateCounter(id,start,end,duration){

let current=start;

const increment=(end-start)/(duration/20);

const obj=document.getElementById(id);

const timer=setInterval(()=>{

current+=increment;

if(current>=end){

current=end;

clearInterval(timer);

}

obj.innerText=Math.floor(current);

},20);

}

animateCounter("studentCount",0,5200,2000);
// Chat History

const historyList = document.getElementById("historyList");

newChatBtn.addEventListener("click", () => {

    const item = document.createElement("div");

    item.className = "history-item";

    item.innerHTML = "💬 New Chat";

    historyList.prepend(item);

});
// ----------------------------
// Date
// ----------------------------

const date = new Date();

document.getElementById("currentDate").innerHTML =
date.toDateString();

// ----------------------------
// Dark Mode
// ----------------------------

const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function(){

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeBtn.innerHTML="☀️";

    }else{

        themeBtn.innerHTML="🌙";

    }

};
// ----------------------------
// Quick Questions
// ----------------------------

function quickQuestion(question){

    input.value = question;

    sendMessage();

}
// ----------------------------
// Copy AI Response
// ----------------------------

function copyMessage(button){

    const text = button.parentElement.previousElementSibling.innerText;

    navigator.clipboard.writeText(text);

    button.innerHTML = "✅ Copied";

    setTimeout(() => {
        button.innerHTML = "📋 Copy";
    }, 1500);

}

// ----------------------------
// Like
// ----------------------------

function likeMessage(button){

    button.innerHTML = "💙 Liked";

}

// ----------------------------
// Dislike
// ----------------------------

function dislikeMessage(button){

    button.innerHTML = "👎 Sent";

}
// ----------------------------
// PDF Upload
// ----------------------------

const pdfUpload=document.getElementById("pdfUpload");

pdfUpload.addEventListener("change",()=>{

const file=pdfUpload.files[0];

if(!file) return;

chatBox.innerHTML+=`

<div class="user-message">

<div class="bubble">

📄 Uploaded:
<strong>${file.name}</strong>

</div>

</div>

`;

scrollBottom();

});
