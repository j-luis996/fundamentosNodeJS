const fs = require('fs').promises
const archivo = __dirname+'/archivo.txt'
const option = {encoding: 'utf-8'}
const time = 3000
const contenido=`
este es un texto de prueba
se crea como plantilla para el contenido del archivo
esta solo es una linea de relleno XD
`

const read = async (path,opciones) => {
      try{
            const file = await fs.readFile(path,opciones)
            console.log(file)
            console.log("archivo leido correctamente en: " + path)
      }catch(err){
            console.error(err)
            console.log("el archivo no existe, se creará uno...")
            await write(path,contenido)
            await read(path,opciones)
      }
}
const write = async (path,conten) => {
      try{
            await fs.writeFile(path,conten)
            console.log('el archivo se creo correctamente en: ' + path)
      }catch(error){ 
            console.error(error)
      }
}
const del = async (path) => {
      try{
            await fs.unlink(path)
            console.log('archivo eliminado correctamente...')
      }catch(err){
            console.error("fallo al intentar eliminar el archivo "+err)
      }
}
read(archivo,option)

setTimeout(()=>{
      del(archivo)
},time)