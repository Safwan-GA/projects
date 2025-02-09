// Generate a random integer between min and max (inclusive)
function getRandomInt() {
    let randomArray = new Uint32Array(1);
    window.crypto.getRandomValues(randomArray); // More unpredictable randomness
    let index = randomArray[0] % 3;
    return index;
}
function incrementTheValueOfTheCount(element){
    let arr=element.innerText.split(":");
    let number = parseInt(arr[1]); // Extracts 0
    number += 1; // Increment the count
    element.innerText = `${arr[0]} : ${number}`;
}

function playGame(choice) {
    const hand = document.getElementById('hand');
    const options = ['✊', '✋', '✌'];
    const optionsinChar=['rock','paper','scissors']
    
    let index = 0;
    let timeLeft = 5;
    let indexofHandGesture=getRandomInt()

    var totalCountOfAttempt=(document.getElementsByClassName('totalCountOfAttemptspan'))[0];
    let countdownDisplay = document.getElementById('countdownTimer');
    let countOfWin=(document.getElementsByName('victoryCount'))[0];
    let ResultOfTheAtttempt= document.querySelector('[title="ResultOfTheAtttempt"]');
    let buttons = document.querySelectorAll("button");
    
    if (countOfWin) {
        console.log(countOfWin.innerText); // ✅ Will print: "Number of times you won : 0"
    } else {
        console.error("Element not found!");
    }

    buttons.forEach(btn => {
        btn.disabled = true;
        btn.setAttribute("title", "Wait till the previous attempt finishes");
    });
    
    countdownDisplay.innerText = `Time Left: ${timeLeft}s`;
    let countdownInterval = setInterval(() => {
        timeLeft--;
        countdownDisplay.innerText = `Time Left: ${timeLeft}s`;
    }, 1000);

    // Start animation (loop through options every 0.5s for 5s)
    let interval = setInterval(() => {
        hand.innerText = options[index]; // Change to the next option
        index = (index + 1) % options.length; // Loop back after last option
    }, 500);
    setTimeout(() => {
        clearInterval(interval);
        clearInterval(countdownInterval);
    },5000);
    setTimeout(()=>{
        hand.innerText="Are you ready for the result?"
    },5000);

    setTimeout(() => {
        countdownDisplay.innerText = `Time Left: NA`;

        if (optionsinChar[indexofHandGesture] === choice) {
            incrementTheValueOfTheCount(countOfWin);
            ResultOfTheAtttempt.innerText="Congratulations! You won this Attempt."
        }
        else{
            ResultOfTheAtttempt.innerText="You lost this game. Retry for improving the result. Good Luck"
        }
        incrementTheValueOfTheCount(totalCountOfAttempt);
        hand.innerText = `${options[indexofHandGesture]} \n ${optionsinChar[indexofHandGesture]}`;
    },6000);

    setTimeout(() => {
        buttons.forEach(btn => {
            btn.disabled = false;
            btn.removeAttribute('title');
        })
    }, 5000);
  }
  