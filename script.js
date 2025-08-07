// Pickup lines database
const pickupLines = {
    en: [
        "Are you a magician? Because whenever I look at you, everyone else disappears! ✨",
        "Do you have a map? I just got lost in your eyes! 🗺️",
        "Are you WiFi? Because I'm feeling a connection! 📶",
        "Is your name Google? Because you have everything I've been searching for! 🔍",
        "Are you a parking ticket? Because you've got FINE written all over you! 🎫",
        "Do you believe in love at first sight, or should I walk by again? 🚶",
        "Are you a camera? Because every time I look at you, I smile! 📸",
        "If you were a vegetable, you'd be a cute-cumber! 🥒",
        "Are you French? Because Eiffel for you! 🗼",
        "Do you have a Band-Aid? Because I just scraped my knee falling for you! 🩹",
        "Are you a time traveler? Because I see you in my future! ⏰",
        "If beauty were time, you'd be eternity! ⏳",
        "Are you a bank loan? Because you have my interest! 💰",
        "Do you like Star Wars? Because Yoda one for me! 🌟",
        "Are you a 90 degree angle? Because you're looking right! 📐",
        "Are you made of copper and tellurium? Because you're Cu-Te! 🧪",
        "If I were a cat, I'd spend all 9 lives with you! 🐱",
        "Are you a keyboard? Because you're just my type! ⌨️",
        "Do you have a sunburn, or are you always this hot? ☀️",
        "Are you a banana? Because I find you a-peeling! 🍌"
    ],
    ur: [
        "کیا آپ جادوگر ہیں؟ کیونکہ جب بھی میں آپ کو دیکھتا ہوں، سب کچھ غائب ہو جاتا ہے! ✨",
        "کیا آپ کے پاس نقشہ ہے؟ میں ابھی آپ کی آنکھوں میں کھو گیا ہوں! 🗺️",
        "کیا آپ وائی فائی ہیں؟ کیونکہ میں کنکشن محسوس کر رہا ہوں! 📶",
        "کیا آپ کا نام گوگل ہے؟ کیونکہ آپ میں وہ سب کچھ ہے جو میں تلاش کر رہا ہوں! 🔍",
        "کیا آپ پارکنگ ٹکٹ ہیں؟ کیونکہ آپ پر FINE لکھا ہوا ہے! 🎫",
        "کیا آپ پہلی نظر کے عاشق ہیں، یا میں دوبارہ گزر جاؤں؟ 🚶",
        "کیا آپ کیمرہ ہیں؟ کیونکہ جب بھی میں آپ کو دیکھتا ہوں، میں مسکراتا ہوں! 📸",
        "اگر آپ سبزی ہوتے، تو آپ کیوٹ-کمبر ہوتے! 🥒",
        "کیا آپ فرانسیسی ہیں؟ کیونکہ میں آپ پر ایفل ٹاور کی طرح گر گیا ہوں! 🗼",
        "کیا آپ کے پاس بانڈ ایڈ ہے؟ کیونکہ میں آپ پر گر کر زخمی ہو گیا ہوں! 🩹",
        "کیا آپ وقت کے مسافر ہیں؟ کیونکہ میں آپ کو اپنے مستقبل میں دیکھتا ہوں! ⏰",
        "اگر خوبصورتی وقت ہوتی، تو آپ ابدیت ہوتے! ⏳",
        "کیا آپ بینک لون ہیں؟ کیونکہ آپ میں میری دلچسپی ہے! 💰",
        "کیا آپ کو سٹار وارز پسند ہے؟ کیونکہ یوڈا، آپ میری واحد ہیں! 🌟",
        "کیا آپ 90 ڈگری کا زاویہ ہیں؟ کیونکہ آپ بالکل ٹھیک لگ رہے ہیں! 📐",
        "کیا آپ تانبے اور ٹیلوریم سے بنے ہیں؟ کیونکہ آپ Cu-Te ہیں! 🧪",
        "اگر میں بلی ہوتا، تو اپنی 9 زندگیاں آپ کے ساتھ گزارتا! 🐱",
        "کیا آپ کی بورڈ ہیں؟ کیونکہ آپ میری ٹائپ ہیں! ⌨️",
        "کیا آپ کو دھوپ لگی ہے، یا آپ ہمیشہ سے اتنے گرم ہیں؟ ☀️",
        "کیا آپ کیلا ہیں؟ کیونکہ میں آپ کو بہت پسند کرتا ہوں! 🍌"
    ]
};

// Language state
let currentLang = 'en';

// DOM elements
const chatMessages = document.getElementById('chat-messages');
const flirtBtn = document.getElementById('flirt-btn');
const langEnBtn = document.getElementById('lang-en');
const langUrBtn = document.getElementById('lang-ur');

// Language toggle functionality
langEnBtn.addEventListener('click', () => setLanguage('en'));
langUrBtn.addEventListener('click', () => setLanguage('ur'));

function setLanguage(lang) {
    currentLang = lang;
    
    // Update active button
    langEnBtn.classList.toggle('active', lang === 'en');
    langUrBtn.classList.toggle('active', lang === 'ur');
    
    // Update button text visibility
    const btnTextEn = flirtBtn.querySelector('.btn-text');
    const btnTextUr = flirtBtn.querySelector('.btn-text-ur');
    
    if (lang === 'en') {
        btnTextEn.style.display = 'inline';
        btnTextUr.style.display = 'none';
    } else {
        btnTextEn.style.display = 'none';
        btnTextUr.style.display = 'inline';
    }
}

// Flirt button functionality
flirtBtn.addEventListener('click', sendPickupLine);

function sendPickupLine() {
    const lines = pickupLines[currentLang];
    const randomLine = lines[Math.floor(Math.random() * lines.length)];
    
    addMessage(randomLine, 'bot');
    
    // Add some flair
    flirtBtn.style.transform = 'scale(0.9)';
    setTimeout(() => {
        flirtBtn.style.transform = 'scale(1)';
    }, 150);
}

function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `${sender}-message`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    const p = document.createElement('p');
    p.textContent = text;
    
    contentDiv.appendChild(p);
    messageDiv.appendChild(contentDiv);
    
    chatMessages.appendChild(messageDiv);
    
    // Auto-scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Add typing animation
    messageDiv.style.opacity = '0';
    messageDiv.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        messageDiv.style.transition = 'all 0.5s ease';
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateY(0)';
    }, 100);
}

// Add some initial personality
setTimeout(() => {
    addMessage(currentLang === 'en' ? 
        "Go ahead, click that flirt button... I dare you! 😈" : 
        "آگے بڑھیں، فلرٹ بٹن پر کلک کریں... میں چیلنج کرتا ہوں! 😈", 'bot');
}, 2000);

// Easter egg: Double click for extra cringe
let clickCount = 0;
let clickTimer;

flirtBtn.addEventListener('click', () => {
    clickCount++;
    
    if (clickCount === 3) {
        const extraCringe = currentLang === 'en' ? 
            "OKAY OKAY! You're really committed to this cringe fest! Here's a BONUS: Are you a beaver? Because daaaaam! 🦫" :
            "ٹھیک ہے ٹھیک ہے! آپ واقعی اس شرمناک میلے میں شامل ہیں! بونس: کیا آپ بِیور ہیں؟ کیونکہ دaaaaam! 🦫";
        
        setTimeout(() => addMessage(extraCringe, 'bot'), 500);
        clickCount = 0;
    }
    
    clearTimeout(clickTimer);
    clickTimer = setTimeout(() => clickCount = 0, 1000);
});
