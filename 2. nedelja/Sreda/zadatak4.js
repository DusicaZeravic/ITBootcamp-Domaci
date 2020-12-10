// Исписати првих 1000 бројева дељивих са 5
let num = 0;
for(let i = 1;; i++) {
     if(i % 5 == 0) {
         console.log(i);
         num ++;
     }
     if(num > 1000) {
         break;
     }
}