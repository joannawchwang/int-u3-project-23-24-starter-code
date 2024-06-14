// Declare variables below to save the different divs of your story.
let goToLight = document.querySelector(".option-one");
let opening = document.querySelector(".story-opening");
let optScreen1 = document.querySelector(".option-one-screen");
let optScreen2 = document.querySelector(".option-two-screen");
let ignoreLight = document.querySelector(".option-two");
let fight = document.querySelector(".opt-end1");
let climbTree = document.querySelector(".opt-end2");
let cont = document.querySelector(".continue");
let contScreen = document.querySelector(".continue-screen")
let optend1 = document.querySelector(".opt-end1");
let optend2 = document.querySelector(".opt_end2");
let ending1 = document.querySelector(".end1");
let ending2 = document.querySelector(".end2");


// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

cont.addEventListener('click',function(){
    opening.style.display="none";
    contScreen.style.display="block";
    cont.style.display="none";
    goToLight.style.display="block";
    ignoreLight.style.display="block";
});

goToLight.addEventListener('click', function(){
    optScreen1.style.display="block";
    opening.style.display="none";
    goToLight.style.display="none";
    ignoreLight.style.display="none";
    fight.style.display="block";
    climbTree.style.display="block";
    cont.style.display="none";
    contScreen.style.display="none";
});

ignoreLight.addEventListener('click', function(){
    optScreen2.style.display="block";
    optScreen1.style.display="none";
    opening.style.display="none";
    goToLight.style.display="none";
    ignoreLight.style.display="none";
    contScreen.style.display="none";
});

fight.addEventListener('click', function(){
    optScreen1.style.display="none";
    fight.style.display="none";
    climbTree.style.display="none";
    ending1.style.display="block";
    ending2.style.display="none";
});

climbTree.addEventListener('click', function(){
    ending2.style.display="block";
    optScreen1.style.display="none";
    fight.style.display="none";
    climbTree.style.display="none";
});