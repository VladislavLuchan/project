import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ItemContext } from '../../items.context';
import { ConfigContext } from '../../config.context';

function ExactItem() {
    let { id } = useParams();
    const [items, setItems]  = useContext(ItemContext);
    const [config, setConfig] = useContext(ConfigContext);
    const currentItem =  items[id];
 
    return (
        <div className="item-wrapper">
            <div className="item-content">
                <div  className="item-img" style ={ { backgroundImage: "url("+currentItem.img+")" } } ></div>
                <div className="item-side">
                    <h1>{currentItem.name}</h1>
                    <button className="add-btn">{config.language == "UA" ?  "Додати до кошику" : "Add to cart"}</button>
                    <h3>{currentItem.priceUA} грн</h3>
                    <h3>{currentItem.priceUS}$</h3>
                    <h3>{currentItem.priceEUR}€</h3>
                    <ul>
                        
                       { currentItem.category != "airpods" ? ( <li>{config.language == "UA" ?  "Діагональ екрану " : "Screen size "}  <strong>{currentItem.display}{config.language == "UA" ?  " дюймів" : "inches"}</strong></li> ) : null }
                         
                        { currentItem.category != "airpods" ? ( <li>{config.language == "UA" ?  "Кольори: " : "Colors: "} {currentItem.colors.map(color => <span>{color} </span>)}</li>) : null } 
                    </ul>
            </div>
            </div>
            <div className="item-desc">
                <p>
                    {config.language == "UA" ? 
                'Lorem Ipsum - це текст-"риба", що використовується в друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною "рибою" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову гранку та склав на ній підбірку зразків шрифтів. "Риба" не тільки успішно пережила п\'ять століть, але й прижилася в електронному верстуванні, залишаючись по суті незмінною.'
                    : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                }
                </p>
            </div>
        </div>
    )
}

export default ExactItem
