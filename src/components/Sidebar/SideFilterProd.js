import React from 'react'
import { ItemContext } from '../../items.context'

function SideFilterProd() {
    const [items, setItems] = useContext(ItemContext);
    


    return (
        <div className="catalog side-el">
            <div className="title">
                Товар
                <img src={ toggleIcon } className="pointer" />
            </div>
            <div className="side-bar-item">
                <input type="checkbox"  className="side-bar_button"  id="scales" name="scales"  />
                <label for="scales">Iphone</label>
            </div>
            <div className="side-bar-item">
                <input type="checkbox" className="side-bar_button"  id="scales" name="scales"  />
                <label for="scales">Ipad</label>
            </div>
            <div className="side-bar-item">
                <input type="checkbox" className="side-bar_button"  id="scales" name="scales"  />
                <label for="scales">Macbook</label>
            </div>
            <div className="side-bar-item">
                <input type="checkbox" className="side-bar_button"  id="scales" name="scales"  />
                <label for="scales">Airpods</label>
            </div>
        </div>
        
    )
}

export default SideFilterProd
