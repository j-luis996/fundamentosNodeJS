//esta libreria viene en el objeto global, no es necesario importar nada
process.on('beforeExit', () =>{
      console.log("el proceso va a acabar")
})
process.on('exit', () =>{
      console.log("el proceso a cabó")
      setTimeout(()=>{
            console.log('esto no se va a ver')
      },1000)
})
process.on('uncaughtException',(err, origen) =>{
      console.log('error no capturado')
      console.error(err)
      console.error(origen)
})

functionQuenoExiste()
console.log('si el error no se captura este mensaje no sale')
// process.on('uncaughtRejection') promesas rechazadas y no capturadas