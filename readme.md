# 🧠 Simple Trivia Game

A lightweight, session-based trivia application built with vanilla web technologies. Users enter their name, answer 5 randomly selected questions from a larger pool, and receive a score—all without the need for logins or databases.

## 🚀 Live Demo
You can play the game here: **https://randomtrivia1.netlify.app/**

## ✨ Features
* **Session-based:** Scores and names are kept during the session; refreshing starts a fresh game.
* **Randomized Experience:** The game pulls 5 random questions from a hardcoded set of 11+ questions using a shuffle algorithm.
* **Progress Tracking:** A dynamic progress bar updates as the user moves through the quiz.
* **Responsive Design:** Styled with a professional layout, custom background image, and interactive hover effects.
* **No Backend Required:** Runs entirely in the browser using JavaScript's `Math.random()` and DOM manipulation.

## 🛠️ Tech Stack
* **HTML5:** Structure and semantic layout.
* **CSS3:** Custom styling, including absolute positioning for credits and flexbox for centering.
* **JavaScript (ES6):** Game logic, array shuffling (`.sort()`), and dynamic UI updates.
