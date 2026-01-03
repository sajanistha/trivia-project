const allQuestions = [
    { q: "What color do you get when you mix red and blue?", a: ["Green", "Orange", "Purple"], correct: "Purple" },
    { q: "What TV show is set in the fictional land of Westeros?", a: ["The Witcher", "Game of Thrones", "Vikings"], correct: "Game of Thrones" },
    { q: "A farmer has 15 sheep. All but 9 run away. How many are left?", a: ["15", "6", "9"], correct: "9" },
    { q: "Which food is traditionally used to make guacamole?", a: ["Avocado", "Cucumber", "Zucchini"], correct: "Avocado" },
    { q: "Which country has the Eiffel Tower?", a: ["Italy", "France", "Spain"], correct: "France" },
    { q: "What shape is a stop sign?", a: ["Circle", "Octagon", "Hexagon"], correct: "Octagon" },
    { q: "Which continent is the Sahara Desert in?", a: ["Asia", "Africa", "Australia"], correct: "Africa" },
    { q: "Which ocean is on the west coast of the United States?", a: ["Atlantic", "Indian", "Pacific"], correct: "Pacific" },
    { q: "Which animal is known for hopping?", a: ["Rabbit", "Dog", "Bear"], correct: "Rabbit" },
    { q: "How many months have 28 days?", a: ["1", "12", "Depends on the year"], correct: "12" },
    { q: "Which planet is known as the Red Planet?", a: ["Mars", "Venus", "Saturn"], correct: "Mars" },
    { q: "What is the fastest land animal?", a: ["Cheetah", "Lion", "Gazelle"], correct: "Cheetah" },
    { q: "Who wrote 'Romeo and Juliet'?", a: ["Charles Dickens", "William Shakespeare", "Mark Twain"], correct: "William Shakespeare" },
    { q: "What is the capital city of Japan?", a: ["Seoul", "Beijing", "Tokyo"], correct: "Tokyo" },
    { q: "What gas do plants absorb from the atmosphere?", a: ["Oxygen", "Carbon Dioxide", "Nitrogen"], correct: "Carbon Dioxide" },
    { q: "How many players are on a soccer team (on the field)?", a: ["9", "10", "11"], correct: "11" },
    { q: "Which movie features a character named Jack Sparrow?", a: ["Gladiator", "Inception", "Pirates of the Caribbean"], correct: "Pirates of the Caribbean" },
    { q: "Which ingredient makes bread rise?", a: ["Salt", "Sugar", "Yeast"], correct: "Yeast" },
    { q: "In which year did the Titanic sink?", a: ["1912", "1922", "1905"], correct: "1912" },
    { q: "Which is the smallest country in the world?", a: ["Monaco", "Vatican City", "Malta"], correct: "Vatican City" },
    { q: "Who painted the 'Mona Lisa'?", a: ["Leonardo da Vinci", "Van Gogh", "Picasso"], correct: "Leonardo da Vinci" }
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