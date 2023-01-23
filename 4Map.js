/*4.1 Dado el siguiente array, devuelve un array con sus nombres 
utilizando .map().*/
 /*
 const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const clientes = users.map((users) => users.name);
console.log(clientes);
*/
/*4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'.*/
/*
const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const clientes = users.map((users) => {
    if(users.name[0]==="A"){
        return "Anacleto";
    }else{
        return users.name;
    }
    });
console.log(clientes);
*/
/*4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)' 
cuando el valor de la propiedad isVisited = true.*/

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const citiesVis = cities.map(cities =>{
	if(cities.isVisited === true){
		return cities.name +' = Visitado';
	}
	else{
		return cities.name +', no visitado';
	}
});
console.log(citiesVis);