const Questions = [
    {
      quest: "What is the capital of France?",
      
        a: "Paris",
        b: "London",
        c: "Rome",
        d: "Madrid",
      correctAnswer: "ans1"
    },
    {
      quest: "Which planet is known as the Red Planet?",
    
      a: "Jupiter",
      b: "Venus",
      c: "Mercury",
      d: "Mars",
      correctAnswer: "ans4"
    },
    {
      quest: "Who painted the Mona Lisa?",
   
      a: "Vincent van Gogh",
      b: "Leonardo da Vinci",
        c: "Pablo Picasso",
        d: "Claude Monet",
      correctAnswer: "ans2"
    },
    {
      quest: "What is the tallest mountain in the world?",
   
        a: "Mount Everest",
        b: "Mount Kilimanjaro",
        c: "K2",
        d: "Matterhorn",
      correctAnswer: "ans1"
    },
  ];

const  question=document.getElementById("Question")
const option1 =document.getElementById("option1")
const option2=document.getElementById("option2")
const option3=document.getElementById("option3")
const option4=document.getElementById("option4")
const submit=document.getElementById("submit")
const answers=document.querySelectorAll(".answer")
const finalScore=document.getElementById("finalScore")
const playAgain=document.getElementById("playAgain")
console.log(answers)

let questionCount=0
let score=0
 window.addEventListener("DOMContentLoaded",()=>{
    question.innerHTML=Questions[0].quest
    option1.innerHTML=Questions[0].a
    option2.innerHTML=Questions[0].b
    option3.innerHTML=Questions[0].c
    option4.innerHTML=Questions[0].d

 })

 const loadQuestion=()=>{
    questionCount=questionCount+1
   let  questOnScreen=Questions[questionCount]
    question.innerHTML=questOnScreen.quest
    option1.innerHTML=questOnScreen.a
    option2.innerHTML=questOnScreen.b
    option3.innerHTML=questOnScreen.c
    option4.innerHTML=questOnScreen.d
    answers.forEach(function(radioButton) {
      radioButton.checked = false;
    });
 }

const checkAnswer=()=>{
    let elemID
answers.forEach((elem)=>{
  
    if(elem.checked){
        elemID= elem.id
    }
})
return elemID
}


 submit.addEventListener("click",()=>{
 let ans=checkAnswer()
 
 if(ans===Questions[questionCount].correctAnswer)
 {
score+=1
}
if(questionCount<Questions.length-1){
  
loadQuestion()
}
else{
    console.log(score)
    submit.style.display='none'
    finalScore.style.display='block'
    playAgain.style.display='block'
    finalScore.innerHTML= "Score :"+ score
    playAgain.addEventListener("click",()=>location.reload())
}


 })
  
  