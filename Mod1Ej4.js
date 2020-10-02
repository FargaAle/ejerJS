var usuarios = [{nombre: "Diego",habilidades: ["Javascript", "ReactJS", "Redux"]},{
    nombre: "Gabriel", habilidades: ["VueJS", "Ruby on Rails", "Elixir"]}];
    
   /*
   no se si esta bien, pero fue la manera de encontrar que me de por respuesta lo que queria dentro de la variable
   usuarios[1].habilidades[2]
   */


  function respuesta (){
    document.getElementById("texto").innerHTML= usuarios[0].nombre + "<br>"+ " posee las habilidades: " + usuarios[0].habilidades[0] + " " +  usuarios[0].habilidades[1] + " " + usuarios[0].habilidades[2] + "<br>" + "<br>" +
    usuarios[1].nombre + "<br>" + " posee las habilidades: " + usuarios[1].habilidades[0] + " " + usuarios[1].habilidades[1] + " " + usuarios[1].habilidades[2];
  }
  window.onload = respuesta()
  
    
/*Dado el siguiente vector de objetos:
var usuarios = [{
    nombre: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]},{
    nombre: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }];


Escribir una funcion que emita el siguiente resultado:
 Diego posee las habilidades: Javascript, ReactJS, Redux
Gabriel posee las habilidades: VueJS, Ruby on Rails, Elixir
*/
