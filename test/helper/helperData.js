const testAuthRegister = {
    "name":"lesli",
    "age":30,
    "email":"lesli@gmail.com",
    "password":"abc1234"
};

const testAuthLogin = {
    "email":"lesli@gmail.com",
    "password":"abc1234"
};

const unregisteredUser = {
  "email":"userA@gmail.com",
  "password":"abc1234"
}

const testAuthRegisterAdmin = {
    name: "Admin",
    age: 20,
    email: "Admin_test@gmail.com",
    role: ["admin"],
    password: "12345678",
  }; 

const testAuthLoginAdmin = {
    "email":"Admin_test@gmail.com",
    "password":"12345678"
};

const testStorageRegister = {
    url: "http://localhost:3001/file-test.mp3",
    filename: "file-test.mp3"
  };

  const testDataTrack = {
    name: "Ejemplo",
    albun: "Ejemplo",
    cover: "http://image.com",
    artist: {
      name: "Ejemplo",
      nickname: "Ejemplo",
      nationality: "VE",
    },
    duration: {
      start: 1,
      end: 3,
    },
    mediaId: "",
  };
  

  module.exports = {
    testAuthRegister,
    testAuthLogin,
    testAuthLoginAdmin,
    testAuthRegisterAdmin,
    testStorageRegister,
    unregisteredUser,
    testDataTrack
  }