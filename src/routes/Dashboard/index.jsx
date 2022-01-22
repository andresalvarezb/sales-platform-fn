import React from 'react'
import Main from '../../components/Main'
import SideBar from '../../components/SideBar'
import NavBar from '../../components/NavBar'

function Dashboard() {
    return (
        <div className='container'>
            <NavBar/>
            <SideBar/>
            <Main/>
        </div>
    )
}

export default Dashboard
