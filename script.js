
const form = document.getElementById("generatorForm");
const resultText = document.getElementById("resultText");


const data = {
    poem: {
        "love": "In the silence of night, my heart whispers your name...",
        "sad": "The moon weeps softly as memories fade into the dark...",
        "star": "A lonely star shines, waiting for dawn..."
    },
    joke: {
        "programmer": "Why do programmers prefer dark mode? Because light attracts bugs 😄",
        "computer": "Why did the computer get cold? It forgot to close Windows 😂",
        "java": "Why do Java developers wear glasses? Because they don’t C# 🤓"
    },
    recipe: {
        "pasta": "Simple Pasta: Boil pasta, add olive oil, garlic, and cheese.",
        "omelette": "Veggie Omelette: Eggs, tomatoes, onions, salt, and pepper.",
        "salad": "Quick Salad: Lettuce, cucumber, olive oil, lemon."
    },
    quote: {
        "success": "Success is built one small step at a time.",
        "dream": "Dream big. Start small. Act now.",
        "believe": "Believe in yourself, even when no one else does."
    },
    travel: {
        "paris": "Paris – The city of love and lights.",
        "kyoto": "Kyoto – A peaceful mix of tradition and beauty.",
        "iceland": "Iceland – Land of fire, ice, and adventure."
    },
    baby: {
        "liam": "Liam – Strong-willed warrior",
        "sophia": "Sophia – Wisdom and beauty",
        "noah": "Noah – Peaceful and calm"
    }
};

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const type = document.getElementById("contentType").value;
    const prompt = document.getElementById("userPrompt").value.trim();

    if (!type || !prompt) {
        resultText.innerText = "Please select a content type and enter an instruction.";
        return;
    }

    resultText.innerText = "Generating... ⏳";

    
    setTimeout(() => {
        const output = generateContent(type, prompt);
        typeWriter(resultText, output, 25);
    }, 300);
});


 function generateContent(type, prompt) {
    const lower = prompt.toLowerCase();

    if (!data[type]) {
        return "Unknown content type.";
    }

    for (const key in data[type]) {
        if (lower.includes(key)) {
            return `User Instruction: "${prompt}"\n\nAI Generated Result:\n${data[type][key]}`;
        }
    }

    return `User Instruction: "${prompt}"\n\nAI Generated Result:\nNo matching content found for your instruction.`;
}


function typeWriter(element, text, speed = 30) {
    element.innerText = "";
    let index = 0;

    const interval = setInterval(() => {
        if (index < text.length) {
            element.innerText += text.charAt(index);
            index++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}