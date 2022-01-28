import React from 'react';
import './asidebar.css'

function AsideBar() {
  return (
      <div className='WrapperSidebar'>
        <aside className='Sidebar u-py-2'>
            <figure className='Sidebar-logo'>
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="logo" />
            </figure>
            <ul className='Sidebar-nav'>
              <li><a href="/" className='Sidebar-items'><i className="fas fa-home"></i><span>Home</span></a></li>
              <li><a href="/" className='Sidebar-items'><i className="fas fa-file-invoice"></i><span>Electronic bill</span></a></li>
              <li><a href="/" className='Sidebar-items'><i className="fas fa-money-bill-wave"></i><span>Sales</span></a></li>
              <li><a href="/" className='Sidebar-items'><i className="fas fa-users"></i><span>Employees</span></a></li>
            </ul>
        </aside>
      </div>
  )
}

export default AsideBar;
