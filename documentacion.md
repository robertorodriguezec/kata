## Documentación
#Solución al problema del brujo y las pociones 01/02/2020

** Resolución del problema **

Realizando un análisis de los porcentajes por número de pociones, podemos deducir que:

- La utilidad máxima que se puede obtener por 1 = 3%; 2 = 6%; 3 = 10%; 4 = 20%; 5 = 25%.
	Como podemos visualizar en casi todas es la misma propuesta que en el ejercicio,
	a excepción del 2, que inicialmente es del 5%, pero si lo dividimos en 2 de 1, podemos
	obtener 6%. Por lo que descartamos usar la utilidad del 5%, y no usaremos ataques con dos pociones.
- La utilidad máxima por poción con 1 = 3%; con 2 = 3%; con 3=3.33%; con 4 y 5 es del 5%. Por lo tanto observamos
	que la utilidad por item es directamente proporcional al número de pociones que usamos en el mismo ataque.
- Con ataques de 4 y 5 pociones, obtenemos el mismo resultado. Sin embargo debemos tomar en cuenta que no solo es un ataque,
	sino varios, por lo tanto debemos usar esta característica para maximizar la utilidad. Un claro ejemplo es el caso #3 
	expuesto en el problema donde poseemos una matriz[2 2 2 1 1], donde podemos realizar 2 ataques de 4, o 1 ataque de 5 y 1 de 3. 
	Obteniendo máxima utilidad con dos ataques de 4. Es decir tenemos que analizar primero las combinaciones, no siempre un
	ataque de 5 va a maximizar al utilidad.

La solución más obvia sería realizar todas las combinaciones y retornar la que genere máxima utilidad, sin embargo es la que más ineficiente, 
dando como resultado una complejidad de O(n!) que sería una explosión combinatoria, prácticamente usando mera fuerza bruta.

Como se analizó al inicio la utilidad por item es directamente proporcional al número de pociones, pero se debe analizar el caso especial de 4 y 5.

En mi algoritmo, propongo analizar primero qué sería más conveniente, iniciar con ataques de 4 o 5, después de realizar este análisis empezamos a atacar con 5 o 4,
después con 3 y finalmente con 1, recuerden que con dos es ineficiente y por eso no se toma en cuenta.

** Archivos y utilización**

Se codificó 3 archivos:

- functions.test.js donde se crearon las pruebas, basados en los datos del problema.
- app.js es el archivo principal.
- functions.js que es el repositorio de las funciones que se escribieron para resolver el problema.

Para iniciar el programa, iremos a la línea de comando y escribiremos node app.js a continuación nos pedirá que ingresemos las cantidades de pociones que tendremos
por color. A continuación visualizaremos:
- Una matriz que representa la cantidad de pociones por color que acabamos de ingresar.
- El número de ataque y los colores que se usaron en dicho ataque
- Una matriz que representa la cantidad de pociones por color después del ataque
- El poder del ataque que acabamos de ejecutar.
- Después de ejecutar n ataques y usar todas las pociones, se visualizará el total de poder alcanzado.

Para realizar los tests, vamos a la línea de comando y ejecutamos la línea: npm run test a continuación visualizaremos los resultados de los test que se encuentran
en el archivo functions.test.js los cuáles se aprobaron satisfactoriamente.

** Problemas y Recomendaciones**

Durante el desarrollo, se tuvieron problemas al modularizar una función, por lo que se podrá visualizar en el código de functions.js algunas líneas redundantes,
dado que ya se alcanzaron los objetivos propuestos en el problema y por falta de tiempo no se pudo corregir. 
Si se posee tiempo adicional se recomienda resolver el problema usando dynamic programming y recursion, con lo que obtendremos los mejores resultados en cuanto 
a rendimiento.







