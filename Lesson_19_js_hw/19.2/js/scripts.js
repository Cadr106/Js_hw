console.log('Контрольная работа "Функции"');
console.log('Задание 1');

/* Сделайте функцию, которая отнимает от первого числа второе и делит на третье. Числа передаются параметром.*/

function example(a, b, c) {
    
    let example = (a - b) / c;
    console.log(example);
}
example(155, 5, 3);


console.log(' ');
console.log('Задание 2');

/*Сделайте функцию, которая возвращает куб числа и его квадрат. Число передается параметром.*/

function returnNum (num) {
    a = 'Квадрат числа ' + num + ' = ' + num*num;
    b = 'Куб числа ' + num + ' = ' + num*num*num;
    return  a + ' и '+ b;    
}
console.log(returnNum(prompt('Введите число')));



console.log(' ');
console.log('Задание 3');

/*Напишите функции min и max, которые возвращают меньшее и большее из чисел a и b */

function findMinMax(a, b) {
    let max, min;
    if (a > b) {
        return 'Max = ' + a + ' и Min = ' + b;
    } else {
        return 'Max = ' + b + ' и Min = ' + a;
    }
}

console.log(findMinMax(3, 6));






console.log(' ');
console.log('Задание 4');

/*Напишите две функции: первая функция должна возвращать массив с числовыми значениями, диапазон которых должен вводиться пользователем с клавиатуры; вторая - выводить полученный массив */

function createArray (a, b) {
    let array = [];
    if (a < b) {
        for (let i = a; i <= b; i++) {
            array.push(i);
        }
    } else {
       for (let i = a; i >= b; i--) {
            array.push(i);
        } 
    }    
    return array;       
}
let result = createArray(+prompt('Введите целое число'), +prompt('Введите целое число'));

function showArray () {
    console.log(result);
}
showArray();




console.log(' ');
console.log('Задание 5');

/* Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false. */

function isEven(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }        
} 
console.log(isEven(25));





console.log(' ');
console.log('Задание 6');

/*Напишите функцию, в которую передается массив с целыми числами. Верните новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи. */

function getArray1(array1) {
    let newArray1 = [];
    for (let i = 0; i < array1.length; i++) {
        let result = isEven(array1[i]);
        if (result == true) {
          newArray1.push(array1[i]);
        }            
    }    
        return console.log(newArray1);    
}
getArray1([2,54,-21,555,6, -332]);





console.log(' ');
console.log('Задание 7');

/*Напишите функцию, которая рисует следующую пирамидку (исп. вложенные циклы):
1
22
333
4444
55555
666666
7777777
88888888
999999999
Количество рядов должно вводиться параметром. Если пользователь ввел доп. параметр, непредусмотренный функцией по умолчанию - один любой символ, кроме пробела, то пирамида должна быть нарисована этим символом, например:
*
**
***
****
*****
******
*******
********
*********
 */

function getPyramid(height) {
    
    for (let i = 1; i <= height; i++) {
        let s = [];
        for (let j = 1; j <= i; j++) {
            s.push(i);           
        }
        console.log(s.join(''));        
    }
    if ((arguments.length > 1) && (arguments[1] != " ")) {
        
        for (let k = 1; k <= height; k++) {
            let s = [];
            for (let l = 1; l <= k; l++) {
                s.push(arguments[1]);           
            }
            console.log(s.join(''));
        }   
    }
}

getPyramid(8, '*');






console.log(' ');
console.log('Задание 8');

/*Напишите функцию, которая возвращает массив, заполненный числами Фибоначчи от 0 до 1000  */

function getNumFebonacci () {
    let arrNum = [0, 1],
        i = 2;
    while ((arrNum[i-1] + arrNum[i-2]) <= 1000) {       
        arrNum[i] = arrNum[i-1] + arrNum[i-2];
        arrNum.push(arrNum[i]);
        i++;           
    }  
    return console.log(arrNum);
}

 getNumFebonacci();





 console.log(' ');
 console.log('Задание 9');

/* Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее). Используйте рекурсию.*/

function getSumNum(num) {
    let sum = 0;
    num = String(num);

    for (let i = 0; i < num.length; i++) {
        sum = sum + Number(num[i]); 
    }
    console.log(sum);

    if (sum > 9) {
        let sum1 = sum;
        getSumNum(sum1);
    }    
}

getSumNum(2235367);






console.log(' ');
console.log('Задание 10');

/* Дан массив с числами (передается параметром). Выведите последовательно его элементы, используя рекурсию и не используя цикл.*/ 

function printNumArray (array) {
    console.log(array[i]);    
    i++;
    if (i < array.length) printNumArray (array);
}
var i = 0;
printNumArray ([33, -5, 27, 0, 8]);