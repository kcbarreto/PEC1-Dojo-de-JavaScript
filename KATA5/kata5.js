export default function elimina_los_espacios(palabra) {
  var size = palabra.length;
  var nPalabra = '';
  for (var i = 0; i < size; i++) {
    if (palabra.charAt(i) == ' ') {
      nPalabra = nPalabra + '';
    } else {
      nPalabra = nPalabra + palabra.charAt(i);
    }
  }
  return nPalabra;
}
