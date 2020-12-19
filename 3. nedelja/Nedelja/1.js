// Написати функцију која исписује све елементе низа који су дељиви са 5
function divisibleBy5(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (elDivisibleBy5(arr[i])) console.log(arr[i]);
    }
}

divisibleBy5([2, 10, 19, 45, 78, 90, 1345, 3000, 125]);

function elDivisibleBy5(num) {
    if(num % 5 === 0) return num;
}