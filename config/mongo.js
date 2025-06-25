const mongoose = require('mongoose');

const NODE_ENV = process.env.NODE_ENV;

const dbConnect = async () => {
  const DB_URI = (NODE_ENV === 'test') ? process.env.DB_URI_TEST : process.env.DB_URI;

    try {
      const connection = await mongoose.connect(DB_URI);
     return connection;
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error);
      process.exit(1); // Finaliza la aplicación si hay un error
    }
  };
  




module.exports = dbConnect