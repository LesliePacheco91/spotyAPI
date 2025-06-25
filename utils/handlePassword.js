const bcryptjs = require ("bcryptjs");

/**
 * Pasa las contraseña sin encriptar
 * @param {*} paswordPlain
 */
const encrypt = async (paswordPlain) =>{
    const hash = await bcryptjs.hash(paswordPlain, 10);
    return hash;

}

/**
 * Pasar contraseña sin encriptar y pasar contraseña encriptada
 * @param {*} paswordPlain
 * @param {*} hashPassword
 */
const compare = async (paswordPlain, hashPassword) =>{

    return await bcryptjs.compare(paswordPlain, hashPassword);

}

module.exports = { encrypt, compare};