var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        makeSound(i); 
      });
}

function makeSound(i){
    // alert("Button "+ i + " got clicked!");
    switch(i){
        case 0: new Audio("./sounds/tom-1.mp3").play();
        break;
        case 1: new Audio("./sounds/tom-2.mp3").play();
        break;
        case 2: new Audio("./sounds/tom-3.mp3").play();
        break;
        case 3: new Audio("./sounds/tom-4.mp3").play();
        break;
        case 4: new Audio("./sounds/snare.mp3").play();
        break;
        case 5: new Audio("./sounds/crash.mp3").play();
        break;
        case 6: new Audio("./sounds/kick-bass.mp3").play();
    }

}