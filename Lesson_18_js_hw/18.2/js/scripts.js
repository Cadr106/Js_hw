console.log('Циклы do... while, while, for. Вложенные циклы.');
console.log('Задание 1');

console.log('Вывести числа от 1 до 50');
let i,
    str = ' ';

i = 1;
while (i <= 50)    {
    str += i + '  ';
    i++;
}
console.log(str);



console.log('Вывести числа от 35 до 8');

let j = 35;
str = ' '; 
while (j >= 8) {
    str += j + '  ';
    j--;    
}  
console.log(str);




console.log(' ');
console.log('Задание 2');


console.log('Вывести числа от 89 до 11');

j = 89;
col = ' ';

while (j >= 11) {
    col += j + '<br\/>';
    j--;    
}  
document.write(col);



console.log('II способ');

j = 89;

while (j >= 11) {
    console.log(j);
    j--;    
} 




console.log(' ');
console.log('Задание 3');

let sum = 0;
i = 0;

while (i <= 100) {
    sum += i;
    i++;
}
console.log('Sum = ', sum);




console.log(' ');
console.log('Задание 4');

let a = 5;

for (i = 1; i <= a; i++) {
    sum = 0;
    for (j = 1; j <= i; j++) {
        sum += j;
    }
    console.log('Sum ' + i + ' = ' + sum);
}




console.log(' ');
console.log('Задание 5');

console.log('С помощью while');

i = 8;
str = ' ';

while (i <= 56) {
    if (i % 2 == 0) {
       str += i + ' ';
    }
    i++;
}
console.log(str);

console.log(' ');
console.log('С помощью for');

str = 0;

for (i = 8; i <= 56; i++) {
    if (i % 2 == 0) {
        str += i + ' ';
    }
}
console.log(str);





console.log(' ');
console.log('Задание 6');
for (i = 2; i <= 10; i++) {

    document.write('<br\/>');

    for (j = 1; j <= 10; j++) {
        multiplication = i + ' * ' + j + ' = ' + (i * j) + '<br\/>';
        document.write(multiplication);
    }  
}



console.log(' ');
console.log('Задание 7');

let n = 1000,
    num = 0;

i = 0;

while (n >= 50) {
    n /= 10;
    i++
}
num = i;
console.log('Num = ', num);





console.log(' ');
console.log('Задание 8');

let averange;
sum = 0;
i = 0;
j = 0;

while ((n > 0) || (n < 0) || isNaN(n)) {
    
    n = prompt('Введите число');
    if ((n == 0) || (n === '')) break;

    if (isNaN(n)) {
        alert(n + ' - это не число');        
        continue;
    } else  {
       sum += +n;
       i++;       
    }    
}

console.log('Sum = ', + sum);


averange = sum / i;    
console.log('Аverange = ', averange);




console.log(' ');
console.log('Задание 9');

str = '4 98 4 6 4 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
i = 0;

let strArr = str.split(' '),
    min,
    max,
    b = strArr[i+1];
    
a = strArr[i];
console.log(strArr);

strArr.sort(function(a, b) {
    return a - b;
}); 
console.log(strArr);

min = strArr[0];
console.log('Min = ', min);

i = strArr.length - 1;
max = strArr[i];
console.log('Max = ', max);
/*
// С помощью цикла
for (i = 0; i < strArr.length; i++) {
    if (a < b) {
        min = a;
    } else {
        max = b;
    }
}
console.log(min);
console.log(max);
*/



console.log(' ');
console.log('Задание 10');

n = prompt('Введите целое число');
let arr = [], 
    c = 0;
console.log(n);
i = 0;
arr = n.split();
console.log(arr[i] + ' ');
for (i = 0; i < arr.length; i++) {
    c += arr[i];
}
console.log(c + '  ');



