//documentacion moment
//https://momentjs.com/docs/
import moment from 'moment';

let ahora = moment();
let otroAhora=moment();

otroAhora.set('year',2005);
otroAhora.set({'month' : 11, 'date': 15});

ahora.utcOffset("-06:00");
console.log(ahora.format('YYYY-MM-DD hh:mm:ss A'));
//la contraparte de add() es el metodo substract() 
console.log(ahora.add(3,'months').add(8,'days').add(3,'years').format('YYYY-MM-DD hh:mm:ss A'));

console.log(otroAhora.format('YYYY-MM-DD hh:mm:ss A'))

console.log(moment('2010-10-20').isBefore('2010-10-21'));
console.log(moment('2010-10-20').isSame('2010-10-20'));
console.log(moment('2010-10-20').isAfter('2010-10-19'));
console.log(moment('2010-10-20').isBetween('2010-10-19', '2010-10-25'));