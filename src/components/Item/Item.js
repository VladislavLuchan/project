import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { ConfigContext } from '../../config.context';


const Item = ({ product, id }) => {
    const [config, setConfig] = useContext(ConfigContext);
    const history = useHistory();
    const handleClick = e => history.push("/products/" + id); 
    return (
        <div className="box" onClick={handleClick}>
            <div  className="box-img" style ={ { backgroundImage: "url("+product.img+")" } } ></div>
            <div className="box-text">
                <h3>{ product.name }</h3>
                <p className="price">{ config.currency == "US" ? product.priceUS + "$" :  config.currency == "EUR" ?  product.priceEUR + "€" : product.priceUA + "грн"}</p>
            </div>
        </div>
    )
}

export default Item
