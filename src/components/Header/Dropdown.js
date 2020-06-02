import React, { useState, useContext } from 'react'
import { ConfigContext } from '../../config.context';

function Dropdown({ children, configValue }) {
    const [config, setConfig] = useContext(ConfigContext);
    const [val, setVal] = useState(config[configValue])

    const handleChange = e => {
        setVal(e.target.value); 
        let temp = val;
        setConfig(prevConfig => {
           return {...prevConfig, [configValue]: temp};
        })
        console.log('changed', config[configValue])
    }

    return (
        <select className="drop-down" defaultValue={config[configValue]} onChange={handleChange}>
            { children }
        </select>
    )
}

export default Dropdown
