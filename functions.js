
//Obtener índices de los n mayores de una matriz ej:[2 3 8 0 0] => retorna una matriz con los índices
//[1 2 3] 

function indicesNMax(cantidad,n){
    var indicesMayores= [];  
    var cantidadAux = cantidad.slice();  
    for(var i=0;i<n;i++){
        mayor = Math.max.apply(null, cantidadAux)              
        indice = cantidadAux.indexOf(mayor);        
        indicesMayores.push(indice);
        //encero el item que extraigo para que no tome en cuenta la próxima vez
        cantidadAux[indice]=0;        
    }    
    return indicesMayores;
}
//resta 1 de los n números mayores de la matriz 
function restarEnOrden(cantidad,indicesMayores){    
    for(var i=0;i<indicesMayores.length;i++){
        cantidad[indicesMayores[i]]-= 1;               
    }
    return cantidad;
}
//la función resta de la matriz "cantidad" el número de pociones(1-5) "items",
// y devuelve una nueva matriz ya restada
function resta(cantidad,items){
    indicesMax = indicesNMax(cantidad,items);    
    cantidad = restarEnOrden(cantidad,indicesMax);    
    return indicesMax;   
}
//decidir si se empieza a atacar con grupos de 4 o 5, en los dos cada elemento tiene 5%,
//sin embargo si empezamos con 4 puede ser más eficiente. No pasa con el resto de ataques ej: 3,2,1.
function decidir45(cantidad){
    var filtrados = 0;
    var filtradosl = 0;    
    cantidad5 = cantidad.slice();
    cantidad4 = cantidad.slice();
    poder5 = 0;
    poder4 = 0;
    var poderItem = [3,5,10,20,25];
    while(!(cantidad5.every(item => item === 0))){
        filtrados = cantidad5.filter(item => item > 0);        
        filtradosl = filtrados.length;               
        if (filtradosl == 2){filtradosl = 1}        
        resta(cantidad5,filtradosl);
        poder5 += poderItem[filtradosl-1];        
    }
    while(!(cantidad4.every(item => item === 0))){
        filtrados = cantidad4.filter(item => item > 0);        
        filtradosl = filtrados.length;               
        if (filtradosl == 5){filtradosl = 4}        
        if (filtradosl == 2){filtradosl = 1}        
        resta(cantidad4,filtradosl);
        poder4 += poderItem[filtradosl-1];        
    }
    if(poder4>poder5){
        return 4;
    }else{
        return 5;
    }
}
//Main function
function attack(cantidad){
    var filtrados = 0;
    var filtradosl = 0;
    var poderItem = [3,5,10,20,25];
    var poderTotal = 0;
    var d45 = decidir45(cantidad);
    console.log("4 o 5" + d45);
    var nColor = ["Rojo","Azul","Verde","Amarillo","Gris"]
    var nAtaque = 1;
    while(!(cantidad.every(item => item === 0))){
        filtrados = cantidad.filter(item => item > 0);        
        filtradosl = filtrados.length;
        if (filtradosl == 5 && d45 == 4){filtradosl = 4}        
        if (filtradosl == 2){filtradosl = 1}        
        indicesM = resta(cantidad,filtradosl);
        console.log("Ataque " + nAtaque + " con los colores: ");
        for(var i=0; i< indicesM.length; i++){ console.log(" " + nColor[indicesM[i]]);}        
        console.log("Cantidad restante de pociones: ")
        console.log(cantidad);    
        poderTotal += poderItem[filtradosl-1];
        console.log("PODER DE ATAQUE: " + poderItem[filtradosl-1]);
        nAtaque ++;
    }
    return poderTotal;
}
module.exports.attack = attack;

