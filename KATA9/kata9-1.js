var arbol = {
  especie: 'manzano', //Propiedad "especie" de valor "manzano"
  fruta: 'manzana', //Propiedad "fruta" de valor "manzana"
  obtenerFruta: function() {
    console.log(arbol.fruta);
  }
};

export default function plantarArbol(especie, fruta) {
  if ((typeof especie != 'string') | (typeof fruta != 'string')) {
    return null;
  }
  return [especie, fruta];
}
