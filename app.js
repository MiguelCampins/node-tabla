const { createFile } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear()

//Necesita instalara el paquete yargs de npm
console.log( argv );


//process.argv acceder a los valores escritos por consola 
// const [, ,arg3 = 'base=5'] = process.argv
// const [ , base = 5 ] = arg3.split('='); 
// console.log(base);

//const base = 2;

createFile(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log( err ))

//en consola: node app -b=4 -l -h=10