// const toGetResult = function (a, b, callback) {
//     return callback(a, b);
// };

// const toGetSum = function (x, y) {
//     return x + y;
// };

// let result = toGetResult(4, 7, toGetSum);
// console.log(result);

// const toGetMult = function (x, y) {
//     return x * y;
// };

// result = toGetResult(6, 8, toGetMult);
// console.log(result);

// const toGetPow = function (x, y) {
//     return x ** y;
// };

// result = toGetResult(3, 8, toGetPow);
// console.log(result);



// const toLearnJs = function (value1, callback1, value2, callback2, value3, callback3) {
//     let x = callback1(value1);
//     let y = callback2(value2);
//     let z = callback3(value3);
//     return x+'. ' + y+'. ' + z+'. ';
// };

// const toRead = function (book) {
//   return `Нужно читать ${book}`;
// };


// const toWrite = function (code) {
//   return `Нужно писать ${code}`;
// };

// const toWatch = function (video) {
//   return `Нужно смотреть ${video}`;
// };

// result = toLearnJs('JS for babies', toRead, 'приложение', toWrite, 'webinars', toWatch);
// console.log(result);

// result = toLearnJs('Docs', toRead, 'Function', toWrite, 'Master-class', toWatch);
// console.log(result);


// const toDo = function (x) {
//     return `Нужно делать ${x}`;
// }

// result = toLearnJs('Home Work', toDo, 'Class Work', toDo, 'Practis', toDo);
// console.log(result);

// const toLearnProrgsming = function(array, funct) {
//     console.log(array);
//     // let value = '';
//     for (const arr of array) {
//         console.log(arr);
//         console.log(funct(arr));
//         // return funct(arr);
//     };
//     // return value;
//     // console.log(funct);


// };

// result = toLearnProrgsming(['Home Work', 'Class Work', 'Practis'], toDo);

// const product = {
//     name: 'apple',
//     weight: 1,
//     price: 20,
//     toChangeWeight(newWeight) {
//         return this.weight = newWeight;
//      },
//     toChangePrice(newPrice) {
//         return this.price = newPrice;
//     },
//     toChangeAllProps(value1 = 'product', value2 = '0', value3 = '0') {
//         this.name = value1;
//         this.weight = value2;
//         this.price = value3;
//         return (this.name, this.weight, this.price);
 
//     }

// };

// console.log(product);
// console.log(product.weight);
// console.log(product['price']);

// product.toChangeWeight(5);
// console.log(product);
// console.log(product.weight);
// console.log(product['price']);

// product.toChangePrice(15);
// console.log(product);
// console.log(product.weight);
// console.log(product['price']);

// const product1 = {
//     name: 'banan',
//     price: 60,
//     weight: 0
// };

// const product2 = {
//     name: 'ananas',
//     price: 100,
//     weight: 0
// };

// console.log(product1, product2);
// product.toChangePrice.call(product1, 55);
// console.log(product1, product2);
// product.toChangePrice.call(product2, 78);
// console.log(product1, product2);

// product.toChangeAllProps();
// console.log(product);

// const props = ['grape', 10, 100];
// product.toChangeAllProps.call(product1, props);
// console.log(product1);
// product.toChangeAllProps.apply(product1, props);
// console.log(product1);

// const transform = {
//     name: 'Bambolbi',
//     speed: 160,
//     maxSpeed: 170,
//     charge: '65%',
// };

// transform.toLowCharge = function () {
//     this.charge = (parseInt(this.charge) - 1)+'%';
//     console.log(this.charge);
// };

// transform.toUpCharge = function () {
//     this.charge = (parseInt(this.charge) + 1)+'%';
//     console.log(this.charge);
// };

// transform.toLowCharge();
// transform.toUpCharge();

// transform.toUpSpeed = function (value) {
//     const {speed, maxSpeed } = this;

//     return maxSpeed <= speed + value ? 
//         speed += value :
//         console.log('куда разогнался ...');
// };

// transform.toUpSpeed(5);
// console.log(transform.speed);

// transform.toLowerSpeed = function (value) {
//     let {speed, maxSpeed } = this;
//     return speed - value > 0 ?
//         speed -= value:
//      console.log('Не тормози ...');
// };

// transform.toLowerSpeed(170);
// console.log(transform.speed);

//// transform.toUpSpeed = function (value) {
////     let { maxSpeed, speed } = this;
////     return maxSpeed <= speed + value ? speed += value : console.log("скорость превышена");
        
//// };

//// transform.toUpSpeed(20);
//// console.log(transform.speed);

//// transform.toLowSpeed = function (a) {
////     const { speed } = this;
    
////     return speed - a < 0 ? speed -= a : console.log("не тормози");
       
//// };
    
//// transform.toLowSpeed(20);
//// console.log(transform.speed);



const user = {
    _name: 'Georgy',
    _age: 32,
    _gender: 'male',
    get name() {
        return this._name;

    },
    set name(value) {
        return this._name = value;
    },
    get gender() {
        return this._gender;
    },
    set gender(value) {
        return this._gender = value;
    },
    get age() {
        return this._age;
    },
    set age(value) {
        return this._age += value;
    },
    toPaint(...img) {
        // return `Я рисую ${img}`;
        return `Я рисую ${img}`;
        
    },
};

console.log(user);

console.log(user.name);

user.name = 'Anna';
console.log(user.name);

user.gender = 'female';
console.log(user.gender);

user.age = 1;
console.log(user.age);


const user1 = {
    _name: 'Anna',
    _age: 12,
    _gender: 'female',
};

user.toPaint.call(user1);
console.log(user.toPaint.call(user1, 'Пикасо'));

console.log(user.toPaint.call(user1, 'Малевича'));

const array = ['дерево', ' дом', ' дым'];
console.log(user.toPaint.call(user1, array));