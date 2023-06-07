const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex



startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
function startGame(){
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()  
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
            
        }
        button.addEventListener('click', selectAnswer) 
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
       nextButton.classList.add('hide')
       while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
       }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }

    nextButton.classList.remove('hide')
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        
    } else {
        element.classList.add('wrong')
        
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//Array for my questions!!

const questions = [
    {
    question: "what does css stand for?",
    answers: [
            {text: 'cascading software style', correct: false },
            {text: 'cascading style sheet', correct: false },
            {text: 'cascading style sheet', correct: true },
            {text: 'cascading simple style', correct: false },
        ]
    },
    {
        question: "what programming language is Treasure learning?",
        answers: [
                {text: 'Javascript', correct: true },
                {text: 'Python', correct: false },
                {text: 'C++', correct: false },
                {text: 'Java', correct: false },
            ] 
    },

    {
        question: "What Developer is Treasure?",
        answers: [
                {text: 'back-end', correct: false },
                {text: 'front-end', correct: true },
                {text: 'full-stack', correct: false },
                {text: 'cyber-security', correct: false },
            ] 
    },

    {
        question: "what language does Treasure wish to learn next?",
        answers: [
                {text: 'c#', correct: false },
                {text: 'python', correct: true },
                {text: 'c++', correct: false },
                {text: 'java', correct: false },
            ] 
    },

    {
        question: "what genre does Treasure do?",
        answers: [
                {text: 'rock', correct: false },
                {text: 'afro', correct: false },
                {text: 'RnB', correct: false },
                {text: 'pop', correct: true },
            ] 
    },
];