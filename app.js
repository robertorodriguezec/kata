var colores = ['Rojo','Azul','Verde','Amarillo','Gris']
var cantidad =[];
var data = [];
var atacar = require('./functions.js');

function color(i){
    process.stdout.write(colores[i]);
}


process.stdin.on('data',function(data){
cantidad.push(data.toString().trim());

    if(cantidad.length < colores.length){
        color(cantidad.length);
                
    }else{        
        console.log(cantidad)        
        while (!(cantidad.every(item => item === 0))){  
            cantidad = atacar.atacar(cantidad);
        }         
        process.exit();        
    }
    
})

color(0);
