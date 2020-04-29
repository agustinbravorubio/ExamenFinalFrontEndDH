window.addEventListener( // NO TOCAR
  'load',  // NO TOCAR
  function() // NO TOCAR
  { // NO TOCAR


    // 10.1)
    // ESCRIBIR AQUI
    var Producto = {
      nombre: "laptop",
      codigo: "123abc",
      tieneDescuento: true,
      descuento: 0.1,
      especificacionesTecnicas: ["procesador i9 9th",
                                 "32gb ram ddr5",
                                 "ssd 1tb",
                                 "usb tipo c"]
    }

    // 10.2)
    // ESCRIBIR AQUI
    Producto.encender = function (){
        return "El producto " + Producto.nombre + " esta encendido";
    }

    // 10.3)
    // ESCRIBIR AQUI
    Producto.nuevaEspecificacionTecnica = function(nuevaEspecificacion) {
        Producto.especificacionesTecnicas.push(nuevaEspecificacion);
    }

    // 10.4)
    // ESCRIBIR AQUI
    mostrarProducto(Producto, true);

  }// NO TOCAR
);// NO TOCAR
