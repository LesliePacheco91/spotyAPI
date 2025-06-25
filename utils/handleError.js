const handleHttpError = (res, message = "algo sucedio", code = 403) =>{
    res.status(code);
    res.send({errpr:message});
}

// desestrucuracion 
module.exports = {handleHttpError}