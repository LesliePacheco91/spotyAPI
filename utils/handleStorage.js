const multer = require('multer');
// prepara la ubicación del la carpeta de almacenamiento
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage);
    },
    filename:function(req, file, cb){
        // renombra el archivo adjunto
        const ext = file.originalname.split(".").pop(); // toma la extension del archivo ajunto
        const filename = `file-${Date.now()}.${ext}`;
        cb(null, filename);
    },
});

const uploadMiddlewere = multer({storage:storage});

module.exports = uploadMiddlewere