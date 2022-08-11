"use strict"; 
// 1. Всі дані введені користувачем приходять як рядок (string)

// 2. Інтерполяція - вставка в рядок змінної
   const category = 'toys';
   console.log(`Our shop has got a lot of ${category}`);

// 3. Оператори (+ - / * % && || !) 
  //- конкатинація - операція склеювання об'єктів лінійної структури, зазвичай рядків  
   const stringToNum = +"5" // унарний плюс (використовує лиш один аргумент для своєї роботи) - зробив з рядка число
  
   // інкремент - збільшення на одиницю 
   // декремент - зменшення на одиницю 
   let num = 10; 
   // постфіксний запис (спершу повертає початкове значення)
   num++; // 10
   num--; // 10
   // префіксний запис
   ++num; // 11
   --num; // 9
   
   // % - виведе залишок від ділення 
   console.log(5%2);   // 1
   console.log(2*4 == '8'); // рівність 2*4 === '8'  рівні за значенням (але не за типом) - true 
   console.log(2*4 === '8'); // строг рівність - рівні за типом і значенням - false
   
// Побітові оператоои
// https://learn.javascript.ru/bitwise-operators   