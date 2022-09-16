const producto = [
    {
      id: 1,
      name: "manzana",
      price: "5.00",
      stock: "150"
    },
    {
      id: 2,
      name: "fresa",
      price: "3.00",
      stock: "200"
    },
    {
      id: 3,
      name: "platano",
      price: "5.00",
      stock: "100"
    },
  ];
  
// Lista todo
export const findAll = () => {
  return producto;
};
  
// Buscar por id
export const findOne = (id) => {
  return producto.find((u) => u.id === Number(id));
};
  
// crear
export const store = (product) => { 
  product.id = producto[producto.length-1].id+1;
  producto.push(product);
};
  
// update
export const update = (id, product) => {
  const index = producto.findIndex((u) => u.id === Number(id));
  producto[index] = {
    ...producto[index],
    ...product,
  };
};
  
export const remove = (id) => {
  const products = producto.filter((u) => u.id !== Number(id));
  producto.length = 0;
  producto.push(...products);
};