

function buscarNoCeros(cantidad){
    for(var i=0;i<cantidad.length;i++){
        if (cantidad[i] > 0){
            switch (true) {
                case (i==0):
                    cantidad[i] -=1;
                    console.log("Rojo");                    
                break;
                case (i==1):
                    cantidad[i] -=1;
                    console.log("Azul")                    
                break;
                case (i==2):
                    cantidad[i] -=1;
                    console.log("Verde")                    
                    
                break;
                case (i==3):
                    cantidad[i] -=1;
                    console.log("Amarillo")                    
                    
                break;      
                case (i==4):
                    cantidad[i] -=1;
                    console.log("Gris")                    
                break;    
                      
              }
        }
    }
    return cantidad;
};

function quitardesde5(cantidad){
    var filtrados = cantidad.filter(item => item > 0);
    var filtradosl = filtrados.length;
    if (filtradosl ==0){
        return 0;
    }
    
    quitardesde5(cantidad -1);

    
};

function buscarNoCerosDesde(cantidad,desde){
    power5 = quitardesde5(cantidad);
    power4 = quitardesde4(cantidad);
    power3 = quitardesde3(cantidad);    
    power2 = quitardesde2(cantidad);    
    power1 = quitardesde1(cantidad);
    }
    return power;
};



function quitar4(cantidad){
    for(var i=0;i<cantidad.length;i++){
        if (cantidad[i] > 0){
            switch (true) {
                case (i==0):
                    cantidad[i] -=1;
                                 
                break;
                case (i==1):
                    cantidad[i] -=1;
                    
                break;
                case (i==2):
                    cantidad[i] -=1;
                    
                    
                break;
                case (i==3):
                    cantidad[i] -=1;
                    console.log(cantidad[i] + "cantidad en 4")
                    
                    
                break;      
              }
        }
    }
    return cantidad;
    
}

function quitar5(cantidad){
    for(var i=0;i<cantidad.length-1;i++){
        if (cantidad[i] > 0){
            switch (true) {
                case (i==0):
                    cantidad[i] -=1;
                    
                break;
                case (i==1):
                    cantidad[i] -=1;
                    
                break;
                case (i==2):
                    cantidad[i] -=1;
                    
                    
                break;
                case (i==3):
                    cantidad[i] -=1;
                    
                    
                break;  
                case (i==4):
                    cantidad[i] -=1;
                    
                break;        
              }
        }
    }
    return cantidad;
    
}



function evaluar45(cantidad){
    //realizar las combinaciones hasta que tenga un 0
    // evaluar con 4
    cuatro = quitar4(cantidad);
    cinco = quitar5(cantidad);
    var filtrados4 = cuatro.filter(item => item > 0);
    var filtradosfour = cuatro.length;
    console.log(filtradosfour);
    var filtrados5 = cinco.filter(item => item > 0);
    var filtradosfive = cinco.length;
    console.log(filtradosfive+"five");
    console.log(filtradosfour+"four");
    if(filtradosfour>filtradosfive){
        cantidad=cuatro;        
        console.log("Rojo");
        console.log("Azul");
        console.log("Verde");
        console.log("Amarillo");
    }else{
        console.log("Rojo");
        console.log("Azul");
        console.log("Verde");
        console.log("Amarillo");
        console.log("Gris");
    }
       
    return cantidad;

    
}

function atacar(cantidad){
    cantidad = evaluar45(cantidad);
    cantidad = buscarNoCeros(cantidad);
    
    
    var filtrados = cantidad.filter(item => item > 0);
    var filtradosl = filtrados.length;
    var power = 0;
    console.log("ataque");
    console.log(filtradosl+"filtrados");   
    
    switch (true) {        

        case(filtradosl<1):
            cantidad = evaluar45(cantidad);
        case (filtradosl<2):
            cantidad=buscarNoCeros(cantidad);
            power = 20;
        break;        
        case (filtradosl<3):
            cantidad=buscarNoCeros(cantidad);            
            power = 10;
        break;
        case (filtradosl<4):
            cantidad=buscarNoCeros(cantidad);            
            power = 3;
        break;      
      }
    console.log(power.toString());
    return cantidad;
    console.log(cantidad);
    
}

function rec(prices, length) {
    if (length === 0) return 0;
    const ps = prices.slice(0, length);
    const all = ps.map((p, l) => p + rec(prices, length - l - 1));
    return Math.max(...all);
}

module.exports.atacar = atacar;
module.exports.quitar4 = quitar4;