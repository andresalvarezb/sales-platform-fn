import React from 'react';
import TableRow from '../TableRow';
import './table.css'

const products = [{
	"id": "5852286389",
	"productName": "Bread Bowl Plain",
	"quantity": 3,
	"unitPrice": 139.59
}, {
	"id": "0336738870",
	"productName": "Soup - Knorr, Country Bean",
	"quantity": 15,
	"unitPrice": 583.01
}, {
	"id": "8057954868",
	"productName": "Wine - Ice Wine",
	"quantity": 17,
	"unitPrice": 455.97
}, {
	"id": "5387884070",
	"productName": "Glass Clear 8 Oz",
	"quantity": 15,
	"unitPrice": 434.08
}, {
	"id": "7258642714",
	"productName": "Bowl 12 Oz - Showcase 92012",
	"quantity": 17,
	"unitPrice": 281.48
}, {
	"id": "2545999539",
	"productName": "Chicken - Tenderloin",
	"quantity": 2,
	"unitPrice": 160.81
}, {
	"id": "5260296575",
	"productName": "Soup - Campbells Bean Medley",
	"quantity": 5,
	"unitPrice": 799.33
}, {
	"id": "6019867080",
	"productName": "Glucose",
	"quantity": 11,
	"unitPrice": 67.63
}, {
	"id": "1573944882",
	"productName": "Lettuce - Red Leaf",
	"quantity": 6,
	"unitPrice": 2.52
}, {
	"id": "2861912669",
	"productName": "Nescafe - Frothy French Vanilla",
	"quantity": 2,
	"unitPrice": 447.66
}]

function Table() {
	return <>
		<table className='FormDashboard-table Table'>
			<thead className='TableHead'>
				<tr className='TableHead-row'>
					<th>Product</th>
					<th>Quantity</th>
					<th>Unit price</th>
					<th>iva</th>
					<th>Total</th>
				</tr>
			</thead>
			<tbody className='TableBody'>
				{
					products.map((product) => (
						<TableRow product={product} key={product.id} />
					))
				}
				<tr className='TableBody-total'>
					<td>Total</td>
					<td>7515954</td>
				</tr>
				<tr>
					<button className='btn btn--primary ' type='submit'>Save</button>
					<button className='btn' type='reset'>Cancel</button>
				</tr>
			</tbody>
		</table>
	</>
}

export default Table;
