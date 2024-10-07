import { questions } from "./questions.js"

const quizcontainer = document.querySelector(".quiz_container")
const buttons = document.querySelector("#btn")
const startbutton = document.querySelector("#start")
const timerDiv=document.querySelector("#timer")
const questionDiv=document.querySelector("#ques")
const optionDiv=document.querySelector("#options")
let count = 0
let flag=0;
let questionNumbers=0;
let timer=5;
let interval;
let selectedOption;
let selectedAnswer;

let userAns=[];
const quizAllreadyDisplay=[];
const correctans=[];

startbutton.addEventListener("click",showQuestion);

function showQuestion(){
    startbutton.style.display="none"
    quizcontainer.style.display="block"

    displayQuiz()
    timerDiv.innerHTML=timer

    interval=setInterval(() => {
         if(timer===0){
            if(questionNumbers===questions.length){
                clearInterval(interval)
                timerDiv.innerHTML=""
                questionDiv.innerHTML=""
                optionDiv.innerHTML=""
                timerDiv.style.display='none'

                questionDiv.innerHTML=calculatScore()

            }
            else{
                displayQuiz() 
             timer=5
            timerDiv.innerHTML=timer
            if(flag===0){
                userAns.push("null")
            }
            else flag=0;
            
            }
         }
 
         else{

            timerDiv.innerHTML=--timer

         }
    }, 1000);

}

function displayQuiz(){
    
    let randomIndex =Randomquestion()

    questionDiv.innerHTML=questions[randomIndex].q

    correctans.push(questions[randomIndex].a)

    optionDisplay(questions[randomIndex].opt)
    questionNumbers++  

    
}


function optionDisplay(optionArr){
   optionDiv.innerHTML=""

    optionArr.forEach(options => {
        let para=document.createElement("p")
        para.innerHTML=options
        para.addEventListener("click",storeuserAns)
        optionDiv.append(para)


    });
     

}

function storeuserAns(e){
//    let userAnswer=e.target.innerHTML
   selectedOption=e.target
   selectedAnswer=selectedOption.innerHTML

   userAns.push(selectedAnswer)
   optionColorUpdate()
   flag=1 

}


function calculatScore(){
for(let i=0;i<questions.length;i++){
    if(userAns[i]===correctans[i]){
        count++;
    }
}
return `You Answered ${count} Out Of 4 Question`;
}

function optionColorUpdate(){
   if(selectedAnswer===correctans[correctans.length-1]){
    selectedOption.style.backgroundColor="green"
    selectedOption.style.color="#fff"
   }
   else{
    selectedOption.style.backgroundColor="red"
    selectedOption.style.color="#fff"

    
   }
}
// console.log(calculatScore());


function Randomquestion(){
    const RandomValue = Math.floor(Math.random()*questions.length)
    if(quizAllreadyDisplay.includes(RandomValue)){
        return Randomquestion()
    }
    else{
        quizAllreadyDisplay.push(RandomValue)
        return RandomValue
    }

}





































































 

// startbutton.addEventListener("click", startquiz);

// function startquiz() {
//     quizcontainer.style.display = "block"
//     startbutton.style.display = "none"
//     creatQuestion()
//     timerdiv.innerHTML=timer
//     // let timerset = setInterval(() => {
//     //     if (count > 0) {
//     //         count--;
//     //     }
//     //     else {
//     //         creatQuestion()
//     //         count = 5
//     //     }
//     //     timer.innerHTML = count
//     // }, 1000);

// }


// function creatQuestion() {
//     // quizcontainer.innerHTML = "" 
   
//     const changequiz = questions[Randomquestion()]
//     let question = document.createElement("h4")
//     question.innerHTML = changequiz.q
    
//     quizcontainer.append( question,)
    
//     const options = changequiz.opt
    
    

// }

// function Randomquestion() {
//     randomValue= Math.floor(Math.random() * questions.length)

// }


