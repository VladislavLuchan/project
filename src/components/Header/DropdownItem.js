import React from 'react'

function DropdownItem(props) {
    return (
        <option className="dropdown-item">{props.children}</option>
    )
}

export default DropdownItem
