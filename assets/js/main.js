function Pokemon(nombre, color, poderDeAtaque){
  this.nombre = nombre;
  this.color = color; 
  
  this.nivelDeAmistad = 0;
  
  this.vida = 100;
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
const Pikachu = new Pokemon("pikachu", "amarillo", 100);
const Charmander = new Pokemon("charmander", "rojo", 20);

Pikachu.atacar(Charmander);

document.write("La vida de Charmander es: " + Charmander.vida);

