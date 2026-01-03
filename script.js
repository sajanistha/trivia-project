const allQuestions = [
    { q: "What color do you get when you mix red and blue?", a: ["Green", "Purple", "Orange"], correct: "Purple" },
    { q: "What TV show is set in the fictional land of Westeros?", a: ["The Witcher", "Game of Thrones", "Vikings"], correct: "Game of Thrones" },
    { q: "A farmer has 15 sheep. All but 9 run away. How many are left?", a: ["6", "9", "15"], correct: "9" },
    { q: "Which food is traditionally used to make guacamole?", a: ["Avocado", "Cucumber", "Zucchini"], correct: "Avocado" },
    { q: "Which country has the Eiffel Tower?", a: ["Italy", "France", "Spain"], correct: "France" },
    { q: "What shape is a stop sign?", a: ["Circle", "Octagon", "Hexagon"], correct: "Octagon" },
    { q: "Which continent is the Sahara Desert in?", a: ["Asia", "Africa", "Australia"], correct: "Africa" },
    { q: "Which ocean is on the west coast of the United States?", a: ["Atlantic", "Indian", "Pacific"], correct: "Pacific" },
    { q: "Which animal is known for hopping?", a: ["Rabbit", "Dog", "Bear"], correct: "Rabbit" },
    { q: "How many months have 28 days?", a: ["1", "12", "Depends on the year"], correct: "12" }
];

let selectedQuestions = []; // This will hold our random 5
let currentIndex = 0;
let score = 0;
let playerName = "";

function startQuiz() {
    playerName = document.getElementById('username').value || "Player";
    
    // 1. Shuffle the questions using a simple sort
    // 2. Take only the first 5 using .slice(0, 5)
    selectedQuestions = allQuestions
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);

    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    // Calculate progress percentage
    const progress = (currentIndex / selectedQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = progress + "%";

    const q = selectedQuestions[currentIndex];
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
    if (answer === selectedQuestions[currentIndex].correct) {
        score++;
        document.getElementById('current-score').innerText = score;
    }
    currentIndex++;
    
    // Check against the length of our SMALLER list (5)
    if (currentIndex < selectedQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
    // It will now say "... out of 5"
    document.getElementById('final-message').innerText = `${playerName}, you scored ${score} out of ${selectedQuestions.length}!`;
}