import React from 'react';
import './tablerow.css'

function TableRow({product}) {
    const {productName, quantity, unitPrice} = product;
    const netTotal = (quantity * unitPrice).toFixed(2);
    const iva = (netTotal * 0.19).toFixed(2);
    const total = iva + netTotal

    
    return <>
        <tr className='TableBody-row'>
            <td>{productName}</td>
            <td>{quantity}</td>
            <td>$ {unitPrice}</td>
            <td>$ {iva}</td>
            <td>$ {total}</td>
            <td>
                <button type='button'>✅</button>
                <button type='button'>❌</button>
            </td>
        </tr>
    </>;
}

export default TableRow;
