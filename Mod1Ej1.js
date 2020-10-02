var direccion = {
    calle: "Calle Falsa",
    numero: "1293",
    barrio: "Centro",
    ciudad: "São Paulo"
}
var respuesta = "La persona vive en " + direccion.ciudad + ", en el barrio " + direccion.barrio + ", en la calle " + direccion.calle + " " + direccion.numero;

console.log (respuesta);
document.getElementById("texto").innerHTML = respuesta;






// La persona vive en  São Paulo , en el barrio  Centro, en la calle “calle falsa " numero 1293.