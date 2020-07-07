let mySingleton = (function () {
  console.log('criando a variavel Instance');
  let instance;

  function init() {
    function privateMethod() {
      console.log('Eu sou privado!');
    }

    let privateVariable = 'Eu tbm sou privado!';
    let privateRandomNumber = Math.random();
    console.log(privateRandomNumber);

    return {
      publicMethod: function () {
        console.log('O publico consegue me ver');
      },

      publicProperty: 'Eu tbm sou publico',

      getRandomNumber: function () {
        return privateRandomNumber;
      },
    };
  }

  return {
    getInstance: function () {
      if (!instance) {
        console.log('o valor da Instance era null, criando uma nova Instance!');
        instance = init();
      }

      return instance;
    },
  };
})();

let myBadSingleton = (function () {
  let instance;

  function init() {
    let privateRandomNumber = Math.random();
    console.log(privateRandomNumber);

    return {
      getRandomNumber: function () {
        return privateRandomNumber;
      },
    };
  }

  return {
    getInstance: function () {
      instance = init();
      return instance;
    },
  };
})();

console.log('criando a variavel singleA');
let singleA = mySingleton.getInstance();
console.log('criando a variavel singleB');
let singleB = mySingleton.getInstance();
console.log('usando mySingleton, O valor de A e B são iguais? ');
console.log(singleA.getRandomNumber() === singleB.getRandomNumber());

let badSingleA = myBadSingleton.getInstance();
let badSingleB = myBadSingleton.getInstance();
console.log('usando o myBadSingleton, O valor de A e B são iguais? ');
console.log(badSingleA.getRandomNumber() === badSingleB.getRandomNumber());
