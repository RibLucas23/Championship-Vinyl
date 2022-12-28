import React from 'react'
import Item from './Item'


import './itemList.css'

function ItemList({ productos }) {
    // USANDO LOS PRODUCTOS QUE ME PASA ItemListContainer,  MAPEO Y LE PASO POR PARAMETROS A ITEM 
    return (
        <>

            <div className="itemList_wrapper">
                {productos.map(producto => (
                    <div key={producto.id} className="itemList_container">
                        <Item item={producto} />
                    </div>
                ))}
            </div>

        </>
    )
}

export default ItemList