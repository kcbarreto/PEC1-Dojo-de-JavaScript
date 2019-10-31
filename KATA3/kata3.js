export default function repiteString(rep, num) {
  var res = '';
  for (var i = 0; i < num; i++) {
    res = res + rep;
  }
  return res;
}
