export function notNumber(value) {
    return isNaN(value) || value == "" //caso o valor n seja um numero OU vazio, retorna true
}


export function CalculateIMC(weight, height) {    //criamos a funcao do imc para o calculo
    return (weight / ((height / 100) ** 2)).toFixed(2)
}