const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                }).check((argv, options) => {
                    if (isNaN(argv.b)) {
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                }).option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    describe: 'Lista los elementos',
                    default: false          
                }).option('h',{
                    alias: 'hasta',
                    type: 'number',
                    describe: 'Hasta que numero se multiplica',
                    default:10,
                    demandOption: true
                     }).check((argv, options) => {
                        if (isNaN(argv.h)) {
                            throw 'Tiene que ser un numero entero'
                        }
                        return true;
                     })
                    .argv;

module.exports = argv;