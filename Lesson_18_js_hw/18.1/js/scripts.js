console.log('Задание 1'); 

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    document.write(arr[i], ', ');
}



console.log(' '); 
console.log('Задание 2'); 

arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arr.length; i++) {
    if ((arr[i] < -3) && (arr[i] > -10)) {
        console.log(arr[i],', ');
    }     
}



console.log(' '); 
console.log('Задание 3');

let arr1 = [];
    i = 23;

while (i < 58) {
    console.log(arr1[i]);
    arr1.push(i);
    i++;    
}
console.log(arr1);


let arr2 = [],
    sum = 0,
    result;

for (i = 23; i < 58; i++) {
    arr2.push(i);
    sum += i;
}

result = sum;

console.log(arr2);
console.log('Sum = ', result);



console.log(' '); 
console.log('Задание 4');

let arr4 = ['10', '20', '30', '50', '235' , '3000']; 

for (i = 0; i < arr4.length; i++) {
    if ((arr4[i][0] == 1) || (arr4[i][0] == 2) || (arr4[i][0] == 5))   console.log(arr4[i]);
}




console.log(' '); 
console.log('Задание 5');

document.write('<br><br>')

let days = ['ПН', 'ВТ', 'CP', 'ЧТ','ПТ', 'СБ', 'ВС'];

for (i = 0; i < days.length; i++) {

    if ((days[i] == 'СБ') || (days[i] == 'ВС')) {
        document.write('<b>' + days[i] + '</b>' + ' ');
    } else document.write(days[i] + ' ');     
}





console.log(' '); 
console.log('Задание 6');

let nums = [58, false, 'flower', 3, 0];
console.log(nums);

nums[nums.length] = 'Как хорошо'; 
console.log(nums);




console.log(' '); 
console.log('Задание 7');

let arr7 = [];
while(true) {
    let num = prompt('Введите число');
    if (num != '') {
        arr7.push(+num);
    } else {
        break;
    }    
}
console.log(arr7);



console.log(' '); 
console.log('Задание 8');

// с помощью метода reverse

let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
console.log(arr8);
console.log(arr8.reverse());

// с помощью while

arr8 = [12, false, 'Текст', 4, 2, -5, 0];

let arr81 = [],
    j = 0;

i = arr8.length - 1;
while (i >= 0) {
    arr81[j] = arr8[i];
    j++;
    i--;
}
console.log(arr81);




console.log(' '); 
console.log('Задание 9');

let arr9 = [5, 9, 21,,, 9, -78,,,, 6];

sum = 0;

for (i = 0; i < arr9.length; i++) {
    if (arr9[i] == undefined) sum++;
}
console.log(sum);



console.log(' '); 
console.log('Задание 10');

let arr10 = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2],
    a1 = arr10.indexOf(0),
    a2 = arr10.lastIndexOf(0);

sum = 0;

for (i = 0; i < arr10.length; i++) {
    
    if ((i >= a1) && (i <= a2)) {
        sum += arr10[i]; 
    } else if ((a1 == a2) || (a1 == -1) || (a2 == -1)) {
        console.log(0)
    };
}
console.log('Sum = ', sum);



console.log(' '); 
console.log('Задание 11');

let arr11 = [],
    h,
    n;
h = prompt('Введите высоту равнобедренного треугольника');
alert(h);
for (let j = 1; j <= h; j++) {
    arr11[j] = (2 * (j + 1) - 1);
    n = arr11[j];
    document.write('<center>' + new Array(n-1).join('^') + '<\/center>');
} 
