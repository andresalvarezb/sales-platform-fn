import React from 'react'
import HeaderFormDashboard from '../HeaderFormDashboard';
import './maindashboard.css';


function MainDashboard() {
    return (
        <div className='WrapperMain'>
            <main className='WrapperMain-dashboard'>
                <form action="" className='FormDashboard'>
                    <HeaderFormDashboard/>
                    <hr/>
                </form>
            </main>
        </div>
    )
}

export default MainDashboard
