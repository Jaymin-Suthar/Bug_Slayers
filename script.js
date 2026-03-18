const uploadBox = document.getElementById("uploadBox");
const fileInput = document.getElementById("pdf_file");
const fileText = document.getElementById("fileText");
const form = document.getElementById("form");
const submitBtn = document.getElementById("submitBtn");
const loader = document.getElementById("loader");
const textArea = document.getElementById("text");
const counter = document.getElementById("counter");

// 1. Character Count
textArea.addEventListener("input", () => {
    counter.innerText = `${textArea.value.length} characters`;
});

// 2. Drag & Drop + Click Upload
uploadBox.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", () => {
    if (fileInput.files.length > 0) {
        fileText.innerHTML = `<strong style="color: #10b981;">✅ Ready:</strong> ${fileInput.files[0].name}`;
        uploadBox.style.borderColor = "#10b981";
    }
});

// 3. Form Submission UX
form.addEventListener("submit", (e) => {
    if (!textArea.value.trim() && fileInput.files.length === 0) {
        e.preventDefault();
        alert("Please provide content to simplify.");
        return;
    }
    loader.style.display = "flex";
});

// 4. Voice Feature (For Rural Accessibility)
function speakResult() {
    const text = document.getElementById("resultText").innerText;
    const utterance = new SpeechSynthesisUtterance(text);
    // Auto-detect language or set to Hindi
    utterance.lang = 'hi-IN'; 
    window.speechSynthesis.speak(utterance);
}

// 5. Copy Feature
function copyResult() {
    const text = document.getElementById("resultText").innerText;
    navigator.clipboard.writeText(text);
    alert("Simplified text copied to clipboard!");
}