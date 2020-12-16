// Написати функцију која израчунава цену пице по квадратном центиметру (параметри функције су полупречник у цм, и цена пице)

function priceOfPizza(r, price) {
    let P = r ** 2 * Math.PI
    return price / P
}

console.log(priceOfPizza(45, 3000));