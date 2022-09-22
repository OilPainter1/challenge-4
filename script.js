var btn = document.getElementById("button")

var questions = [
    "What type of javascript data type is: \"true\"?",
    "What does DOM stand for?",
    "What does API stand for?",
    "What is the symbol for multiplication in javascript?",
    "What is the logical operator for \"not\"?",
    "What is the logical operator for \"and\"?",
    "What is the logical operator for \"or\"?",
    "What is the exression for \"increment\"?"
]



btn.addEventListener("click",function(){
    var btnC= document.querySelector("#button")
    document.querySelector("#button-div").removeChild(btnC)
    var div1 = document.createElement('div')
    document.querySelector(".questions").appendChild(div1).textContent=questions[0]
    

})







