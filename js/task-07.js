// Напишіть функцію savePassword(password), яка приймає пароль та повертає внутрішню функцію,
//     яка приймає рядок та повертає true, якщо рядок співпадає зі збереженим паролем,
//     та false - якщо не співпадає


function savePassword(password) {
    return (userPassword) => password === userPassword;
}

const currentPassword = savePassword("qwert123");
console.log(currentPassword('qwert123'));
console.log(currentPassword('qwerty123'));
