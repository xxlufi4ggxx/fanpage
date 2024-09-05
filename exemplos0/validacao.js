let numero1, numero2, validacao
//IsNaN -> verificar o que foi digitado (texto)

do {
    numero1 = parseInt(prompt("Digite 1° número"))
    if(isNaN(numero1) || numero1 < 0){
        alert("Numéro inválido, digite um valor positivo e maior que 0")
    }
} while (isNaN(numero1) || numero1 < 0);

console.log(numero1+numero2)




numero1= 1

if(isNaN(numero1)){
    console.log("Digite um número válido")
}


console.log(numero1)