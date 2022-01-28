import React from 'react'
import AsideBar from '../../components/AsideBar'
import Header from '../../components/Header'
import MainDashboard from '../../components/MainDashboard'
import './dashboard.css'

function Dashboard() {
    return (
        <div className='Dashboard'>
            <Header/>
            <AsideBar/>
            <MainDashboard/>
        </div>
    )
}

export default Dashboard
