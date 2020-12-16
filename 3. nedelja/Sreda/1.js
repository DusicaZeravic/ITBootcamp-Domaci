// Написати функцију која за параметар прима број сати (0-24) и у зависности од доба дана исписује поруке: Добро јутро , Добар дан или Добро вече.

function greeting(hour) {
    if(hour > 0 && hour <= 24) {
        if(hour >= 4 && hour < 12) {
            console.log('Good Morning!');
        } else if(hour >= 12 && hour < 19) {
            console.log('Good Afternoon!');
        } else {
            console.log('Good Evening!');
        }
    } else {
        console.log('Input is not valid!');
    }
}

greeting(16);