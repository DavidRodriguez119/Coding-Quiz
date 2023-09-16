// Variables & objects
var highScoresLink = document.querySelector(`nav`)
var contentSection = document.getElementById(`content`)
var quiz = [
    {
        question: `this is Q1`, 
        op1: `Option 1`,
        op2: `Option 2`,
        op3: `Option 3`,
        op4: `Option 4`,
        correctAnswer: `Option 3`
    },
    {
        question: `this is Q2`, 
        op1: `Option 1`,
        op2: `Option 2`,
        op3: `Option 3`,
        op4: `Option 4`,
        correctAnswer: `Option 1`
    },
    {
        question: `this is Q2`, 
        op1: `Option 1`,
        op2: `Option 2`,
        op3: `Option 3`,
        op4: `Option 4`,
        correctAnswer: `Option 4`
    }
];

// Load firstpage content and style
function initialPage () {
    // Create elements to add to the initial page 
    var initialH2 = document.createElement(`h2`);
    var instructions = document.createElement(`p`);
    var startBtn = document.createElement(`button`);

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

// Event listener for when the Start button in created
contentSection.addEventListener(`click`, function(event){
    var clickedElement = event.target
    if (clickedElement.tagName === `BUTTON`){
        console.log(`yessss`);
    }
});

// Event listener for the High Scores link
highScoresLink.addEventListener(`click`, function(event){
    console.log(`yesssss`)
});

// Remove initial elements 
// Run a funtion to display the questions

// When the page loads the do the following
initialPage();

