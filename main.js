//Задание 1
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2  к переменной прибавляется 1 единица , результат вычисления выводится сразу
d = b++; alert(d);           // 1  к переменной прибавилась 1 единица , но выводится предыдущее значение переменной
c = (2 + ++a); alert(c);      // 5  двойка прибавляется к переменной со значением 2 (результат предыдущего вычисления), также прибавляется еще одна единица инкриментом и результат инкримента выводится сразу
d = (2 + b++); alert(d);      // 4 двойка прибавляется к переменной со значением 2 (результат предыдущего вычисления) но вычисление инкримента выведется в следущем запросе 
alert(a);                    // 3 в результате вычисления двух инкриментов значение переменной увелиличилось соответственно на две единицы  
alert(b);                    //3  в результате вычисления двух инкриментов значение переменной увелиличилось соответственно на две единицы  

//Задание 2
var a = 2;
var x = 1 + (a *= 2); // x равен 5 так как сначала мы умножаем значение переменной а на 2 и затем прибавляем к произведению 1 единицу  
alert(x);

//Задание 3
var a = 0;
var b = -1;

if (a >= 0 && b >= 0) {
    alert("Разность чисел = " + (a - b))
} else if (a <= 0 && b <= 0) {
    alert("Произведение чисел = " + (a * b))
} else (a >= 0 && b < 0); {
    alert("Сумма чисел = " + (a + b))
}

//Задание 4
var c = parseInt(prompt("Введите число от 0 до 15"))
if (!isNaN(c)) {
    switch(c) {
        case 1:
            alert (c++);
        case 2:
            alert (c++);
        case 3:
            alert (c++);
        case 4:
            alert (c++);    
        case 5:
            alert (c++);
        case 6:
            alert (c++);
        case 7:
            alert (c++);
        case 8:
            alert (c++);
        case 9:
            alert (c++);
        case 10:
            alert (c++);
        case 11:
            alert (c++);
        case 12:
            alert (c++);
        case 13:
            alert (c++);
        case 14:
            alert (c++);
        case 15:
            alert (c);
        break;      
    }
} else alert ("Вы ввели неверное число")


//Задание 5
var a = 2;
var b = 3;

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

function mult(a, b) {
    return a + b;
}

//Задание 6
function mathOperation(arg1, arg2, operation){
    switch(operation){
            case 'сложение':
                return arg1 + arg2;
                break;
            case 'вычитание':
                return arg1 - arg2;
             break;
         case 'деление':
                       return arg1 / arg2;
             break;
            case 'умножение':
                return arg1 * arg2;
             break;
       }
}
