const productos = [
  {
    nombre: "FIDEOS TIRABUZON 500GR",
    precio: "$670",
    id: "7",
    stock: "19",
    idCat: "2",
    img: "../Img/fideos3.png",
  },
  {
    nombre: "ACEITE GIRASOL 3.000CC",
    precio: "$1850",
    id: "1",
    stock: "25",
    idCat: "1",
    img: "../Img/aceite1.png",
  },
  {
    nombre: "GARBANZO TETRA RECART 340G",
    precio: "$550",
    id: "10",
    stock: "45",
    idCat: "3",
    img: "../Img/legumbres2.png",
  },
  {
    nombre: "ACEITE GIRASOL 900CC",
    precio: "$1030",
    id: "3",
    stock: "40",
    idCat: "1",
    img: "../Img/aceite3.png",
  },
  {
    nombre: "FIDEOS CODITO 500GR",
    precio: "$420",
    id: "4",
    stock: "15",
    idCat: "2",
    img: "../Img/fideosCodito.png",
  },

  {
    nombre: "FIDEOS NIDO 500GR",
    precio: "$350",
    id: "6",
    stock: "20",
    idCat: "2",
    img: "../Img/fideos2.png",
  },
  {
    nombre: "ACEITE GIRASOL 1.500CC",
    precio: "$1320",
    id: "2",
    stock: "35",
    idCat: "1",
    img: "../Img/aceite2.png",
  },

  {
    nombre: "POROTOS ALUBIA 500G",
    precio: "$780",
    id: "8",
    stock: "29",
    idCat: "3",
    img: "../Img/legumbres1.png",
  },
  {
    nombre: "LENTEJAS TETRA RECART 340G",
    precio: "$550",
    id: "9",
    stock: "25",
    idCat: "3",
    img: "../Img/legumbres1.png",
  },

  {
    nombre: "FIDEOS RIGATTI 500GR",
    precio: "$499",
    id: "5",
    stock: "60",
    idCat: "2",
    img: "../Img/fideos1.png",
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 100);
  });
};

//Retornar solo un producto

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find((prod) => prod.id === id);
      resolve(producto);
    }, 100);
  });
};

//Retornar una categoria de productos

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosPorCategoria = productos.filter(
        (prod) => prod.idCat === idCategoria
      );
      resolve(productosPorCategoria);
    }, 100);
  });
};
