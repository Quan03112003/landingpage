document.getElementById("chat-toggle").addEventListener("click", function () {
    const chatContainer = document.getElementById("chat-container");
    chatContainer.style.display = chatContainer.style.display === "none" ? "block" : "none";
});

document.getElementById("chat-header").addEventListener("click", function () {
    document.getElementById("chat-container").style.display = "none";
});

document.getElementById("send").addEventListener("click", function () {
    sendMessage();
});

document.getElementById("message").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    const messageInput = document.getElementById("message");
    const chatBody = document.getElementById("chat-body");
    const userMessage = messageInput.value.trim();

    if (userMessage !== "") {
        appendMessage("Bạn", userMessage, "user");

        setTimeout(() => {
            const botReply = getBotReply(userMessage);
            appendMessage("Chatbot", botReply, "bot");
        }, 1000);

        messageInput.value = "";
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

function appendMessage(sender, message, type) {
    const chatBody = document.getElementById("chat-body");
    const messageDiv = document.createElement("div");

    messageDiv.textContent = `${sender}: ${message}`;
    messageDiv.style.padding = "8px";
    messageDiv.style.margin = "5px 0";
    messageDiv.style.borderRadius = "5px";
    messageDiv.style.width = "fit-content";

    if (type === "user") {
        messageDiv.style.background = "#007bff";
        messageDiv.style.color = "white";
        messageDiv.style.textAlign = "right";
        messageDiv.style.marginLeft = "auto";
    } else {
        messageDiv.style.background = "#eee";
        messageDiv.style.color = "black";
    }

    chatBody.appendChild(messageDiv);
}

function getBotReply(userMessage) {
    userMessage = userMessage.toLowerCase();

    const responses = {
        chào: "Xin chào! Tôi có thể giúp gì cho bạn?",
        "bạn tên gì": "Tôi là chatbot hỗ trợ của trang web.",
        "bạn làm được gì": "Tôi có thể trả lời các câu hỏi đơn giản của bạn.",
        "cảm ơn": "Không có gì! Rất vui được giúp bạn.",
        "tạm biệt": "Chúc bạn một ngày tốt lành! Hẹn gặp lại.",
    };

    for (let key in responses) {
        if (userMessage.includes(key)) {
            return responses[key];
        }
    }

    return "Xin lỗi, tôi chưa hiểu câu hỏi của bạn.";
}
