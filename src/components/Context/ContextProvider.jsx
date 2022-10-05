import React, { createContext, useState, useEffect } from 'react'

export const Context = createContext();



export default function ContextProvider({ children }) {

    const [carrito, setCarrito] = useState([]);
    const [totalDeProductos, setTotalDeProductos] = useState(0);
    const [totalDeDinero, setTotalDeDinero] = useState(0);
    // AGREGAR AL CARRO 
    function addToCart(item) {
        const indexProducto = carrito.findIndex(producto => producto.id === item.id);
        if (indexProducto !== -1) {
            const newCarrito = [...carrito];
            newCarrito[indexProducto].cantProduc = newCarrito[indexProducto].cantProduc + item.cantProduc;
            newCarrito[indexProducto].precioTotal = newCarrito[indexProducto].precio * newCarrito[indexProducto].cantProduc;

            setCarrito(newCarrito);
        } else {
            setCarrito([...carrito, item]);
            // console.log(item)
        }
    }
    // REMOVER DEL CARRO
    function removeItem(itemId) {
        setCarrito(carrito.filter((item) => item.id !== itemId))
        console.log(itemId)
    }
    // LIMPIAR CARRO
    function clear() {
        setCarrito([])
        // console.log(carrito)
    }

    //TOTAL DE CANTIDAD DE PRODUCTOS
    function totalProducts() {
        setTotalDeProductos(carrito.reduce((acc, item) => acc += item.cantProduc, 0))
    }
    // TOTAL DEL DINERO
    function totalDinero() {
        let total = carrito.reduce((acc, item) => acc += (item.precio * item.cantProduc), 0)
        setTotalDeDinero(total)
        // console.log(total)
    }

    useEffect(() => {
        totalProducts();
        totalDinero();
    }, [carrito]);

    return (
        <Context.Provider value={{ carrito, setCarrito, addToCart, removeItem, clear, totalDeProductos, totalDeDinero }}>
            {children}
        </Context.Provider>
    )
}