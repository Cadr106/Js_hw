//Дата и время. Математические функции. Работа со строками. Регулярные выражения.


console.log('Задание 1');
/*Дана строка 'aaa@bbb@ccc'. Pfvtybnt dct @ на '!' с помощью глобального поиска и замены */

console.log('aaa@bbb@ccc'.replace(/@/g, '!'));




console.log(' ');
console.log('Задание 2');
/*В переменной date лежит дата в формате '2025-12-31'. Преобразуйте  эту дату в формат '31/12/2025'.*/

let date = '2025-12-31';
console.log(date.replace(/(2025)-(12)-(31)/, '$3/$2/$1'));





console.log(' ');
console.log('Задание 3');
/* Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice). */

let str11 = 'я учу javascript!';
let a1 = str11.substr(2, 3),
    b1 = str11.substr(6, 10);
console.log(a1, b1);

let a2 = str11.substring(2, 5),
    b2 = str11.substring(6, 16);
console.log(a2, b2);
let a3 = str11.slice(2, 5),
    b3 = str11.slice(6, 16);
console.log(a3, b3);





console.log(' ');
console.log('Задание 4');
/*Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for. */

let array = [4, 2, 5, 19, 13, 0, 10],
    sum = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] != 0) {
        let cube = Math.pow(array[i], 3);
        sum += cube;
        console.log(cube);
    } 
}
console.log(sum); 
console.log(Math.sqrt(sum));





console.log(' ');
console.log('Задание 5');

/*Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную с записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.*/

let a = 3,
    b = 5,
    c;
c = a - b;
if (c >= 0) console.log(c);    
else console.log(-c);





console.log(' ');
console.log('Задание 6');
/*Выведите на экран текущую дату-время в формате '12:59:59 31.12.2014'. Для решения этой задачи напишите функцию, которая будет добавлять 0 перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014 сделает 01.09.2014) */

let dateTimeNow = new Date(),
    hours = dateTimeNow.getHours(),
    minutes = dateTimeNow.getMinutes(),
    seconds = dateTimeNow.getSeconds(),
    date11 = dateTimeNow.getDate(),
    month = dateTimeNow.getMonth() + 1,
    year = dateTimeNow.getFullYear();


function addNull () {
    let arrayDate = dateNew.split(' '),
        arrayDate1 = [];        
    
    for (let i = 0; i < arrayDate.length; i++) {
        
        if ((arrayDate[i] < 10) && (arrayDate[i] != "")) {
            arrayDate1.push('0' + arrayDate[i]);
        } else {
            arrayDate1.push(arrayDate[i]);
        }        
    }
    arrayDate1.splice(7, 0, " ");
    dateNew = arrayDate1.join('');
}

let dateNew = hours + ' : ' + minutes + ' : ' + seconds + '   ' + date11 + ' . ' + month + ' . ' + year;

addNull();
console.log(dateNew);




console.log(' ');
console.log('Задание 7');

/*Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое количество раз, буква 'a'*/

let str7 = 'aa aba abba abbba abca abea',
    arrayStr = str7.match(/ab+a/gi);

console.log(String(arrayStr));




console.log(' ');
console.log('Задание 8');

/*Напишите функцию строгой проверки ввода номера телефона в международном формате(<код страны><код города или сети><номер телефона>) и упрощенной проверки ввода простого номера с кодом и без него. Функция должна возвращать true или false. */

function checkPhone(phone) {
    let regexp = /^\+(\d{3})([\s-(])?(\d{2})([\s-)])?(\d([\d\s-]{5,11})\d)$/;
    return regexp.test(phone);
}

console.log(checkPhone(prompt('Введите номер телефона')));

function checkPhone1(phone) {
    let regexp = /^\d?[\s]?[\d]{2,3}[\s-]?\d[\d\s-]{5,11}\d$/g;
    return regexp.test(phone);
}
console.log(checkPhone1(prompt('Введите номер телефона')));



function checkPhone2(phone) {
    let regexp = /^\d[\d\s-]{5,11}\d$/g;
    return regexp.test(phone);
}
console.log(checkPhone2(prompt('Введите номер телефона')));





console.log(' ');
console.log('Задание 9');
/*Напишите функцию, которая из полного адреса с параметрами и без, например: 
https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3, получит адрес доменного имени (https://tech.onliner.by), остальную часть адреса без параметров (/2018/04/26/smart-do-200/),  параметры (utm_sourсe=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе может и не быть каких-либо составляющих. Функция должна возвращать массив. */

function getArrayURL(url) {
    
    console.log(url);

    let domainAddress = url.match(/^\w+\:\/\/\w+[\.\w]*\w/g),
        paramWithout1 = url.match(/\/[^\.]*\w+[\w\/-]*\?/g),
        paramWith1 = url.match(/\?\w+[\w\_\=\&\%]*/),
        hash = url.match(/\#\w+$/g),
        arrayURL = [];
    
    arrayURL.push(domainAddress.join(''));

    if (paramWithout1 != null) {
        let paramWithout2 = paramWithout1.join(''),
        paramWithout = [];
        for (let i = 0; i < paramWithout2.length - 1; i++) {
            paramWithout.push(paramWithout2[i]);
        }
        arrayURL.push(paramWithout.join(''));
    } 

    if (paramWith1 != null) {
        let paramWith2 = paramWith1.join(''),
        paramWith = [];
        for (let j = 0; j < paramWith2.length; j++) {
            if (paramWith2[j] != '?')
            paramWith.push(paramWith2[j]);
        }    
        arrayURL.push(paramWith.join(''));
    } 

    if (hash != null) {
        arrayURL.push(hash.join(''));
    }

    return console.log(arrayURL);
}
getArrayURL('https://tech.onliner.by/2018/04/26/smart-do-200/?utm_source=main_tile&utm_medium=smartdo200#zag3');






console.log(' ');
console.log('Задание 10');
/*Напишите функцию удаления повторов из строки, в т.ч. повторных пробелов (2х и более) и спецсимволов, например: "hello hello hello hello world" -> "hello world". Функция должна возвращать обработанную строку.*/

function getStrNoRepeat(str) {
    str = str.replace(/\W{2,}/g, ' ');
    str = str.replace(/\_{2,}/g, ' ');
    str = str.replace(/\s{2,}/g, ' ');

    
    console.log(arrayStr = str.split(' '));

    let i = 1,
        arrayRepeat = [arrayStr[i-1]];
    console.log(arrayRepeat);

    for (; i < arrayStr.length; i++) {
        for (let j = 1; j <= i; j++) {
            if ((arrayStr[j] != arrayStr[j-1]) ) {
                arrayRepeat.push(arrayStr[j]); 
            } 
        } 
    }
    return console.log(arrayRepeat);
}

getStrNoRepeat("hello   @@hello hello____ hello //  %hello world");


//C символами еще не доработала








