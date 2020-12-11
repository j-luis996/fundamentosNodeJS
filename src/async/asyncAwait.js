const nombre = process.env.NOMBRE || 'Extraño'
const TIME = 1000
const repeticiones = 4

const hola = async (Nombre)=> {
      return new Promise((resolve, reject)=>{
            setTimeout( () => {
                  console.log('hola, ' + Nombre)
                  resolve(nombre)
            },TIME)
      })
      
}
const hablar = async (nombre) => {
      return new Promise((resolve, reject) => {
            setTimeout(() => {
                  console.log('Bla bla bla bla ....')
                  resolve(nombre)
            },TIME)
      })
}
const adios = async (nomb) => {
      return new Promise( (resolve,reject) =>{
            setTimeout( () => {
                  console.log('Adios ' + nomb + '....')
                  resolve(nomb)
            },TIME)
      })
}
async function main(){
      await hola(nombre)
      await hablar(nombre)
      await hablar(nombre)
      hablar(nombre)
      await adios(nombre)
      console.log('Termina el proceso...')
}

console.log('empezando proceso....')
main()
