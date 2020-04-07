console.log('Контрольная работа');

console.log('Задание 1');

var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num ++ ;
num --;
num += 7;
num -= 18;
num *= 10;
num /= 15;
console.log(num);



console.log(' ');
console.log('Задание 2');

let hour = 1,
    minute = 59,
    second = 15;
console.log(hour + ' : ' + minute + ' : ' + second + '\'');




console.log(' ');
console.log('Задание 3');

let a = 'a',
    b = 'b',
    c = 'c',
    d = 'd',
    e = 'e', 
    str;
str = a + b + c + d + e;
console.log(str);
(a == 'a')  ? console.log('Да') 
: console.log('Нет');




console.log(' ');
console.log('Задание 4');

str = 'В некиим царстве, в некиим государстве жил-был богатый купец, именитый человек';

console.log(str[47] + str[48] + str[49] + str[50] + str[51] + str[52] + str[53] + str[54] + str[55] + str[56] + str[57] + str[58] + str[59]);




console.log(' ');
console.log('Задание 5');

a = "0";
b = "0";
c = "3";

console.log(a + b + c);
console.log(+a + +b + +c);




console.log(' ');
console.log('Задание 6');

a = 0;

(a == 10) ? console.log('Верно') 
          : console.log('Неверно');




console.log(' ');
console.log('Задание 7');

a = 'test';

(a == 'test') ? console.log('Верно') 
            : console.log('Неверно');



console.log(' ');
console.log('Задание 8');

a = 3;
b = 5;

if ((a <= 1) && (b >= 3)) {console.log(a + b)
} else {console.log(a - b)};




console.log(' ');
console.log('Задание 9 ');

let name,
    login,
    pass,
    unavailable;

name = prompt('Ваше имя');
login = prompt('Введите логин');
pass = prompt('Ваш пароль');

str = 'Добро пожаловать, ' + name + '! Вы успешно вошли на сайт.';

unavailable = name + ', вы неверно ввели логин или пароль';

((login == 'admin') && (pass == 'nimba')) ? document.write(str) 
                                          : alert(unavailable);




console.log(' ');
console.log('Задание 10 ');

let month,
    season,
    seasonName;

month = 5;

if (month < 1) month = 1;
if (month > 12) month = 12;
if ((month == 1) ||  (month == 2) ||  (month == 12))  {season = 1;
} else if ((month == 3) ||  (month == 4) ||  (month == 5)) {season = 2;
} else if ((month == 6) ||  (month == 7) ||  (month == 8)) {season = 3;
} else if ((month == 9) ||  (month == 10) ||  (month == 11)) {season = 4;
} 

seasonName = season;

switch (seasonName) {
case 1:
    console.log('Зима');
break;
case 2:
    console.log('Весна');
break;
case 3:
    console.log('Лето');
break;
case 4:
    console.log('Осень');
}
 