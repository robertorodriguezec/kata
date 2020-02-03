var colores = ['Introduzca el número de pociones rojo: ','Azul: ','Verde: ','Amarillo: ','Gris: ']
var cantidad =[];
var data = [];
var attack = require('./functions.js');


function color(i){
    process.stdout.write(colores[i]);
}


process.stdin.on('data',function(data){
cantidad.push(data);

    if(cantidad.length < colores.length){
        color(cantidad.length);

    }else{        
                
        /*while (!(cantidad.every(item => item === 0))){  
            cantidad = atacar.atacar(cantidad);
        } */  
        
        //
        for(var i =0;i<cantidad.length;i++){
            cantidad[i] = parseInt(cantidad[i]);              
        }
        console.log(cantidad);        
        console.log("PODER TOTAL: " + attack.attack(cantidad));
            
        
        process.exit();        
    }
    
})

color(0);




