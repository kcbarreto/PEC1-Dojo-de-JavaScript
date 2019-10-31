var arbol = {
  especie: 'manzano', //Propiedad "especie" de valor "manzano"
  fruta: 'manzana', //Propiedad "fruta" de valor "manzana"
  obtenerFruta: function() {
    console.log(arbol.fruta);
  }
};

console.log(arbol.especie); //Test El valor de la propiedad especie debe ser manzano
console.log(arbol.fruta); //Test: El valor de la propiedad fruta debe ser manzana
arbol.obtenerFruta(); //Test: El resultado de invocar el método obtenerFruta debe ser manzana
