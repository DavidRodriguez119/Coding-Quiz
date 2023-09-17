// Variables & objects
var highScoresLink = document.querySelector(`nav`);
var contentSection = document.getElementById(`content`);
var initialTime = 90;
var timerEL = document.querySelector(`#timer`);
var quiz = [
    {
        question: `1. In which part of the HTML document should the JS <script> be added?`, 
        op1: `A. Inside the <head>`,
        op2: `B. After the </html>`,
        op3: `C. At the end of the <body> section`,
        op4: `D. A <link> should be used to connect the JS file`,
        correctAnswer: `C. At the end of the <body> section`
    },
    {
        question: `2. Which JavaScript command should we use to repeat a fragment of the code given given ammount of times?`, 
        op1: `A. For`,
        op2: `B. While`,
        op3: `C. If`,
        op4: `D. None of the above`,
        correctAnswer: `A. For`
    },
    {
        question: `3. Which of the following is not a primitive data type in JavaScript?`, 
        op1: `A. String`,
        op2: `B. Undefined`,
        op3: `C. Boolean`,
        op4: `D. Empty`,
        correctAnswer: `D. Empty`
    }
];

// Load firstpage content and style
function initialPage () {
    // Create elements to add to the initial page 
    var initialH2 = document.createElement(`h2`);
    var instructions = document.createElement(`p`);
    var startBtn = document.createElement(`button`);

    // Make sure the timer starts at 90s
    initialTime = 90;

    // Add content and style to the initial elements
    initialH2.textContent = `Instructions`    
    instructions.textContent = `Ready to start? You will face three different multiple choice questions
    about JavaScript. Your task is to solve the quiz as fast as you can. Every incorrect
    answer will deduct 15 seconds of your time. Good luck!`;
    startBtn.textContent = `START`
    startBtn.classList.add(`startBtn`)

    // Append the initial elements to the page
    contentSection.appendChild(initialH2);
    contentSection.appendChild(instructions);
    contentSection.appendChild(startBtn);
};

// Display the multiple choice quiz
function displayQuiz (index) {

    // What happens when index is greater than the length of the quiz
    if (index >= quiz.length) {
        contentSection.innerHTML = `<h2>QUIZ COMPLETED</h2>`;
        return;
    }

    // Create elements of the quiz page
    var quizH2 = document.createElement(`h2`);
    var quizUl = document.createElement(`ul`);
    var quizLi1 = document.createElement(`li`);
    var quizLi2 = document.createElement(`li`);
    var quizLi3 = document.createElement(`li`);
    var quizLi4 = document.createElement(`li`);

    // Append the quiz page elements
    contentSection.appendChild(quizH2);
    contentSection.appendChild(quizUl);
    quizUl.appendChild(quizLi1);
    quizUl.appendChild(quizLi2);
    quizUl.appendChild(quizLi3);
    quizUl.appendChild(quizLi4);

    // Run quiz using the quiz array index for each question   
    quizH2.textContent = quiz[index].question;
    quizLi1.textContent = quiz[index].op1;
    quizLi2.textContent = quiz[index].op2;
    quizLi3.textContent = quiz[index].op3;
    quizLi4.textContent = quiz[index].op4;

    quizUl.addEventListener(`click`, function selectAnswer(event){     
        var clickedElement = event.target;

        if (clickedElement.tagName === `LI`){
            if (clickedElement.textContent === quiz[index].correctAnswer) {
                clickedElement.textContent = `CORRECT`;
                clickedElement.style.backgroundColor = `green`;
            } else {
                clickedElement.textContent = `INCORRECT :(`;
                clickedElement.style.backgroundColor = `red`;
            }

            quizUl.removeEventListener(`click`, selectAnswer);

            setTimeout(function() {
                contentSection.innerHTML = ``;
                displayQuiz(index + 1);
            }, 1000);
        };
    });
};

// Game Over screen
function gameOver (){
    // Empty current page content
    contentSection.innerHTML = ``;

    // Create GameOver page elements
    var gameOverH2 = document.createElement(`h2`);
    var resetButton = document.createElement(`button`)

    // Add content to the elements
    gameOverH2.textContent = `GAME OVER`
    resetButton.textContent = `RESTART`

    // Append Elements to Game Over Page
    contentSection.appendChild(gameOverH2);
    contentSection.appendChild(resetButton);
}

// start the timer when the START button is pressed
function timer(){
    var timeInterval = setInterval(function () {
        timerEL.textContent = initialTime
        initialTime--;

        if (initialTime < 0) {
            clearInterval(timeInterval);
            gameOver();
        };
    }, 1000)
};

// Event listener for when the Start or reset buttons are pressed
contentSection.addEventListener(`click`, function(event){
    var clickedElement = event.target
    if (clickedElement.tagName === `BUTTON`){
        if (clickedElement.textContent === `START`){
            // start timer
            timer();
            // remove the current html elements on the content section
            contentSection.innerHTML = ``;
            // Call the function that starts the quiz
            displayQuiz(0);
        } else {
            contentSection.innerHTML = ``;
            initialPage();
        };
    }
});

// Event listener for the High Scores link
highScoresLink.addEventListener(`click`, function(event){
    if (event.target.textContent === `High Scores`) {
        contentSection.innerHTML = ``;
        highScoresLink.textContent = `Home`;
        console.log(1);
    } else if (event.target.textContent === `Home`){
        initialPage(); 
        highScoresLink.textContent = `High Scores`;
    }
});

// When the page loads the do the following
initialPage();

