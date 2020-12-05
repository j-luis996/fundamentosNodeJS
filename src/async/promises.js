const nombre = process.env.NOMBRE || 'Extraño'
const TIME = 1000
const repeticiones = 4

const hola = (Nombre)=> {
      return new Promise((resolve, reject)=>{
            setTimeout( () => {
                  console.log('hola, ' + Nombre)
                  resolve(nombre)
            },TIME)
      })
      
}
const hablar = (nombre) => {
      return new Promise((resolve, reject) => {
            setTimeout(() => {
                  console.log('Bla bla bla bla ....')
                  resolve(nombre)
            },TIME)
      })
}
const adios = (nomb) => {
      return new Promise( (resolve,reject) =>{
            setTimeout( () => {
                  console.log('Adios ' + nomb + '....')
                  resolve(nomb)
            },TIME)
      })
}
const conversacion = (nombre, repeticion) =>{
      return new Promise((resolve, reject) => {
            if(repeticion>0){
                  setTimeout( () =>{
                        conversacion(nombre, --repeticion)
                              .then(hablar(nombre))
                              .catch(error => {
                                    console.error('ah habido un error')
                                    console.error(error)
                              })
                  }, TIME)
            }else{
                  setTimeout(()=>{
                        adios(nombre)
                        .then(() => {
                              console.log("terminado el proceso")
                        })
                        .catch(error => {
                              console.error('ah habido un error')
                              console.error(error)
                        })
                  },TIME)
            }
      })
}

console.log("inciando el proceso...")
hola(nombre)
      .then(conversacion(nombre,repeticiones))
      .catch(error => {
            console.error('ah habido un error')
            console.error(error)
      })