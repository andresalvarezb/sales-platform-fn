import React from 'react'
// import IconTask from '../IconTask';
import './main.css';

// const optionCustomers = [
//     {value: 'Andres', key: 'Andres'},
//     {value: 'Lisa', key: 'Lisa'},
//     {value: 'Silvia', key: 'Silvia'},
// ]
function MainDashboard() {
    return (
        <div className='WrapperMain'>
            <main className='WrapperMain-dashboard'>
                <form action="" className='FormDashboard'>
                    <header className='FormDashboard-header u-p-0'>
                        <h2>New bill</h2>
                        <div className='WrapperForm'>
                            <fieldset className='WrapperForm-fieldset WrapperCustomer'>
                                <label className='WrapperCustomer-label'>
                                    <p>Type</p>
                                    <select name="electronicBill" id="">
                                        <option value="">---</option>
                                        <option value="EB">Electronic Bill</option>
                                    </select>
                                </label>
                                <label className='WrapperCustomer-label'>
                                    <p>Name</p>
                                    <input list='list' name='name' />
                                    <datalist id='list'>
                                        <option value="andres">andres</option>
                                        <option value="sofia">sofia</option>
                                        <option value="Laura">Laura</option>
                                        <option value="Carlos">Carlos</option>
                                    </datalist>
                                </label>
                                <label className='WrapperCustomer-label'>
                                    <p>Contact</p>
                                    <input type="text" name="Contact" value={'other thing'} disabled/>
                                </label>
                                
                            </fieldset>

                            <fieldset className='WrapperForm-fieldset WrapperForm-fieldset--seller WrapperSeller'>
                                <label className='WrapperCustomer-label'>
                                    <p>Date</p>
                                    <input type="number" name="number"/>
                                </label>
                                <label className='WrapperCustomer-label'>
                                    <p>seller</p>
                                    <input list='seller' name="" id="" />
                                    <datalist id='seller'>
                                        <option value="andres">andres</option>
                                        <option value="sofia">sofia</option>
                                        <option value="Laura">Laura</option>
                                        <option value="Carlos">Carlos</option>
                                    </datalist>
                                </label>
                                <label className='WrapperCustomer-label'>
                                    <p>Date</p>
                                    <input type="datetime-local" name="date"/>
                                </label>
                            </fieldset>
                        </div>
                    </header>
                    <hr/>
                </form>
            </main>
        </div>
    )
}

export default MainDashboard
