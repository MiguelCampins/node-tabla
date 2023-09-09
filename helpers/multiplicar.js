const fs = require('fs');
var colors = require('colors');

const createFile = async( base = 5, listar = false, hasta = 10) => {

    try {

        let salida, consola = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${ base * i}\n`;
            consola += `${base} ${colors.red('x')} ${i} = ${ base * i}\n`;
        }
        fs.writeFileSync(`./tablas/tabla_${base}.txt`, salida)

        if(listar){
            console.log('==============================')
            console.log(`${colors.bgMagenta('Tabla de multiplicar del ')} ${base}`)
            console.log('==============================')
            console.log(consola)
        }

        return `tabla_${base}.txt`

    } catch (err) {
        throw err;
    }
}

module.exports = {
    createFile
}