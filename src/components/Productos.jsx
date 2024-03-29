const productos = [

    {  id: 1, nombre: "Combo 1",
       img:'/combo1.jpg',
       detalle:'Este sensacional combo es el indicado para tus tardes de verano' ,
       precio: 20000 ,
       categoria:'Mates', 
       },

    {   id: 2, 
        nombre: "Combo 2",
        img:'/combo2.jpg',
        detalle:'Esta opción contiene dos mates, una botella térmica y un vaso¡Ideal para tener dos kits de verano!' ,
        precio: 25000 ,
        categoria:'Mates',
    },
    
    {   id: 3, 
        nombre: "Combo 3",
        img:'/combo3.jpg',
        detalle:'Set mate completo con bolso de cuero' , 
        precio: 30000 ,
        categoria:'Mates',
    },

    {   id: 4, 
        nombre: "Combo 4",
        img:'/combo4.jpg' ,
        detalle:'Set mate completo con bolso + llavero + botella y vaso térmico',
        precio: 35000 ,
        categoria:'Mates',
    },
    {   id: 5, 
        nombre: "Camiseta entrenamiento",
        img:'/remera1.jpg' ,
        detalle:'Camiseta de entrenamiento de la primera división',
        precio: 15000 ,
        categoria:'Camisetas',
    },
    {   id: 6, 
        nombre: "Camiseta Oficial",
        img:'/remera2.png' ,
        detalle:'Camiseta oficial de juego de la primera división',
        precio: 22000 ,
        categoria:'Camisetas',
    },
 ]

 export const getFetch = new Promise((resolve, reject) => {
    let url="www.tiendademonia.com.ar"
    if (url === "www.tiendademonia.com.ar" ){
         setTimeout(() => {
            resolve(productos);
         },2000) 
    } else{
        reject('404 not found');
    }
})