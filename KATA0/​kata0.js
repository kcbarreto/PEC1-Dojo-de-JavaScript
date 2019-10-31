export default function sumatorio(num) {
  var sumatorio = 0;
  for (var i = 0; i <= num; i++) {
    sumatorio = i + sumatorio;
  }
  return sumatorio;
}
