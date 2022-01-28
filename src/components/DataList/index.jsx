import React from 'react';
// import Input from '../Input';

function DataList(list, name) {
    // const optionCustomers = [
    //     {value: 'Andres', other_option: 'Andres', position: 1},
    //     {value: 'Lisa', other_option: 'Lisa', position: 2},
    //     {value: 'Silvia', other_option: 'Silvia', position: 3},
    // ]
    return (
        <label>
            <span>{name}</span>
            <input list={list} name={name} />
            <datalist id={list}>
                <option value="andres">andres</option>
                <option value="sofia">sofia</option>
                <option value="Laura">Laura</option>
                <option value="Carlos">Carlos</option>
            </datalist>
        </label>
    );
}

export default DataList;
