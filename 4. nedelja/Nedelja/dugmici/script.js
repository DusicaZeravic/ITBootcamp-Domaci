const btnOrderOne = document.querySelector('#orderOne');
const btnOrderTwo = document.querySelector('#orderTwo');
const btnOrderNowOne = document.querySelector('#order-now-two');
const btnOrderNowTwo = document.querySelector('#order-now-one');
const mainDiv = document.querySelector('#buttons');
let datetime = new Date().toLocaleString()
let counter = 0;

// Create msg paragraf and append it to main div
const msg = document.createElement('p');
const countParagraf = document.createElement('p');
mainDiv.append(msg, countParagraf);

// count function
function count() {
    counter++
    countParagraf.textContent = `The current value for counter is ${counter}.`;
}

// Event listeners on order buttons
btnOrderOne.addEventListener('click', count);
btnOrderTwo.addEventListener('click', count);

// function reset buttons 
function resetButtons() {
    if(counter == 0) {
        msg.textContent = 'You have to order at least one pizza!'
    } else {
        msg.textContent = `You ordered ${counter} pizzas, [${datetime}].`
    }
    counter = 0;
    countParagraf.textContent = `The current value for counter is ${counter}.`;
}

// Event listeners on order now buttons
btnOrderNowOne.addEventListener('click', resetButtons);
btnOrderNowTwo.addEventListener('click', resetButtons);
