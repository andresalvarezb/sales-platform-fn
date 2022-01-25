import React from 'react';
import './icontask.css'

function IconTask({icon, text}) {
  return (
    <div className='container-task'>
        <div className="logo-task">
            {icon}
        </div>
        <div className="logo-description">
            <p>{text}</p>
        </div>
    </div>
  )
}

export default IconTask;
