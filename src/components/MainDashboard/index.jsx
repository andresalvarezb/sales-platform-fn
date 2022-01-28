import React from 'react'
import Input from '../Input';
// import IconTask from '../IconTask';
import './main.css';

// const optionCustomers = [
//     {value: 'Andres', key: 'Andres'},
//     {value: 'Lisa', key: 'Lisa'},
//     {value: 'Silvia', key: 'Silvia'},
// ]
function MainDashboard() {
    return (
        <div className='container-main'>
            <main className='main-dashboard'>
                <form action="" className='form'>
                    <header className='container-header'>
                        <h2>New bill</h2>
                        <div className='header-form'>
                            <fieldset className='container-customer'>
                                <label htmlFor="">
                                    <p>Type</p>
                                    <select name="electronicBill" id="">
                                        <option value="">---</option>
                                        <option value="EB">Electronic Bill</option>
                                    </select>
                                </label>
                                <label>
                                    <p>name</p>
                                    <input list='list' name='name' />
                                    <datalist id='list'>
                                        <option value="andres">andres</option>
                                        <option value="sofia">sofia</option>
                                        <option value="Laura">Laura</option>
                                        <option value="Carlos">Carlos</option>
                                    </datalist>
                                </label>
                                <Input type="text" name="Contact" value={'other thing'} disabled/>
                                <Input type="datetime-local" name="date" />
                            </fieldset>

                            <fieldset >
                                <Input type="number" name="Number" />
                                <label htmlFor="">
                                    <p>seller</p>
                                    <input list='seller' name="" id="" />
                                    <datalist id='seller'>
                                        <option value="andres">andres</option>
                                        <option value="sofia">sofia</option>
                                        <option value="Laura">Laura</option>
                                        <option value="Carlos">Carlos</option>
                                    </datalist>
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
