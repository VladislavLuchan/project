import React, {useState, createContext, useContext} from 'react'
import { ItemContext } from './items.context'

export const FilterContext = createContext();

export const FilterProvider = props => {
    const [items, setItems] = useContext(ItemContext);
    const [filter, setFilter] = useState(items);
    return (
        <FilterContext.Provider value={[filter, setFilter]}>
            { props.children }
        </FilterContext.Provider>
    )
}