const questions = [
    { q: "What is the largest planet in our solar system?", a: ["Jupiter", "Mars", "Earth"], correct: "Jupiter" },
    { q: "Who painted the Mona Lisa?", a: ["Van Gogh", "Da Vinci", "Picasso"], correct: "Da Vinci" },
    { q: "What is the chemical symbol for Gold?", a: ["Ag", "Au", "Fe"], correct: "Au" },
    { q: "Which country is famous for the Taj Mahal?", a: ["India", "Egypt", "China"], correct: "India" },
    { q: "What is the smallest prime number?", a: ["1", "2", "3"], correct: "2" },
    { q: "Which language is used to style web pages?", a: ["HTML", "CSS", "Python"], correct: "CSS" },
    { q: "What is the hardest natural substance on Earth?", a: ["Gold", "Iron", "Diamond"], correct: "Diamond" },
    { q: "Which is the largest ocean on Earth?", a: ["Atlantic", "Indian", "Pacific"], correct: "Pacific" },
    { q: "Which country is the origin of the Margherita Pizza?", a: ["Italy", "France", "Greece"], correct: "Italy" },
    { q: "How many strings does a standard guitar have?", a: ["4", "6", "12"], correct: "6" }
];

let currentIndex = 0;
let score = 0;
let playerName = "";

function startQuiz() {
    playerName = document.getElementById('username').value || "Player";
    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const q = questions[currentIndex];
    document.getElementById('question-text').innerText = q.q;
    const btnContainer = document.getElementById('answer-buttons');
    btnContainer.innerHTML = "";
    q.a.forEach(answer => {
        const btn = document.createElement('button');
        btn.innerText = answer;
        btn.onclick = () => checkAnswer(answer);
        btnContainer.appendChild(btn);
    });
}

function checkAnswer(answer) {
    if (answer === questions[currentIndex].correct) {
        score++;
        document.getElementById('current-score').innerText = score;
    }
    currentIndex++;
    if (currentIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    document.getElementById('final-message').innerText = `${playerName}, you scored ${score} out of ${questions.length}!`;
}