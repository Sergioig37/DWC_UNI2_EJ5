var cerosManual = new Array(50);
var ceros = new Array(50);

function rellenarManual(unArray){

    for(var i=0; i<unArray.legnth;i++){
        unArray[i] = 0;
    }
}

function rellenarFill(unArray){
    console.log(unArray.fill(0, 0, unArray.length-1));
}

console.log(cerosManual);
console.log(ceros);
rellenarManual(cerosManual);
console.log(cerosManual);
rellenarFill(ceros);