var Pokebola = [];

function Pokemon(nombre, color, vida, poderDeAtaque){
  this.nombre = nombre;
  this.color = color; 
  
  this.nivelDeAmistad = 0;
  
  this.vida = vida;
  this.poderDeAtaque = poderDeAtaque; 
  
  this.mostrarPokemon = function(){
    return("hola, soy: " + this.name + " y soy de color: " + this.color);
  }
  this.aumentarAmistad = function(valor){
    this.nivelDeAmistad = this.nivelDeAmistad + valor;
  }
  this.atacar = function(pokemon){
    pokemon.vida = pokemon.vida - this.poderDeAtaque;
  }
}

var pikachu = new Pokemon("pikachu", "amarillo", 100, 50);
var charmander = new Pokemon("charmander", "rojo", 20, 80);
var chikorita = new Pokemon("Chikorita", "verde", 80, 60);
var squirtle = new Pokemon("squirtle", "Celeste", 90, 40);
pokebola.push(pikachu);
pokebola.push(charmander);
pokebola.push(chikorita);
pokebola.push(squirtle);


pikachu.atacar(charmander);

console.log("La vida de Charmander es: " + Charmander.vida);

function pelea(){
  var pelear1 = document.getElementById("pelea1").value;
  var pelear2 = document.getElementById("pelea2").value;
  var poke1 = new Pokemon(pelear1 ,"azul", 100);
  var poke2 = new Pokemon(pelear2, "verde", 20);

(poke1.atacar(poke2));

  
}
pelea();