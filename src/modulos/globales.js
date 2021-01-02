// console.log(global)

console.log(setInterval)
let i=0
const intervalo = setInterval(()=>{
      if(i===5){
            clearInterval(intervalo)
      }
      i++
      console.log('hola')
},1000)