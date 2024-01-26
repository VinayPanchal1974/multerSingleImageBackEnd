const bcrypt = require('bcryptjs');

exports.encodePassword = async(password)=>{
  
    password = await bcrypt.hash(password,10);
    return password 
}


exports.verifyPassword = async (pass,hash)=>{
    return  bcrypt.compare(pass,hash);
 }
 

