/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    const strToArr = str.split(` `);
    //console.log(strToArr);
    for(let i = 0; i <= strToArr.length - 1; i++) {
        const capLetter = strToArr[i][0].toUpperCase() + strToArr[i].slice(1);
        return capLetter;
        console.log(capLetter);
        //const wholeWord = capLetter.split(` `);
       // console.log(wholeWord);
       // const together = wholeWord.reduce(function (previousValue, item){
       //     return previousValue + item;
       // });
        //console.log(together);
        //const sum = capLetter.reduce(function(previousValue, item){
        //    return previousValue + item;
        //});
       // return capLetter.join(``);
        }
    }
    

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
