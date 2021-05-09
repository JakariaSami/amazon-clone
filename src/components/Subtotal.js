import React from 'react'
import './css/Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../StateProvider.js'
import {getBasketTotal} from '../reducer.js'

function Subtotal () {
	const [{basket}, dispatch] = useStateValue()

	return (
		<div className="subtotal">
			<CurrencyFormat
			renderText={(value) => (
				<React.Fragment>
					<p>
						Subtotal ({basket.length} items) : <strong>{`${value}`}</strong>
					</p>
					<small className='subtotal_gift'>
						<input type="checkbox"/> This order contains a Gift
					</small>
				</React.Fragment>
			)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			 />
			<button>Proceed to Checkout</button>
		</div>
	)
}

export default Subtotal
