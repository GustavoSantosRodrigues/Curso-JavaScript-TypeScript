function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;
let rand = random(max, min);

while(rand !== 10){
    rand = random(max, min);
    console.log(rand)
}

// let controle = 0;

// while(controle <= 10){
//     console.log(controle)
//     controle++
// }

// for(controle = 0; controle <= 10; controle++){
//     console.log(controle)
// }
