// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім"я користувача через prompt та викликає callback функцію
// greet(name) - колбек, що приймає ім"я та виводить у консоль рядок "Привіт < name > "
// Потрібно реалізувати перевірку, що prompt не порожній

function letMeSeeYourName(callback) {
    let name = "";
do {
    name = prompt("Введіть ім'я користувача");
    } while (!name);
    
callback(name)
}

const greet = (userName) => console.log(`Привіт ${userName}`);


letMeSeeYourName(greet);


