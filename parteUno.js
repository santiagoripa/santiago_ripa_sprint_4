// Challenge `sayGoodbye`
function sayGoodbye(name) {
    return `Adiós, ${name}. Que tengas un buen día.`;
  }
  
  console.log(sayGoodbye("Pepe")); //Ejemplo

  // Challenge `temperatureInC`
  function temperatureInC(temp, unit) {
    if (unit === 'F') {
      const celsius = Math.round((temp - 32) * (5/9));
      return `${celsius}C`;
    } else if (unit === 'C') {
      const fahrenheit = Math.round((temp * 9) / 5 + 32);
     return `${fahrenheit}F`;
    } else {
     return 'Unidad no válida';
    }
  }
  
  //ejemplo
  console.log(temperatureInC(100, 'F'));
  console.log(temperatureInC(77, 'C'));

  // Challenge `makePersonObject`
  function makePersonObject(id, name, email) {
    return {
      id: id,
      name: name,
      email: email,
    };
  }

  // Ejemplo
console.log(makePersonObject(7, 'Cristiano', 'cristiano7ronaldo@gmail.com'));

  // Challenge `getName`
  function getName(person) {
    return `Hola, mi nombre es ${person.name}`;
  }
  
  // Ejemplo
  console.log(getName({ id: 3, name: 'Juan', email: 'juancito@hotmail.com' }));

  // Challenge `appleIndex`
  function appleIndex(array) {
    return array.indexOf('manzana');
  }
  
  // Ejemplo
  console.log(appleIndex(['naranja', 'uva', 'pera', 'banana', 'manzana', 'mango']));

  // Challenge `isItAnApple`
  function isItAnApple(array) {
    return array.map(item => item === 'manzana');
  }
  
  // Ejemplo 
  console.log(isItAnApple(['manzanas', 'Jorge', 'manzana', 'helicóptero', 'apel', 'manzana'])); 
