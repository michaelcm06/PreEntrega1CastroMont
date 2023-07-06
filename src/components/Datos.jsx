import data from "../data/data.json"

export const pedirDatos = () =>{
    return new Promise((resolve) =>{
        setTimeout( ()=>{
            resolve(data);
        }, 500)
    })
}            

export const pedirItem = (id) => {
    return new Promise((res) => {
        const item = data.find(product => product.id === id);
        setTimeout(() => {
            res(item);
        }, 2000);
    });
  }


export const getProductsByCategory = (category) => {
    return new Promise((res) => {
        const productos = data.filter(product => product.categoria === category);
        setTimeout(() => {
            res(productos);
        }, 2000);
    });
  }