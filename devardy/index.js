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
    questionDiv.innerText = "$" + question.amount
    questionDiv.className = "clue"
    questionDiv.setAttribute("data-id", question.id)
    questionDiv.style.height = "80px"
    questionDiv.style.width = "100%"
    // questionDiv.setAttribute("data-answer", question.answer)
    questionDiv.addEventListener('click', handleClicks)
    board.appendChild(questionDiv)
    
}

function handleSubmit(e){
    
    e.preventDefault()

    // console.log(ptag.dataset.answer)
    // console.log(e.target["user-answer"].value)


    fetch(users)
    .then(resp => resp.json())
    .then(users => checkAnswer(users))  
}      
    // if(ptag.dataset.answer === e.target["user-answer"].value){
    //     alert("You got it right!")
    //     question.amount += users.user_points 
    //     console.log("User answer", user.user_points)
    // } else {
    //     alert("Sorry, wrong answer")
    // }

    
    // if( e.target["user-answer"].value){
    //     checkAnswer()
    //     getQuestionAnswer()
       
    

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

    function createLoginForm(user){
        let div1 = document.querySelector("login-form")
        let loginForm = document.getElementById("user-login")
        div1.appendChild(loginForm)

    }



function checkAnswer(users){
    console.log(users)
    let ptag = document.querySelector("#question")
    let userAnswer = document.getElementById("user-answer").value
    


    if(ptag.dataset.answer === user.answer){
        alert("You got it right!")
        question.amount += users.user_points 
        console.log("User answer", user.user_points)
    } else {
        alert("Sorry, wrong answer")
    }

}

function getQuestionAnswer(){
    
//    console.log("check again", question)
    fetch(`http://localhost:3000/questions/`)
    .then(res => res.json())
    .then(questions => questions.map(question => checkAnswer(question)))
    // let userAnswer = document.getElementById("user-answer").value
    // userAnswer.setAttribute("data-id", question.id)
    // if(userAnswer.downcase === question.answer.value){
    //     alert(YAY)
        
    // }
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
    p.id = "question"
    p.setAttribute("data-id", question.id)
    p.setAttribute("data-answer", question.answer)
    p.setAttribute("data-amount", question.amount)
    showPage.appendChild(p)

    // let inputForm = document.getElementsByClassName("input-form")
    // inputForm.type = "input"
    // inputForm.setAttribute('id', 'answer')
    // inputForm.setAttribute('value', `${question.answer}`)


    // showPage.appendChild(inputForm)
  
}