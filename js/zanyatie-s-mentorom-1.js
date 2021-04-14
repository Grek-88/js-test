/* variables */

console.log(a);
var a;

let b;
console.log('value:', b);
console.log('typeof:', typeof b);

const c = 5;
console.log(c);

b = 3;
console.log('value:', b);
console.log('typeof:', typeof b);

b = 'hi';
console.log('value:', b);
console.log('typeof:', typeof b);

b = '5';
console.log('value:', b);
console.log('typeof:', typeof b);

console.log(2 + '2' + 2 + 2);
console.log(2 + 2 + '2' + 2);
console.log('2' + 2 + 2);

b = null;
console.log('value:', b);
console.log('typeof:', typeof b);

b = true;
console.log('value:', b);
console.log('typeof:', typeof b);

b = false;
console.log('value:', b);
console.log('typeof:', typeof b);


/* toString */

let value = 1;
let toString = String(value);
console.log('value:', toString);
console.log('typeof:', typeof toString);

toString = value + '';
console.log('value:', toString);
console.log('typeof:', typeof toString);

value = true;
toString = String(value);
console.log('value:', toString);
console.log('typeof:', typeof toString);

toString = value + '';
console.log('value:', toString);
console.log('typeof:', typeof toString);

value = null;
toString = String(value);
console.log('value:', toString);
console.log('typeof:', typeof toString);

value = undefined;
toString = String(value);
console.log('value:', toString);
console.log('typeof:', typeof toString);


/* toNumber */

let value = '1';
let toNumber = Number(value);
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

toNumber = + value;
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

value = '0';
toNumber = Number(value);
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

toNumber = + value;
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

value = '555';
toNumber = Number(value);
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

toNumber = + value;
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

value = '';
toNumber = Number(value);
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

toNumber = + value;
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

value = ' ';
toNumber = Number(value);
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

toNumber = + value;
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

value = 'Julia';
toNumber = Number(value);
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

toNumber = + value;
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

value = undefined;
toNumber = Number(value);
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

toNumber = + value;
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

value = null;
toNumber = Number(value);
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

toNumber = + value;
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

value = '5e';
toNumber = Number(value);
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

value = '5e2';
toNumber = Number(value);
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

value = '5e20';
toNumber = Number(value);
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

toNumber = + value;
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

value = true;
toNumber = Number(value);
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

toNumber = +value;
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

value = false;
toNumber = Number(value);
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

toNumber = +value;
console.log('value:', toNumber);
console.log('typeof:', typeof toNumber);

value = '5a'
console.log(value);
console.log(typeof value);

value = parseInt(value);
console.log(value);
console.log(typeof value);

value = '5.1sm'
console.log(value);
console.log(typeof value);

let valueInt = parseInt(value);
console.log(valueInt);
console.log(typeof valueInt);

let valueFloat = parseFloat(value);
console.log(valueFloat);
console.log(typeof valueFloat);

value = '25.3m';
console.log(value);
console.log(typeof value);

valueInt = parseInt(value);
console.log(valueInt);
console.log(typeof valueInt);

valueFloat = parseFloat(value);
console.log(valueFloat);
console.log(typeof valueFloat);

value = 'length25';
console.log(value);
console.log(typeof value);

valueInt = parseInt(value);
console.log(valueInt);
console.log(typeof valueInt);

valueFloat = parseFloat(value);
console.log(valueFloat);
console.log(typeof valueFloat);


// toNumber

let value = '1';
let toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

value = '0';
toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

value = '';
toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

value = ' ';
toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

value = 'Julia';
toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

value = 1;
toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

value = 0;
toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

value = 5;
toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

value = NaN;
toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

value = Infinity;
toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

value = null;
toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

value = undefined;
toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);