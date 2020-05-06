//'Функции'
console.log('Задание 1')
/*Напишите функцию, запрашивающую имя, фамилия, отчество и номер группы студента и выводящую введенные данные в следующем виде:
    *******************************
    * Домашняя работа: "Функции"  *
    * Выполнил: студент гр. W4017 *
    * Иванов Иван Иванович        *
    * *****************************
Размер рамки должен определяться автоматически по самой длинной строке. Рамку вывести в консоль.
    */
   
function getFullName () {
    let lastName = prompt('Ваша фамилия?'),
        name = prompt('Ваше имя?'),
        secondName = prompt('Ваше отчество?'),
        group = prompt('Ваш номер группы?'),
        
        str1 = 'Домашняя работа: "Функции"',
        str2 = 'Выполнил: студент гр. ' + group,
        str3 = lastName + ' ' + name + ' ' + secondName;
            
    let max = str1.length;

    if (max < str2.length) {
        max = str2.length;
    } else if (max < str3.length) {
        max = str3.length;
    } 
    
    for (let i = 0; i = max - str1.length; i++) { 
        str1 += ' ';
    }
    
    for (let i = 0; i = max - str2.length; i++) {
        str2 += ' ';
    }
    
    for (let i = 0; i = max - str3.length; i++) {
        str3 += ' ';
    }
    
    let border;
    border = new Array(max + 5).join('*');
    console.log(border);
    console.log('* ' + str1 + ' *');
    console.log('* ' + str2 + ' *');
    console.log('* ' + str3 + ' *');
    console.log(border);
}
getFullName();





console.log('Задание 2');
/*Напишите функцию, которая рисует равнобедренный треугольник из звёздочек. Количество рядов должно вводиться с клавиатуры. Дополнительно, напишите такую-же функцию, но которая выведет перевёрнутый треугольник. */

function triangle (height) {
    let i, j, h = height, str;
    for (i = 1; i <= h; i++) {
        for (j = 0; j < (2*i - 1); j++) {
            str = new Array(h - i + 1).join(' ') + new Array(2*i).join('*');
        }
        console.log(str);
    }
}

triangle(5);
function triangle1 (height) {
    let i, j, h = height, str;
    for (i = h; i >= 1; i--) {
        for (j = 0; j < (2*i - 1); j++) {
            str = new Array(h - i + 1).join(' ') + new Array(2*i).join('*');
        }
        console.log(str);
    }
}
triangle1(5);





console.log(' ');
console.log('Задание 3');



//Не дорешала




/*Напишите функцию, которая должна проверить правильность ввода адреса электронной почты. Почта верна при условии:
а) весь адрес не должен содержать русские буквы и спецсимволы, кроме одной "собачки", знака подчёркивания, дефиса и точки, причем они не могут быть первыми и последними в адресе, и идти подряд, например: "..", "@.", ".@", или "@@", "_@", "@-", "--" и т.п.
b) имя эл.почты (до знака @) должно быть длиной более 2 символов, причем имя может содержать только буквы, цифры, но не быть первыми и единственными в имени, и точку;
с) после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.) не может быть длиной менее 2 и более 11 символов. */
/*
function checkEmail(email) {
    let str = email.split('');
    console.log(str);
    if ((str.indexOf('@') == str.lastIndexOf('@')) && (str.indexOf('@') > 2) && (str.indexOf('@') != str.length-1)) {
     
        for (let i = 0; i < str.length; i++) {
                            
            if 
            (((str[i] > '\u0041') && (str[i] < '\u005A')) || 
            ((str[i] > '\u0061') && (str[i] < '\u007A')) || 
            ((str[i] > '\u0030') && (str[i] < '\u0039')) || 
            (str[i] = '\u0040') || 
            (str[i] = '\u002E') || 
            (str[i] = '\u002D') || 
            (str[i] = '\u005F') ||
            (str[i] = '\u00AF'))  {
                
                return true;
            } else {
                break;
            }            
        }

    } else {
        return false;
    }
       
    if  ((str[0] != '\u0040') || (str[0] != '\u002E') || (str[0] != '\u002D') || (str[0] != '\u005F') || (str[0] != '\u00AF')) { 
        return true;
    
        
}
console.log(checkEmail(prompt('Введите ваш электронный адрес')));
*/
