const { exec,spawn } = require('child_process') 
const { stdout } = require('process')

// exec('ls -al',(err, stdout,sterr) => {
//       if (err){
//             console.err(err)
//             return false
//       }
//       console.log(stdout)
// })

let proceso = spawn('ls',['-la'])
console.log(proceso.pid)
console.log(proceso.connected)

proceso.stdout.on('data', dato => {
      console.log(process.killed)
      console.log(dato.toString())
})
proceso.on('exit',()=>{
      console.log('el proceso termino')
      console.log(proceso.killed)
})