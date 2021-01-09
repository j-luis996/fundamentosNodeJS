// const bcrypt = require ('bcrypt');
import bcrypt from 'bcrypt';
const password = '1234segura!';
const saltRound = 2048;
// bcrypt.hash(password, 5, function (error, hash){
//       console.log(hash);
//       bcrypt.compare("1234segura!",hash, function(error,res){
//             console.log(res);
//       })
// });
bcrypt.hash(password, saltRound)
      .then(hash => { 
            console.log("perfecto, aqui esta el hash ", hash); 
            bcrypt.compare(password,hash)
                  .then((result)=>{
                        console.log(result);
                  }).catch(error=>{
                        console.error(error);
                  });
      }).catch(error => { 
            console.error(error); 
      });