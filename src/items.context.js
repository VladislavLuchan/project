import React, {useState, createContext} from 'react'
import products from './products.json'


export const ItemContext = createContext();

export const ItemsProvider = props => {
    const [items, setItems] = useState(products);
    return (
        <ItemContext.Provider value={[items, setItems]}>
            { props.children }
        </ItemContext.Provider>
    )
}