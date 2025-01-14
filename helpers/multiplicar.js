const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

const crearArchivo = (base = 5) => {
    return new Promise(
        (resolve,rejects)=>{
            console.clear();
            console.log("Tabla del "+base);
            salida='';
            for(let i = 0; i<11; i++){
            salida+=(`${base} x ${i}= ${base*i}\n`);
            }
            let nombreArchivo=`tabla-${base}.txt`;
            fs.writeFile(nombreArchivo,salida,(err)=>{
                if( err ){
                    rejects(err);
                }else{
                    resolve(nombreArchivo);
                }
            })
        }
    )
}

module.exports = {crearArchivo : crearArchivo}