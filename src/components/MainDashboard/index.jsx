import React from 'react'
import HeaderFormDashboard from '../HeaderFormDashboard';
import FormProduct from './FormProduct';
import './maindashboard.css';
import Table from './Table';


function MainDashboard() {
    return (
        <div className='WrapperMain'>
            <main className='WrapperMain-dashboard'>
                <form action="" className='FormDashboard'>
                    <HeaderFormDashboard />
                    <hr />
                    <FormProduct/>
                    <Table/>
                </form>
            </main>
        </div>
    )
}

export default MainDashboard
