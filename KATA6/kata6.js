function test() {
  console.log(a); //Lanza error debido a que en este punto de la ejecucion la variable "a" NO esta definida aún
  console.log(foo()); //En este caso no da error debido a que llama a la funcion "foo" la cual NO necesariamente
  // debe estar antes de la ejecucion, pues el compilador la buscara en todo el ambito
  // donde esta el codigo.
  var a = 1;
  function foo() {
    return 2;
  }
}

test();
