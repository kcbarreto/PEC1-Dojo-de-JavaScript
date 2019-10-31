export default function elimina_primer_y_ultimo(palabra) {
  var size = palabra.length;
  if (size <= 2) {
    return palabra;
  } else {
    return palabra.substring(1, size - 1);
  }
}
