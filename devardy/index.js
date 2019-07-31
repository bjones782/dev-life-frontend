document.addEventListener("DOMContentLoaded", setUpBoard)

const allQuestions = "http://localhost:3000/questions/"
const users = "http://localhost:3000/users/"
const categoryDiv = document.querySelectorAll("category")

function setUpBoard(){

    fetch(allQuestions)
    .then(res => res.json())
    .then(questions => renderList(questions))
}

function renderList(questions){
    // console.log(question)
    console.log(questions)
    questions.forEach(createCard)
}

function createCard(question){
    const board = document.querySelector(".board")

    let questionDiv = document.createElement('div')
    questionDiv.innerText = question.amount
    questionDiv.className = "clue"
    questionDiv.setAttribute("data-id", question.id)
    questionDiv.addEventListener('click', handleClicks)
    board.appendChild(questionDiv)

}

function handleClicks(e){
    console.log(e.target)
    let showPage = document.querySelector(".show-page")

    
}