/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    const firstWord = str1.toLowerCase().split(``);
    const secondWord = str2.toLowerCase().split(``);
    if(firstWord.join(``) === secondWord.join(``)) {
        return false;
    }  else {
    firstWord.sort(function(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a < b) return -1;
        return 0;
      });
      secondWord.sort(function(a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a < b) return -1;
        return 0;
      });
      if (firstWord.join(``) === secondWord.join(``)) {
        return true;
      } else {
        return false;
      }
    } 
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false