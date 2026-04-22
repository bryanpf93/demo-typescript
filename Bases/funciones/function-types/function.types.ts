(() => {

  const addNumber = (a: number, b: number) => a + b
  const greet = (name: string) => `Hola ${name}`
  const saveTheWorld = () => `El mundo esta salvado!`

  // let myFunction;
  // myFunction = 10
  // console.log(myFunction)


  // let myFunction: (y: number, z: number) => number
  // myFunction = addNumber
  // console.log(myFunction(1, 2))


  // let myFunction: (y: string) => string
  // myFunction = greet
  // console.log(myFunction("Fernando"))

  let myFunction: () => string
  myFunction = saveTheWorld
  console.log(myFunction())

})()