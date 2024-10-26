//  Написати клас, який буде представляти зоопарк тварин.
//  Створити загальний клас Animal для тварин.
// У зоопарку повинні бути різні типи тварин, такі як ссавці, птахи, рептилії тощо.
// Кожен тип тварин повинен мати свої властивості та методи, наприклад,
//  методи для отримання інформації про тварину та для годівлі тварин.
//  Крім того, зоопарк повинен мати метод для додавання тварин до списку та
// метод для виведення списку всіх тварин у зоопарку.
class Animals {
    constructor(name,type,food){
        this.name = name;        
        this.type = type;
        this.food = food;
    }
    getInfo() {
        console.log(`Name: ${this.name}, Type: ${this.type}`);
    }
    feed() {
        console.log(`${this.name} already ate ${this.food}`);        
    }
}

class Mammals extends Animals{
    constructor(name, type, food, wool) {
        super(name, type, food);
        this.wool = wool;
    }
    getWool() {
        console.log(`Name: ${this.name}, Type: ${this.type}, Wool ${this.wool}`);
    }
};
class Birds extends Animals{
    constructor(name, type, food, wings) {
        super(name, type, food);
        this.wings = wings;
    }
    getWings() {
        console.log(`Name: ${this.name}, Type: ${this.type}, Wings ${this.wings}`);
    }
};

class Reptiles extends Animals{
    constructor(name, type, food, scales) {
        super(name, type, food);
        this.scales = scales;
    }
    getScales() {
        console.log(`Name: ${this.name}, Type: ${this.type}, Scales ${this.scales}`);
    }
};

class Zoo {    
    constructor() {
        this.list = [];
    }
    addAnimal(obj) {
        this.list.push(obj);
    }
    getList() {
        console.log(this.list);        
    }
    removeAnimal(name) {
        this.list=this.list.filter((obj) => obj.name !== name);
    }
}

const king = new Mammals("King", "lion", "meat", "fur");
const bandera = new Birds("Bandera", "goose", "russian", "bayraktare");
const gena = new Reptiles("Gena", "crocodile", "people", "green");

const firstZoo = new Zoo();
firstZoo.addAnimal(king);
firstZoo.addAnimal(bandera);
firstZoo.addAnimal(gena);
firstZoo.getList();
firstZoo.removeAnimal("Gena");
firstZoo.getList();

king.getInfo();
king.getWool();

bandera.feed();
bandera.feed();
bandera.feed();
bandera.feed();
bandera.getInfo();
bandera.getWings();