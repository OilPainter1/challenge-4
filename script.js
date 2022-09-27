var btn = document.getElementById("button")
var wrong = 0
var correct = 0

var questions = [
    "What type of javascript data type is: true?",
    "What does DOM stand for?",
    "What does API stand for?",
    "What is the symbol for multiplication in javascript?",
    "What is the logical operator for \"not\"?",
    "What is the logical operator for \"and\"?",
    "What is the logical operator for \"or\"?",
    "What is the exression for \"increment\"?"
]
var answers1=["string","array","boolean","number"]
var answers2=["Document Object Model", "Direct Object Manipulation",
    "Data Object Model","Direct Object Model"]
var answers3=["Average Programming Interaction", "Application Programming Interface",
    "Application Programming Interaction", "Average Programming Interface"]
var answers4=["%","*","x","?"]
var answers5=["!","#","^","&"]
var answers6=["%","$$","#","&&"]
var answers7=["//","||","<>","??"]
var answers8=["++","&&","+&","+?"]

var div1 = document.createElement('div')
btn.addEventListener("click",function(){
    event.stopPropagation()
    updateScore()
    var btnC= document.querySelector("#button")
    document.querySelector("#button-div").removeChild(btnC)
    document.querySelector(".questions").appendChild(div1).textContent=questions[0]
    loadAnswers(answers1)
    
})

    document.getElementById("answers").addEventListener("click",function(){
        event.stopImmediatePropagation()
        checkCorrect(event)
        updateScore()
        div1.textContent=questions[1]
        loadAnswers(answers2)
        
        checkCorrect(event)
        updateScore()
        div1.textContent=questions[2]
        loadAnswers(answers3)
        
        
                }
        )
        
        document.getElementById("answers").addEventListener("click",function(){
            checkCorrect(event)
            updateScore()
            console.log("hello")
            div1.textContent=questions[2]
            loadAnswers(answers3)
            console.log("hello1")})

            document.getElementById("answers").addEventListener("click",function(){
                console.log("hello2")
                event.stopImmediatePropagation()
                checkCorrect(event)
                updateScore()
                div1.textContent=questions[3]
                loadAnswers(answers4)
            })
            
    
        
    
   





    




    


       



    
    
function checkCorrect(event){
    var choice=event.composedPath()[0].textContent
    if(choice==answers1[2]){
        correct++
    }
    else if(choice==answers2[0]){
        correct++
    }else if(choice==answers3[1]){
        correct++
    }else if (choice==answers4[1]){
        correct++
    }else if (choice==answers5[0]){
        correct++
    } else if (choice==answers6[3]){
        correct++
    } else if (choice==answers7[1]){
        correct++
    } else if (choice==answers8[0]){
        correct++
    } else {
        wrong++
    }
}




function loadAnswers(answers){
     document.getElementById("answers1").textContent=answers[0]
     document.getElementById("answers2").textContent=answers[1]
     document.getElementById("answers3").textContent=answers[2]
     document.getElementById("answers4").textContent=answers[3]

}

function updateScore(){
    document.getElementById("score").textContent="Correct: " + correct + " Incorrect: " + wrong
}






