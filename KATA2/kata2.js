export default function sumPos(num) {
  var aSize = num.length;
  var sum = 0;
  for (var i = 0; i <= aSize; i++) {
    if (num[i] >= 0) {
      sum = sum + num[i];
    }
  }
  return sum;
}
