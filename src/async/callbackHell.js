const nombre = process.env.NOMBRE || 'Extraño'
const TIME = 1000
const veces = 4

const hola = (Nombre, callback)=> {
      setTimeout( () => {
            console.log('hola, ' + Nombre)
            callback(Nombre)
      },TIME)
}
const hablar = (callbackHablar) => {
      setTimeout(() => {
            console.log('Bla bla bla bla ....')
            callbackHablar ()
      },TIME)
}
const adios = (nomb, otroCallback) => {
      setTimeout( () => {
            console.log('Adios ' + nomb + ' ....')
            otroCallback()
      },TIME)
}

const conversacion = (nombre, repeticion, callback) =>{
      if(repeticion>0){
            hablar(()=>{
                  conversacion (nombre, --repeticion,callback)
            })
      }else{
            adios(nombre, callback)
      }
}


console.log('Iniciando Proceso......')
hola(nombre,nombre =>{
      conversacion(nombre, veces, () =>{
            console.log('Terminando proceso...')
      })
})
//--este es un ejemplo de lo que NO se debe hacer
// hola(nombre, nom => {
//       hablar(() => {
//             hablar(() => {
//                   adios(nom, () => {
//                         console.log('Terminando proceso')
//                   })
//             })
//       })
// })
