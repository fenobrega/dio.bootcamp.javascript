let numero1;
let numero2;
let resultado;

function numerosIguais(numero1, numero2) {
    console.log(numero1, numero2);

    function soma() {
       
        resultado = numero1 + numero2;
        
        if (resultado > 10 && resultado < 20) {
            console.log(`A soma é ${resultado}, que é maior que 10 e menor que 20`);
        } else if (resultado < 10 && resultado < 20) {
            console.log(`A soma é ${resultado}, que é menor que 10 e menor que 20`);            
        } else {
            console.log(`A soma é ${resultado}, que é maior que 10 e maior que 20`);            
        }

    }

    if (numero1 === numero2) {
        console.log(`Os números ${numero1} e ${numero2} são iguais!`);
    } else {
        console.log(`Os números ${numero1} e ${numero2} não são iguais!`);

    }
    soma();
}

numerosIguais(2, 13);

/*
Código feito pela professora Stephany Nusch

function comparaNumeros(num1, num2) {
	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);

	return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
	let primeiraFrase = `Os números ${num1} e ${num2}`;
	let simNao = 'não';

	if (num1 === num2) {
		simNao = '';
	}

	return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
	const soma = num1 + num2;
	let comparaDez = 'menor';
	let comparaVinte = 'menor';

	if (soma > 10) {
		comparaDez = 'maior';
	}

	if (soma > 20) {
		comparaVinte = 'maior';
	}

	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparaNumeros(10, 10));
*/