//Create a new function in regular and arrow types which should receive a number and will print in console if that number is either odd or even

function oddOrEven(num) {
  if (num % 2 === 0) {
    console.log('el numero es par');
  } else {
    console.log("el numero es impar");
  }
}

const arrowOddOrEven = num => num % 2 === 0 ? console.log('El número ' + num + ' es par') : console.log('El número ' + num + ' es impar');

arrowOddOrEven(4);
oddOrEven(3);