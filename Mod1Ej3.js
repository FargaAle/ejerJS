var skills = ["Javascript", "ReactJS", "React Native"];

function tieneHabilidad() {
        
    var resultado = skills.indexOf ("Javascript");
    
    console.log (resultado);

    if (resultado == -1)
        console.log("false")
    else 
        console.log ("true")
}
   
window.onload = tieneHabilidad




/*Escribir una funcion qe verifique si el vector de habilidades  que se pasa  
posee una habilidad “Javascript” y retorne un boooleano (true/false) en caso exista o no
function tieneHabilidad(skills) {
 // código aqui
}
var skills = ["Javascript", "ReactJS", "React Native"];
tieneHabilidad (skills); // true or  false
Tip: método indexOf */
