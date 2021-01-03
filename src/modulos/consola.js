console.log('muestra un mensaje')
console.info('muestra informacion de una accion')
console.error('muestra un error')
console.warn('muestra una alerta')
var tabla = [{
      a: 1,
      b: 2
},
{
      a: 3,
      b: 4
}
]
console.table(tabla)

console.group('conversacion')//permite agrupar un grupo de logs
console.log('bla bla bla...')
console.log('bla bla bla...')
console.log('bla bla bla...')
console.groupEnd('conversacion')

console.count('veces')
console.count('veces')
console.count('veces')
console.countReset('veces')
console.count('veces')
console.count('veces')