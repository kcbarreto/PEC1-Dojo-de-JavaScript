// export default function plantarArbol(especie, fruta) {
//   if ((typeof especie != 'string') | (typeof fruta != 'string')) {
//     return null;
//   }
//   return [especie, fruta];
// }

// export default function plantarArbol(especie, fruta) {
//   if ((typeof especie != 'string') | (typeof fruta != 'string')) {
//     return null;
//   }
//   var prueba = {
//     especieN: especie,
//     frutaN: fruta
//   };
//   return [prueba.especieN, prueba.frutaN];
// }

export default function plantarArbol(especie, fruta) {
  if ((typeof especie != 'string') | (typeof fruta != 'string')) {
    return null;
  }
  var obtenerFruta = {
    frutaN: 'pera'
  };
  return [especie, fruta, obtenerFruta.frutaN];
}

console.log(plantarArbol('especie', 'fruta'));
