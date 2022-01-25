import React from 'react';
import './header.css';
import Button from '../Button'

function Header() {
  return (
      <div className='container-header'>
          <header className='header'>
              <div className="container-user">
                  <span>andres alvarez</span>
              </div>
              <div className="dropdown">
                  <Button type='button' primary>setting <i className="fas fa-sort-down"></i></Button>
                  <ul className='dropdown-menu'>
                      <li><a href="/">My profile</a></li>
                      <li><a href="/">Sing off</a></li>
                  </ul>
              </div>
          </header>
      </div>
  );
}

export default Header;
