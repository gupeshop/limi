const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// เพิ่มข้อความลงในแชต
function addMessage(text, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.classList.add(isUser ? 'user-message' : 'ai-message');
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);

    // เลื่อนลงอัตโนมัติ
    chatBox.scrollTop = chatBox.scrollHeight;
}

// การตอบกลับของ LIMI (เวอร์ชันพื้นฐาน คุยเล่นได้)
function limiResponse(userText) {
    setTimeout(() => {
        const responses = [
            "ฉันฟังอยู่นะ 😊 เล่าต่อได้เลย",
            "อืม… ฉันเข้าใจความรู้สึกนั้นนะ",
            "ไม่ต้องรีบ พิมพ์มาได้เรื่อย ๆ ฉันอยู่ตรงนี้",
            "ถ้าวันนี้มันหนักเกินไป ระบายกับฉันได้เลย",
            "ฉันอาจไม่เก่งเรื่องความรู้ แต่ฉันตั้งใจฟังเสมอ 💚"
        ];

        const randomReply = responses[Math.floor(Math.random() * responses.length)];
        addMessage(randomReply, false);
    }, 800);
}

// กดปุ่มส่ง
sendBtn.addEventListener('click', () => {
    const text = userInput.value.trim();
    if (text !== "") {
        addMessage(text, true);
        userInput.value = "";
        limiResponse(text);
    }
});

// กด Enter เพื่อส่ง (Shift+Enter ขึ้นบรรทัดใหม่)
userInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendBtn.click();
    }
});
