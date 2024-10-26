// Напишіть функцію makeCounter, яка повертає іншу функцію,
//     яка рахує та виводить у консоль кількість своїх викликів

const makeCounter = () => {
    let start = 0;
    return () => start += 1;
}

const count = makeCounter();
console.log(count());
console.log(count());
console.log(count());
console.log(count());
