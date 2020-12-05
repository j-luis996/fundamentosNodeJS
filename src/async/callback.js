const nombre = process.env.NOMBRE || 'Extraño'
const TIME = 1000

function hola(Nombre, callback){
      setTimeout( () => {
            console.log('hola, ' + Nombre)
            callback(Nombre)
      },TIME)
}
function adios(nomb, otroCallback){
      setTimeout( () => {
            console.log('Adios ' + nomb + ' ....')
            otroCallback()
      },TIME)
}

console.log('Iniciando Proceso......')

hola(nombre, nom => {
      adios(nom, () => {
            console.log('Terminando proceso')
      })
})
