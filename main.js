var ope;
var num1;

function operazione(op){
    ope = op;
    num1 = parseFloat(document.getElementById("numero").value);
    document.getElementById("numero").value = "";
}

function aggiungiNumero(num){
    document.getElementById("numero").value += num;
}

function calcola(){
    var num2 = parseFloat(document.getElementById("numero").value);
    var ris;
    switch(ope){
        case 1:
            ris = num1 + num2;
            break;
        case 2:
            ris = num1 - num2;
            break;
        case 3:
            ris = num1 * num2;
            break;
        case 4:
            ris = num1 / num2;
            break;
    }
    document.getElementById("numero").value = ris;
}