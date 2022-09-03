/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    const strToArr = str.split(` `);
    for (let i = 0; i <= strToArr.length - 1; i++) {
        const capitalizedWord = strToArr[i].slice(0, 1).toUpperCase() + strToArr[i].slice(1);
        strToArr[i] = capitalizedWord; };
        return strToArr.join(` `);
};


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
