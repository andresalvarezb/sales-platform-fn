import React from 'react'
import AsideBar from '../../components/AsideBar'
import Header from '../../components/Header'
import Main from '../../components/Main'
import './dashboard.css'

function Dashboard() {
    return (
        <div className='Dashboard'>
            <Header/>
            <AsideBar/>
            <Main/>
        </div>
    )
}

export default Dashboard
