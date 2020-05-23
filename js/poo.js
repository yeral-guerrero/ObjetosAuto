// dentro de los paréntesis se crean los parámetros de la función
function coche(marca, modelo, anyo) 
{
	// la propiedad marca del objeto se le va asignar el valor que venga por parámetro
	this.marca = marca;
	this.modelo = modelo;
	this.anyo = anyo;
}

// 'new' genera una nueva instancia de nuestra función constructora
var cocheUno = new coche('Ford', 'C_HR', '2020');
var cocheDos = new coche('Ferrari', 'Corsa', '2017');

var varcoche = [];
for (var i = 0; i<10;i++) 
{
    if(i%2==0)
        varcoche[i] = cocheUno;
    else 
        varcoche[i] =cocheDos;
}

for (var i = 0; i<10;i++) 
{
        //document.write(`${varcoche[i]}`);
        console.log(varcoche[i]);
}

