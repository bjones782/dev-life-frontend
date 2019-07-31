document.addEventListener("DOMContentLoaded", setUpBoard)


const allQuestions = "http://localhost:3000/questions/"
const users = "http://localhost:3000/users/"
const categoryDiv = document.querySelectorAll("category")

function setUpBoard(){

    fetch(allQuestions)
    .then(res => res.json())
    .then(questions => renderList(questions))

    document.addEventListener("submit", handleSubmit)
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
    // questionDiv.setAttribute("data-answer", question.answer)
    questionDiv.addEventListener('click', handleClicks)
    board.appendChild(questionDiv)

}

function handleSubmit(e){
    // let button = document.querySelector('button')
    e.preventDefault()
    console.log("HandleSubmit", e.target)

    // function handleSubmit(e){
    //     e.preventDefault()
    //     if( e.target["comment_input"].value)
        
    //     addComment(e.target["comment_input"].value)
    //     console.log("Right Here")
    // }
    
    // button.dataset.id = question.id
   
    // let qId = e.target.dataset.id
    // fetch(`http://localhost:3000/questions/`)
    // .then(res => res.json())
    // .then(questions => console.log(questions))

}

function checkAnswer(question){
//    console.log("check again", question)
    let userAnswer = document.getElementById("user-answer").value
    // userAnswer.setAttribute("data-id", question.id)
    if(userAnswer.downcase === question.answer){
        alert(YAY)
        
    }
} 

function handleClicks(e){
    // console.log("ID", e.target.dataset.id)
    
    let id = e.target.dataset.id
    fetch(`http://localhost:3000/questions/${id}`)
    .then(resp => resp.json())
    .then(renderShowPage)
    // checkAnswer(question)
}

function renderShowPage(question){
    console.log("I am getting here", question.id)
    let usersInput = document.getElementsByClassName("input-form")
    // let button = document.getElementById('sub')
    // usersInput.appendChild(button)
    // button.dataset.id = question.id
    // button.setAttribute('data-id', question.id)
    
    // inputForm.setAttribute("data-answer", question.answer)
    let showPage = document.querySelector(".show-page")
    
    let p = document.createElement('p')
    p.innerText = question.clue
    showPage.appendChild(p)

    // let inputForm = document.getElementsByClassName("input-form")
    // inputForm.type = "input"
    // inputForm.setAttribute('id', 'answer')
    // inputForm.setAttribute('value', `${question.answer}`)


    // showPage.appendChild(inputForm)
  
}