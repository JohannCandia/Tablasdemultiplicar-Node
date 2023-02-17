const { crearArchivoTable } = require('./helpers/multiplicar');
const  argv  = require('./config/yargs');
                
    console.clear();

  crearArchivoTable(argv.b, argv.l, argv.h)
      .then(nombreArchivo => console.log(nombreArchivo, 'creada'))
      .catch(err => console.log(err));



