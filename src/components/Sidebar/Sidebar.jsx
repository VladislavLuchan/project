import React, { useContext } from 'react'

import toggleIcon from './toggle.svg'

function Sidebar() {

    return (
        <div className="sidebar">
        <div className="price side-el">
            <div className="title">
                Ціна
                <img src={ toggleIcon } className="pointer" />
            </div>
            <div className="side-bar_item">
                <span>Від:</span>
                <input type="text" />
                <span>До:</span>
                <input type="text" />
            </div>
            <input type="range" min="1" max="100" value="50" value="70" />
        </div>
        <div className="color side-el">
            <div className="title">
                Колір
                <img src={ toggleIcon } className="pointer" />
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button"></button>
                Space Grey
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button"></button>
                Black Matt
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button pressed"></button>
                Silver
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button"></button>
                Gold
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button pressed"></button>
                Rose Gold
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button pressed"></button>
                Blue
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button pressed"></button>
                Purple
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button"></button>
                Yellow
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button"></button>
                Product RED
            </div>
        </div>
        <div className="catalog side-el">
            <div className="title">
                Товар
                <img src={ toggleIcon } className="pointer" />
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button"></button>
                Iphone X
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button pressed"></button>
                Iphone 8
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button pressed"></button>
                Mackbook Pro 2016
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button"></button>
                Ipad 3
            </div>
        </div>
        <div className="diagonal side-el">
            <div className="title">
                Діагональ
                <img src={ toggleIcon } className="pointer" />
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button pressed"></button>
                4"
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button"></button>
                4.7"
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button pressed"></button>
                5.1"
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button"></button>
                6.1"
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button"></button>
                7"
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button pressed"></button>
                9.7"
            </div>
        </div>
        <div className="memory side-el">
            <div className="title">
                Пам'ять
                <img src={ toggleIcon } className="pointer" />
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button pressed"></button>
                16 gb
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button pressed"></button>
                32 gb
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button pressed "></button>
                64 gB
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button"></button>
                128 gB
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button"></button>
                256 gB
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button"></button>
                512 gB
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button"></button>
                1 TB
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button"></button>
                2 TB
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button"></button>
                4 TB
            </div>
            <div className="side-bar_item">
                <button className="side-bar_button"></button>
                8 TB
            </div>
        </div>
    </div>
    )
}

export default Sidebar
