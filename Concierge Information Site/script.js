let join = document.querySelector(".more-que");
let mailing = document.querySelector(".more");
let button = document.querySelector(".pop");
let quizbox = document.querySelector(".quiz-box");
let startButton=document.querySelector(".start-btn");
let q1=document.querySelector(".qn1");
let q2=document.querySelector(".qn2");
let q3=document.querySelector(".qn3");
let q4=document.querySelector(".qn4");
let q5=document.querySelector(".qn5");
let nxt=document.querySelector("#next-button");
let ext = document.querySelector("#exit");
let questionsD=document.querySelectorAll(".qn2, .qn3 ,.qn4 ,.qn5");
let moreQuest=document.querySelector(".question-section");
let inquiries=document.querySelector(".more-que");
let footer=document.querySelector(".footer-container");
let faq =document.querySelector("#faq-body");
let check = document.querySelector("#next");

// Display popUp to subscribe to mailing list
function showPopup(){
    mailing.style.display="flex";
}


//Loads the quiz box onto the screen
function loadQuiz(){
    startButton.classList.add("rotate-button");
    setTimeout(removeButton,3000);
    // Add the question to the quiz box using addQ() function from questions script
    setTimeout(addQuiz,3500);

}

// Remove button after button is click
function removeButton(){
    startButton.style.display="none";
}

//Makes the quiz grid visible
function addQuiz(){
    quizbox.style.display="inline-grid";
    displayQ1();
}

//Event Listener when startButton Is Clicked
startButton.addEventListener("click",loadQuiz);

// Array that contains the containers for different questions
let arr=[q1,q2,q3,q4,q5];
// If start button is clicked,display only question 1
function displayQ1(){

    for(i=1;i<arr.length;i++){
        arr[i].style.display="none";
        nxt.addEventListener("click",proceedNext);
    }

}

//next button iteration count
var count =0;

//Score keeper
var score=0;



//Check for answer and move to the next question
function proceedNext(){
    count++;
    switch(count){
        case 1:
            check.style.display="inline"; ///Display the check button since it was removed previously
            arr[0].style.display="none"; //make the previous element disappeat
            arr[1].style.display="inline-block"; //make the current element visible
            check.addEventListener("click",radioCheck); /// verify answer if user clicks check
            break;
        case 2:
            check.style.display="inline";
            arr[1].style.display="none";
            arr[2].style.display="inline-block";
            check.addEventListener("click",slideCheck);
            break;
        case 3:
            check.style.display="inline"; ///Display the check button since it was removed previously
            arr[2].style.display="none";
            arr[3].style.display="inline-block";
            check.addEventListener("click",textCheck);
            break;
        case 4:
            check.style.display="inline"; ///Display the check button since it was removed previously
            arr[3].style.display="none";
            arr[4].style.display="inline-block";
            ext.style.display="inline-block";
            nxt.style.display="none";
            check.addEventListener("click",dropdownCheck);
            break;

    }
}

//Exit quiz
ext.addEventListener("click",exitQuiz)


//Words to display once quiz is done
function lastWords(){
    alert("THANK YOU FOR ANSWERING THE QUIZ")
    quizbox.innerHTML = "Your Score is" + "  " + score + "  " + "out of 5";
}
//Exit quiz
function exitQuiz(){
    lastWords();
    moreQuest.style.display="inline-block";
}

//Show text to ask more questions
function showInquiries(){
    inquiries.style.display="flex";
    footer.style.marginTop="5%";

}

moreQuest.addEventListener("click",showInquiries)

///Getting value of radio button or checkbox as an HTMLCollection
var inputElements = document.getElementsByClassName('check');
var radioButton = document.getElementsByClassName('radio');


//Verify is correct checkbox is checked
function whoChecked(){
    if(inputElements[0].checked === true){
        q1.innerHTML = "<h3>Correct!!Kariba is the most visited site</h3>"; //TText to display
        q1.style.backgroundColor="green"; //Change background to green
        score++;
        check.style.display="none"; ///Stop displaying the check button

    }else{
        q1.innerHTML = "<h3>Wrong!!Kariba is the most visited site</h3>";
        q1.style.backgroundColor="red";//Change background to green
        check.style.display="none"; ///Stop displaying the check button
    }
    // for(var i=0; inputElements[i]; ++i){
    //     var checkedValue = null;
    //     // console.log(inputElements[i].value);
    //     // if(inputElements[i].value==Kariba)
    //     // if(inputElements[i].value === "Kariba"){
    //     //     alert("Watch Out")
    //     // }
    //     // console.log(inputElements[i].checked.value);
    //
    //     // if(inputElements[1].checked))
    // }
}
if(count == 0){
    check.addEventListener("click",whoChecked);
}

//Verify is correct radio is selected
function radioCheck(){
    console.log(radioButton[2].checked);
    if(radioButton[2].checked === true){
        q2.innerHTML = "<h3>Correct!!Our services are negotiable and you are guranteed a package that fits your financial constraints</h3>";
        q2.style.backgroundColor="green";
        score++;
         check.style.display="none"; //Stop displaying the check button
    }else{
        q2.innerHTML = "<h3>Incorrect!!Our services are negotiable and you are guranteed a package that fits your financial constraints</h3>";
        q2.style.backgroundColor="red";
        check.style.display="none";
    }
    // for(var i=0; inputElements[i]; ++i){
    //     var checkedValue = null;
    //     // console.log(inputElements[i].value);
    //     // if(inputElements[i].value==Kariba)
    //     // if(inputElements[i].value === "Kariba"){
    //     //     alert("Watch Out")
    //     // }
    //     // console.log(inputElements[i].checked.value);
    //
    //     // if(inputElements[1].checked))
    // }

}

//Verify the correct range of slide
function slideCheck(){
    let slider=document.querySelector("#myRange");
    if(slider.value < 25){
        q3.innerHTML = "<h3>Correct!!It takes a maximum of 24 hours to get a concierge</h3>";
        q3.style.backgroundColor="green"; //Change background to green
        check.style.display="none"; //Stop displaying the check button
        score++

    }else{
        q3.innerHTML = "<h3>Incorrect!!It takes a maximum of 24 hours to get a concierge</h3>"; //display answer
        q3.style.backgroundColor="red"; //Change background to red
        check.style.display="none"; //Stop displaying the check button
    }
}

//Verify if the correct text is entered
function textCheck(){
    let textAns=document.querySelector("#text-input");
    if(textAns.value==="Paypal"){
        q4.innerHTML = "<h3>Correct!!We use paypal to allow you to pay at your convinience without extra charges</h3>";
        q4.style.backgroundColor="green"; //Change Background to green
        check.style.display="none"; //Stop displaying the check button
        score++ //Increase score

    }else{
        q4.innerHTML = "<h3>Incorrect!!We use paypal to allow you to pay at your convinience without extra charges</h3>";
        q4.style.backgroundColor="red"; //Change Background to red
        check.style.display="none"; //Stop displaying the check button
    }
}

//Verify if the correct option is selected
function dropdownCheck(){
    let values=document.querySelector("#cars");
    console.log(values.value);
    if(values.value==="No,we can only book what we can"){
        q5.innerHTML = "<h3>Correct!!We use Paypal to allow you to pay at your convinience withou extra charges</h3>";
        q5.style.backgroundColor="green";
        check.style.display="none"; //Stop displaying the check button
        score++;

    }else{
        q5.innerHTML = "<h3>Incorrect!!We cannot gurantee you a premium but booking with us means you get high priority in getting a premium seat</h3>";
        q5.style.backgroundColor="red";
        check.style.display="none"; //Stop displaying the check button
    }
}

