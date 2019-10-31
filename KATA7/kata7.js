var coche = {
  marca: 'Ford',
  obtenerMarca: function() {
    console.log(this.marca);
  }
};

coche.obtenerMarca(); // Ford

var marcaDelCoche = coche; //Se debe asignar a "marcaDelCoche" el objeto "coche" para que de esta manera herede todos los metodos
marcaDelCoche.obtenerMarca(); //Y puedan ser convecados con los mismos constructores.
