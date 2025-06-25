const jwt = require("jsonwebtoken");
const JWT_SECRET  = process.env.JWT_SECRET;


/**
 * Debes de pasar el objeto del usuario
 * @param {*} user
 */
//firmar
const tokenSign = async (user) =>{   

    const sign = await jwt.sign(
        {
            _id: user.id,
            role: user.role,
        },
        JWT_SECRET,
        {
            expiresIn:"2h", // tipo de expiración de la sesion
        }
    );
    return sign;
}

/**
 * Debes de pasar el tokens de sesion JWT
 * @param {*} tokenJWT
 */
// verificar token
const verifyToken = async (tokenJWT) => {


    try {
        
        return jwt.verify(tokenJWT, JWT_SECRET)
        
    } catch (e) {
        return null
    }
    
}

module.exports = { tokenSign, verifyToken}