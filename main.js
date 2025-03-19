export function maiorNumero(array) {
    let maior = array[0]
    let indice = 0
    if (array.length == 0 || isNaN(array[0])) {
        return null
    }
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
            indice = i
        }
    }
    return indice

}

export function verificarParOuImpar(num) {
    if (isNaN(num)) {
        return null
    }
    if (num % 2 == 0) {
        return "Par"
    }else{
        return "Ímpar"
    }

}

export function diaDaSemana(dia) {
    if (dia > 7 || dia < 1) {
        return "Número inválido"
    }

    switch (dia) {
        case 1:
            return "Domingo"
        case 2:
            return "Segunda-feira"
        case 3:
            return "Terça-feira"
        case 4:
            return "Quarta-feira"
        case 5:
            return "Quinta-feira"
        case 6:
            return "Sexta-feira"
        case 7:
            return "Sábado"
    }
}

export function somarLista(array) {

    let result = 0

    if (array.length == 0) {
        return 0
    }

    if (isNaN(array[0])) {
        return null
    }

    array.forEach(numero => {
        result += numero
    })
    return result
}

export function contarPalavras(frase) {


    let indice = 0
    if (isNaN(frase)) {
        frase = frase.split(' ')
        indice = frase.length
        return indice
    }

    if (frase === " ") {
        return 0
    }
    return null
}

export function atualizarPropriedade(objeto, chave, valor) {
    objeto[chave] = valor;
    return objeto;
}

export function listarChaves(objeto) {
    if (typeof objeto !== "object" || objeto === null || Array.isArray(objeto)) {
      return null
    }
    return Object.keys(objeto);
  }

export function saudacaoPorHora(hora){
    if(hora < 0 || hora > 23){
        return "Hora inválida!"
    }

    if(hora > 0 && hora < 12){
        return "Bom dia!"
    }

    if(hora > 11 && hora < 18){
        return "Boa tarde!"
    }
    
    if(hora > 17 && hora < 24){
        return "Boa noite!"
    }
}

