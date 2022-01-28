import React from 'react';
import './input.css'

function Input({type, name, value, list, props}) {

  return (
      <label>
          <p>{name}</p>
          <input type={type} name={name} defaultValue={value} list={list} {...props} />
      </label>
  )
}

export default Input;
