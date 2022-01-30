import React from 'react';
import './formproduct.css'

function FormProduct() {
	return <div className='WrapperFormProduct u-my-1'>
		<h3 className='WrapperFormProduct-h3'>Created Product</h3>
		<h4 className='WrapperFormProduct-h4 u-my-0'>Add</h4>
		<form className='FormProduct'>
			<input className='FormProduct-input ' type='text' name='name' placeholder='product name' />
			<input className='FormProduct-input FormProduct-input--quantity u-ml-0' type='text' name='work' placeholder='quantity' />
			<button className='btn btn--primary FormProduct-button' type='submit'>Add</button>
			<button className='btn FormProduct-button' type='reset'>Clean</button>
		</form>
	</div>;
}

export default FormProduct;
