/*5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean mayor que 18*/
 /*  const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const filtar = ages.filter(ages => ages > 18);
console.log(filtar);
*/
/*5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los valores que sean par.*/
/*const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const numero = ages.filter(numero =>{
    if(numero % 2 === 0){
        return numero;
    }else{
        return false;
    }
});
console.log(numero);
*/
/*5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'.*/
  /*  const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
]

const soloLeague = streamers.filter((streamers)=> streamers.gameMorePlayed === 'League of Legends');
console.log(soloLeague);
*/

/*5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación.*/
/*const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
]
const newStre = streamers.filter(function(propiedad)){
	return propiedad.name.includes('u');
}
console.log(newStre);
*/

/*5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.
Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35.*/

const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
                {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
                {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
                {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
            ];

const userA = streamers.filter((item)=> item.gameMorePlayed.includes('Legends'))
for(const item of streamers){
    if(item.age>35){
    item.gameMorePlayed == item.gameMorePlayed.toLocaleUpperCase();
    }
    }
    console.log(userA);

/*5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/
/*const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
]

*/

function filterItems(query) {
 return streamers.filter(function(el) {
return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
})
}
console.log(filterItems('Ru'));
console.log(filterItems('I')); 
    