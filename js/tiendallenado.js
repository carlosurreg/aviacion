export function llenarTienda(){

    let productosBD = [

        { foto: 'img/aviones didacticos.jpg', 
          nombre: "Aviones Didacticos", 
          precio: 150000,
          descripcion:"Piezas hecha de madera"
        },
        { foto: 'img/cascos de guerra.jpg', 
          nombre: "Cascos de Guerra", 
          precio: 50000,
          descripcion:"Cascos diseñados para los simuladores de avión "
        },
        { foto: 'img/Avion Raptor.jpg', 
          nombre: "Avion Raptor", 
          precio: 25000,
          descripcion:"Avion de colección con estaca de plástico"
        },
        { foto: 'img/chaquetas.jpg', 
          nombre: "Chaquetas", 
          precio: 335500, 
          descripcion:"Chaquetas impermeables "
        },
        { foto: 'img/coleccion de aviones.jpg', 
          nombre: "Aviones", 
          precio: 95000, 
          descripcion:"Aviones de colección, cuenta con 9 piezas de diferente referencia"
        },
        { foto: 'img/controles.jpg', 
          nombre: "Controles", 
          precio: 250000, 
          descripcion:"Controles para simuladores de vuelo"
        },
        { foto: 'img/pulseras.jpg', 
          nombre: "Pulseras", 
          precio: 1500,
          descripcion:"Pulseras para dama"
        },
        { foto: 'img/trajes de piloto.jpg', 
          nombre: "Trajes Infantiles", 
          precio: 350000,
          descripcion:"Trajes para niños y niñas aficionados a la aviación "
        },
        { foto: 'img/Airbus380-2.jpg', 
          nombre: "Air bus 380", 
          precio: 187000,
          descripcion:"El rey de los cielos con estaca de plástico"
        },
        { foto: 'img/Airbus380-3.jpg', 
          nombre: "Rey de los Cielos", 
          precio: 70000,
          descripcion:"El rey de cielos con estaca de madera"
        }
    
    ]
    
    //Necesito recorrer un arreglo en JS
    
    //1.Creo una variable para almacenar la base sobre la cual voy a pintar
    let fila=document.getElementById("fila")
    productosBD.forEach(function(producto){
        /*console.log(producto.foto)
        console.log(producto.nombre)
        console.log(producto.precio)*/
    
        //2. pintando etiquetas
    
        //div con la clase col
        let columna=document.createElement("div")
        columna.classList.add("col")
    
        //div con las clases card h-100
        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")
    
        //img con la clase card-img-top
        let foto=document.createElement("img")
        foto.classList.add("card-img-top")
        foto.classList.add("h-100")
        foto.src=producto.foto
    
        //h4 con la clase text-center
        let titulo=document.createElement("h4")
        titulo.classList.add("text-center")
        titulo.textContent=producto.nombre

        let descripcion=document.createElement("p")
        descripcion.classList.add("text-center")
        descripcion.textContent=producto.descripcion

        let precio=document.createElement("h3")
        precio.classList.add("text-center")
        precio.textContent=producto.precio

        //creando un boton
        let boton=document.createElement("button")
        boton.setAttribute("type","button")
        boton.classList.add("btn","btn-warning","mx-4","mb-4")
        boton.textContent="ver producto"
        
        //3. PADRES E HIJOS
        tarjeta.appendChild(foto)
        tarjeta.appendChild(titulo)
        tarjeta.appendChild(descripcion)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(boton)
    
        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    
    })
    


}




   
   
    









