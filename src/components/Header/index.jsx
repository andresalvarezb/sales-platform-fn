import React from 'react';
import './header.css';
import Button from '../Button'

function Header() {
  return (
      <div className='WrapperHeader'>
          <header className='Header'>
              <div className="Header-user">
                  <span className='Header-nameUser'>Andres Alvarez</span>
              </div>
              <div className="Header-dropdown Dropdown">
                  <Button type='button' primary>setting <i className="fas fa-sort-down"></i></Button>
                  <ul className='Dropdown-menu'>
                      <li className='Dropdown-item u-p-0'><a href="/">My profile</a></li>
                      <li className='Dropdown-item u-p-0'><a href="/">Sing off</a></li>
                  </ul>
              </div>
          </header>
      </div>
  );
}

export default Header;
