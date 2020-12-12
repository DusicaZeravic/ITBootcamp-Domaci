// Сачувати у променљиве цену и пречник пице
// Израчунати која је цена пице по цм² (пазити на то да се површина рачуна са полупречником)
// Исписати тај резултат у конзолу

let price = 3000;
let R = 35;
let P = (R / 2) ** 2 * Math.PI;
let priceCm = price / P
console.log(`Cena pice po cm² iznosi: ${priceCm} dinara.`);
