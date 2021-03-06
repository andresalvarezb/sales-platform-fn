import React from 'react';
import './headerformdashboard.css'

function HeaderFormDashboard() {
    return (
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
                        <input type="text" name="Contact" value={'other thing'} disabled />
                    </label>
                </fieldset>

                <fieldset className='WrapperForm-fieldset WrapperForm-fieldset--seller WrapperSeller'>
                    <label className='WrapperCustomer-label'>
                        <p>Number</p>
                        <input type="number" name="number" />
                    </label>
                    <label className='WrapperCustomer-label'>
                        <p>Seller</p>
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
                        <input type="datetime-local" name="date" />
                    </label>
                </fieldset>
            </div>
        </header>
    );
}

export default HeaderFormDashboard;
