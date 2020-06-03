import React from 'react'

const TextField = (type, id, name, placeholder, value, onChange) => {
    return (
        <input
        type={type}
        className="form-control"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}/>
    )
}

export default TextField;
