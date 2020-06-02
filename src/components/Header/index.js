import React, {useContext, useEffect} from 'react'

import appleIcon from './apple.svg';
import arrowIcon from './arrow.svg';
import listIcon from './list.svg';
import marketIcon from './supermarket.svg';

import { Link, NavLink } from 'react-router-dom'
import { ConfigContext } from '../../config.context';

import Dropdown from './Dropdown'


const Header = () => {
    const [config, setConfig] = useContext(ConfigContext);

    const handleLang = e => {
        if(config.language == "UA") {
            setConfig({...config, language:  "EN" });
        } else {
            setConfig({...config, language:  "UA" });
        }
    }

    useEffect(() => {
    }, [config]);

    return (
        <header>
            <nav>
                <h1 id="logo">
                    <Link to="/">
                        <img src={appleIcon} alt=" " />
                        Chinazes store
                    </Link> 
                </h1>
                <ul className="menu-wrapper">
                    <li className="menu_item">
                        <span>Кошик</span>
                        <img src={marketIcon} id="market-icon" className="market" />
                    </li>
                    <li className="menu_item">
                        {/* <span>{config.currency}</span>
                        <img src={arrowIcon} className="pointer" /> */}
                        <Dropdown configValue="currency">
                            <option value="UAH">UAH</option>
                            <option value="US">US</option>
                            <option value="EUR">EUR</option>
                        </Dropdown>
                    </li>
                    <li className="menu_item" id="lang" onClick={handleLang}>
                    <span>{config.language}</span>
                    </li>
                    <li className="menu_item">
                        <span>Ужгород</span>
                        <img src={arrowIcon} className="pointer" />
                    </li>
                    <li className="menu_item registration">
                        Вхід / Реєстрація
                    </li>
                </ul>

                <div id="hamburger">
                    <img src={listIcon} alt="menu" />
                </div>
            </nav>
        </header>
    )
}

export default Header
