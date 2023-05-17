const questions=[{
    'que':"HTML is considered as ___ language",
    'a':"Programming Langauge",
    'b':"OOP Language",
    'c':"High Level Language",
    'd':"Markup Language",
    'Correct':"d",
   },
   {
    'que':"CSS is an acronym for",
    'a':"Cascading Style Sheet",
    'b':"Costume Style Sheet",
    'c':"Cascading System Style",
    'd':"None of the Above",
    'Correct':"a",
   },
   {
    'que':"Which of following HTML Tag will inserting aline break?",
    'a':"<p>",
    'b':"<line>",
    'c':"<br>",
    'd':"<break >",
    'Correct':"c",
   },
   {
    'que':"Which of the following is not true about JavaScript?",
    'a':"It execute with preliminary compilation",
    'b':"It is a lightweight programming language",
    'c':"It is a scripting language",
    'd':"It can be embedded directly into HTML pages",
    'Correct':"a",
   },
   {
    'que':"Page designed in HTML is called a",
    'a':"Yellow Page",
    'b':"Web Page",
    'c':"Server Page",
    'd':"Front Page",
    'Correct':"b",
   },
   {
    'que':"Which address is include the entire pathname?",
    'a':"Relative",
    'b':"Mixed",
    'c':"Absolute",
    'd':"None of the above",
    'Correct':"c",
   },
   {
    'que':"Using which tag we insert an JavaScript in HTML page?",
    'a':"<JavaScript type==text/javascript=>",
    'b':"<script type==text/javascript=>",
    'c':"<JScript type==text/javascript=>",
    'd':"<HTMLScript type==text/javascript=>",
    'Correct':"b",
   },
   {
    'que':"Basic fundamental block is called as ___",
    'a':"HTML tag",
    'b':"HTML body",
    'c':"HTML Attribute",
    'd':"HTML Element",
    'Correct':"a",
   },
   {
    'que':"Which one attribute is used to send the coordinate of image to the server When the user clicks on the image?",
    'a':"COORD",
    'b':"SMAP",
    'c':"SIMAP",
    'd':"ISMAP",
    'Correct':"d",
   },
   {
    'que':"What language denotes the behavior of a web page?",
    'a':"HTML",
    'b':"CSS",
    'c':"XML",
    'd':"Java Script",
    'Correct':"d",
   },
   
]
let index=0;
let total= questions.length;
let right=0,wrong=0;

const quesbox=document.getElementById("quesbox")
const optionInputs=document.querySelectorAll(".option")

const loadQuestion=()=>{
    if(index===total){
        return endQuiz()
    }
    reset()
const data= questions[index]
quesbox.innerText=`${index+1}) ${data.que}`;
optionInputs[0].nextElementSibling.innerText=data.a;
optionInputs[1].nextElementSibling.innerText=data.b;
optionInputs[2].nextElementSibling.innerText=data.c;
optionInputs[3].nextElementSibling.innerText=data.d;
}

const submitQuiz=()=>{
const data=questions[index];
const ans=getAnswer()
if(ans==data.Correct){
    right++;
}
else{
    wrong++;
}
index++;
loadQuestion();
return;
}
const getAnswer=()=>{
    let answers;
optionInputs.forEach(
    (input)=>{
        if(input.checked){
            answers= input.value;
        }
    }
    )
    return answers;
}
const reset=()=>{
optionInputs.forEach(
    (input)=>{
        input.checked=false
    }
)
}

const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <h3>Thankyou for playing the quiz</h3>
    <h2>${right}/${total} are correct and your total marks are ${right}</h2>`
}

loadQuestion();