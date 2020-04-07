
// Задание 1

let name,
    age,
    city,
    phone,
    email,
    company;

name = prompt('Ваше имя?');
age = prompt ('Возраст');
city = prompt ('Город проживания');
phone = prompt ('Телефон');
email = prompt ('Электронный адрес');
company = prompt ('Компания');

document.write('Меня зовут ' + name + '. Мне ' + age + ' лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: ' + phone + ' , ' + email + ' .    '); 



// Задание 2 

let year = 2020 - age;
document.write('\n\n' + name + ' родился/родилась в ' + year + ' году.');




// Задание 3 

let a = 3,
    b = 2,
    c = 4,
    d = 7,
    e = 1,
    f = 1;

((a + b + c) == (d + e + f)) ? alert('Да') 
                             : alert('Нет');



console.log('Задание 4');

a = 3;

(a > 0) ? console.log('Верно') 
        : console.log('Неверно');



console.log(' ')
console.log('Задание 5');

var sum;

b = 61;
a = 10;
sum = (a + b);

console.log('Сумма - ', sum);
console.log('Разность - ', (a - b));
console.log('Произведение - ', (a * b));
console.log('Частное - ', (a / b));
if (sum > 1) console.log('Квадрат суммы - ', (sum * sum));



console.log(' ')
console.log('Задание 6');

if ((11 > a ) && (a > 2)) {
    console.log('Верно'); 
} else if ((14 > b ) && (b >= 6)) {
    console.log('Верно')
} else {
    console.log('Неверно');
} 



console.log(' ')
console.log('Задание 7');

let n = 60;

if ((n > 0) && (n <= 15)) {
    console.log('Первая четверть часа');
} else  if ((n > 15) && (n <= 30)) {
    console.log('Вторая четверть часа');
} else  if ((n > 30) && (n <= 45)) {
    console.log('Третья четверть часа');
} else  if ((n > 45) && (n <= 59) || (n == 0)) {
    console.log('Четвертая четверть часа');
} else  if (n > 59) {
    console.log('Число n рассматривается от 0 до 59');
}



console.log(' ')
console.log('Задание 8');

let day = 5;

if (day < 1) {
    console.log('Первая декада месяца');
} else if ((day >= 1) && (day <= 10)) {
    console.log('Первая декада месяца');
} else  if ((day > 10) && (day <= 20)) {
    console.log('Вторая декада месяца');
} else  if ((day > 20) && (day <= 31)) {
    console.log('Третья декада месяца');
} else  if (day > 31) {
    console.log('Больше 31 дня в месяце не бывает');
}



console.log(' ')
console.log('Задание 9');

let days = 15,    
    years,
    months, 
    weeks,
    hours,
    minutes,
    seconds;

years = days / 365;
months = days / 31;
weeks = days / 7; 
hours = days * 24;
minutes = hours * 60;
seconds = minutes * 60;

console.log('Дней: ', days);

if (years < 1) {console.log('Лет: ' + 'Меньше года');
} else console.log('Лет: ', years);
if (months < 1) {console.log('Месяцев: ' + 'Меньше месяца');
} else console.log('Месяцев: ', months);
if (weeks < 1) {console.log('Недель: ' + 'Меньше недели');
} else console.log('Недель: ', weeks);

console.log('Часов: ', hours);
console.log('Минут: ', minutes);
console.log('Секунд: ', seconds);



console.log(' ')
console.log('Задание 10');

let month;

if ((day >= 0) && (day <= 31)) {
    console.log('Месяц:', month = 1);
} else if  ((day > 31) && (day <= 59)) {
    console.log('Месяц:', month = 2);
} else if  ((day > 59) && (day <= 90)) {
    console.log('Месяц:', month = 3);
} else if  ((day > 90) && (day <= 120)) {
    console.log('Месяц:', month = 4);
} else if  ((day > 120) && (day <= 151)) {
    console.log('Месяц:', month = 5);
} else if  ((day > 151) && (day <= 181)) {
    console.log('Месяц:', month = 6);
} else if  ((day > 181) && (day <= 212)) {
    console.log('Месяц:', month = 7);
} else if  ((day > 212) && (day <= 243)) {
    console.log('Месяц:', month = 8);
} else if  ((day > 243) && (day <= 273)) {
    console.log('Месяц:', month = 9);
} else if  ((day > 273) && (day <= 304)) {
    console.log('Месяц:', month = 10);
} else if  ((day > 304) && (day <= 334)) {
    console.log('Месяц:', month = 11);
} else if  ((day > 334) && (day <= 365)) {
    console.log('Месяц:', month = 12);
}

// Определение сезона

if (month == 1 || month == 2 || month == 12) {
    console.log('Пора года: ', 'Зима');
} else if (month == 3 || month == 4|| month == 5) {
    console.log('Пора года: ', 'Весна');
} else if (month == 6 || month == 7|| month == 8) {
    console.log('Пора года: ', 'Лето');
} else if (month == 9 || month == 10|| month == 11) {
    console.log('Пора года: ', 'Осень');
}


// Решение с помощью switch


let season;

if (month == 1 || month == 2 || month == 12) {
    season = 1;
} else if (month == 3 || month == 4|| month == 5) {
    season = 2;
} else if (month == 6 || month == 7|| month == 8) {
   season = 3;
} else if (month == 9 || month == 10|| month == 11) {
    season = 4;
}

switch (season) {
case 1 : alert('Зима'); 
break;
case 2 : alert('Весна'); 
break;
case 3 : alert('Лето'); 
break;
case 4 : alert('Осень'); 
break;
}