//Exercício 2

// Com os arrays criados, agora vamos observar os arrays. 
//Faça o que se pede abaixo, utilizando `console.log()`:

// - Imprima a quantidade de itens de cada array (utilize um console.log() 
//para cada impressão);
// - Imprima o primeiro item do primeiro array, o segundo item do segundo array,
//e o terceiro item do terceiro array;
// - Imprima uma informação booleana verdadeira sobre a **inclusão** 
//de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** 
//de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.

const array1 = [12, 84, 45, 13, 17, 89, 21, 3, 1090]

const array2 = ["REQUISITOS", "DE", "ÁREA", "LIMPA", "PARA", "PRODUÇÃO", "DE", "MEDICAMENTOS"]

const array3 = ["escola", 12, true, false, 777, "mãe", 81>3]

// - Imprima a quantidade de itens de cada array (utilize um console.log() 
//para cada impressão);
console.log("Quantidade de elementos do array1 é: ", array1.length)
console.log("Quantidade de elementos do array2 é: ", array2.length)
console.log("Quantidade de elementos do array3 é: ", array3.length)

// - Imprima o primeiro item do primeiro array, o segundo item do segundo array,
//e o terceiro item do terceiro array;
console.log('Primeiro item do primeiro array: ', array1[0], '\nSegundo item do segundo array: ', array2[1], '\nTerceiro item do terceiro array: ', array3[2])

// - Imprima uma informação booleana verdadeira sobre a **inclusão** 
//de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** 
//de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.

inclusao1 = array1.includes(1090)
inclusao2 = array2.includes(81>3)

console.log("Informação booleana verdadeira do primeiro array: ", inclusao1)
console.log("Informação booleana falsa do terceiro array: ", !inclusao1)