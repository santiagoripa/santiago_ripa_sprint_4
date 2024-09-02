const characters = [
    {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      eye_color: "blue",
      gender: "male",
    },
    {
      name: "Darth Vader",
      height: "202",
      mass: "136",
      eye_color: "yellow",
      gender: "male",
    },
    {
      name: "Leia Organa",
      height: "150",
      mass: "49",
      eye_color: "brown",
      gender: "female",
    },
    {
      name: "Anakin Skywalker",
      height: "188",
      mass: "84",
      eye_color: "blue",
      gender: "male",
    },
  ];
  
  // Challenge `getCharacterNameByIndex`
  function getCharacterNameByIndex(characters, index) {
    if (index >= 0 && index < characters.length) {
      return `El personaje es ${characters[index].name}`;
    } else {
      return 'Índice fuera de rango';
    }
  }
  
  // Ejemplos
  console.log(getCharacterNameByIndex(characters, 3)); // El personaje es Anakin Skywalker
  console.log(getCharacterNameByIndex(characters, 1)); // El personaje es Darth Vader
  console.log(getCharacterNameByIndex(characters, 5)); // Índice fuera de rango
  
  
  // 1 Obtener caracteres con masa superior a 100
  const massGreaterThan100 = characters.filter(c => c.mass > 100);
  console.log(massGreaterThan100);
  // [{ name: "Darth Vader", height: "202", mass: "136", eye_color: "yellow", gender: "male" }]
  
  
  // 2 Obtener personajes con altura inferior a 200
  const heightLessThan200 = characters.filter(c => parseInt(c.height) < 200);
  console.log(heightLessThan200);
  // Todos menos Darth Vader

  // 3 Obtener una matriz con todos los nombres
  const namesArray = characters.map(c => c.name);
  console.log(namesArray);
  // ["Luke Skywalker", "Darth Vader", "Leia Organa", "Anakin Skywalker"]  

  // 4 Obtener un array de objetos con sólo las propiedades nombre y altura
  const nameHeightArray = characters.map(c => ({ name: c.name, height: c.height }));
  console.log(nameHeightArray);
  // [{ name: "Luke Skywalker", height: "172" }, ...]

  // 5 Encontrar el primer personaje con ojos marrones.
  const firstBrownEyed = characters.find(c => c.eye_color === 'brown');
  console.log(firstBrownEyed);
  // { name: "Leia Organa", height: "150", mass: "49", eye_color: "brown", gender: "female" }

  // 6 Obtener todos los personajes masculinos
  const maleCharacters = characters.filter(c => c.gender === 'male');
  console.log(maleCharacters);
  // Luke, Darth Vader, Anakin

  // 7 Obtener todos los personajes femeninos
  const femaleCharacters = characters.filter(c => c.gender === 'female');
  console.log(femaleCharacters);
  // Leia Organa

  // 8 Obtener una matriz con todas las alturas
  const heightsArray = characters.map(c => c.height);
  console.log(heightsArray);
  // ["172", "202", "150", "188"]
  
  // 9 Imprimir en la consola los nombres de todos los personajes.
  characters.forEach(c => console.log(c.name));
  // Imprime todos los nombres Luke, Darth Vader, Leia, Anakin

  // 10 Encontrar el primer personaje que tenga ojos de color azul y que su peso sea mayor a 80
  const firstBlueEyesMassOver80 = characters.find(c => c.eye_color === 'blue' && c.mass > 80);
  console.log(firstBlueEyesMassOver80);
  // { name: "Anakin Skywalker", height: "188", mass: "84", eye_color: "blue", gender: "male" }

  // 11 Verificar si todos los personajes con ojos azules tienen una altura mayor a 170.
  const allBlueEyesTallerThan170 = characters.every(c => c.eye_color !== 'blue' || parseInt(c.height) > 170);
  console.log(allBlueEyesTallerThan170);
  // true, porque Luke y Anakin cumplen la condición
  

  