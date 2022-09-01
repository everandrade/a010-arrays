// # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações.
//Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, 
//e faça o que se pede abaixo nas cópias dos arrays originais;


const array1 = [12, 84, 45, 13, 17, 89, 21, 3, 1090]

const array2 = ["REQUISITOS", "DE", "ÁREA", "LIMPA", "PARA", "PRODUÇÃO", "DE", "MEDICAMENTOS"]

const array3 = ["escola", 12, true, false, 777, "mãe", 81>3]

array1copia = array1.slice()

array2copia = array2.slice()

array3copia = array3.slice()

// - Adicione um item `number` ao primeiro array. Utilize `console.log()` 
//para exibir o original e a cópia;

console.log("Original 1: ", array1)
array1copia.push('number')
console.log("Cópia 1: ", array1copia)

// - Remova o último item do segundo array. Utilize `console.log()` 
//para exibir o original e a cópia;

console.log("Original 2: ", array2)
array2copia.pop()
console.log("Cópia 2: ", array2copia)

// - Remova o segundo item do terceiro array. Utilize `console.log()` 
//para exibir o original e a cópia;

console.log("Original 3: ", array3)
array3copia.splice(1,1)
console.log("Cópia 3: ", array3copia)