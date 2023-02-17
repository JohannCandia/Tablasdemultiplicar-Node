const fs= require('fs');
var colors = require('colors');

const crearArchivoTable = async(base = 5, listar = false, hasta = 10) => {


    let salida = ``;
   
    
    for (let i = 1; i <= hasta; i++) {
        salida += `${base} x  ${i} = ${base * i}\n`;
        }
        if(listar == true){
            console.log("=============".green)
            console.log(`Tabla del ${base}`.rainbow);
            console.log("=============".green)
            console.log(salida.blue);
            
        }    
    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida );
     return `Tabla del ${base}`;
}
module.exports = {
    crearArchivoTable
}