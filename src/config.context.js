import React, {useState, createContext} from 'react'

export const ConfigContext = createContext();

export const СonfigProvider = props => {
    const [config, setConfig] = useState({ language: "UA", currency: "EUR", city: "Ужгород" });
    return (
        <ConfigContext.Provider value={[config, setConfig]}>
            { props.children }
        </ConfigContext.Provider>
    )
}