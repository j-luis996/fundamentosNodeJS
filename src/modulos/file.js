const fs2=require('fs').promises
const fs=require('fs')
//este es un ejemplo con promesa
const read = async () => {
      const file = await fs2.readFile(__dirname+'/archivo.txt',{encoding: 'utf-8'})
      console.log(file)
}
function leer(ruta){
      fs.readFile(ruta, (err, data) =>{
            if(err){
                  console.error('El archivo'+ruta+' no existe',err)
            }else{
                  console.log(data.toString())
            }
      })
}
function escribir(ruta, contenido, cb){
      fs.writeFile(ruta, contenido,function (err){
            if(err){
                  console.error('no e podido escribir',err)
            }else{
                  console.log('archivo escrito correctamente')
            }
      })
}
function borrar(ruta,cb){
      fs.unlink(ruta,function (err) {
            if(err){
                  console.error('no se pudo eliminar el archivo'+ruta,err)
            }else{
                  console.log('archivo eliminado')
            }
      })
}
// read()
escribir(__dirname+'/archivo.txt','soy un archivo nuevo  dssdvs', console.log)
leer(__dirname + '/archivo.txt')
borrar(__dirname+'/archivo.txt',console.log)