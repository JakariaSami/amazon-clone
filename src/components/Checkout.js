import React from 'react'
import './css/Checkout.css'
import {useStateValue} from '../StateProvider'
import CheckoutProduct from './CheckoutProduct.js'
import Subtotal from './Subtotal.js'
import CurrencyFormat from 'react-currency-format'

function Checkout (){
	const [{basket}] = useStateValue();

	return(
		<div className='checkout'>
			<div className="checkout_left">
				<img className='checkout_ad' src="https://m.media-amazon.com/images/S/sonata-images-prod/US_SVOD_TruthSeekers/bd99f767-f365-4f00-8867-f696cac78e63._UR3000,600_SX1500_FMwebp_.jpg" alt=""/>
				{
					basket?.length === 0 ? (
						<div>
							<h2 className='checkout_title'>Yout Shopping Basket is Empty</h2>
						</div>
					) : (
						<div>
							<h2 className='checkout_title'>Your Shopping Basket</h2>
							{basket.map(item => (
								<CheckoutProduct 
									id={item.id}
									title={item.title}
									image={item.image}
									price={item.price}
									rating={item.rating}
									/>
								))}
						</div>
				)}
			</div>
			{basket.length > 0 && (
				<div className="checkout_right">
					<Subtotal/>
				</div>
			)}
		</div>
	)
}

export default Checkout
