import React from 'react';
import './button.css'

function Button({type, primary, children}) {
  return <button type={type} className={`btn ${primary && 'btn--primary'}`}>{children}</button>;
}

export default Button;
