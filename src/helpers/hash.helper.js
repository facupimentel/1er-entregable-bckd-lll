import { genSaltSync, hashSync, compareSync } from "bcrypt";
//nivel de seguridad, hashea en base a ese nivel, compara hasheos

/**
 * @createHash
**/

function createHash(password){
    const salt = genSaltSync(10); 
    const hashPassword = hashSync(password, salt); 
    return hashPassword;
}


export {createHash}
