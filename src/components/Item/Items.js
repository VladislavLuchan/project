import React, { useContext, useEffect } from 'react'
import Item from './Item'
import { ItemContext } from '../../items.context'
import { ConfigContext } from '../../config.context';
// import { FilterContext } from '../../filter.context';


const Items = () => {
    // const [filter, setFilter] = useContext(FilterContext)
    const [config, setConfig] = useContext(ConfigContext)
    const [items, setItems] = useContext(ItemContext)

    useEffect(() => {
        console.log("render")
    }, [config])

    return (
        <div className="products">
            <div class="products-categories" >
                <div class="category">
                    <h1>Категорія: iPhone</h1>
                    <div class="selected">
                        <div class="spec">64 gb</div>
                        <div class="spec">до 40 000 грн</div>
                        <div class="spec">128 gb</div>
                    </div>
                </div>
             </div>
            <div className="products-grid"> 
                { items.map(( product, i ) => (
                    <Item product={product} id={i} key={i} />
                ))}
            </div>
        </div>
    )
}

export default Items