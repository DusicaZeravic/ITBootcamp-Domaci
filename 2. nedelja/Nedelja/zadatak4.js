// Исписати Марио пирамиду одређене висине:
// Za n = 5;

let n = 5;
let sign = '#';

for(let i = 1; i <= n; i++) {
    console.log(' '.repeat(n - i) + '#'.repeat(i));
}