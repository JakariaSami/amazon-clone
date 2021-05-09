import React from 'react'
import './css/Home.css'
import Product from './Product.js'

function Home (){
	return(
		<div className='home'>
			<img className='home_image' src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg" alt=""/>
			
			<div className='home_row'>
				<Product 
				id='1234'
				title='New Apple MacBook Pro with Apple M1 Chip - Space Gray (Latest Model)'
				price={2300}
				rating={5}
				image='https://m.media-amazon.com/images/I/71an9eiBxpL._AC_UY218_.jpg'/>

				<Product 
				id='5678'
				title='Apple 16" MacBook Pro with Touch Bar, 9th-Gen 8-Core Intel i9 2.3GHz'
				price={2800}
				rating={5}
				image='https://m.media-amazon.com/images/I/61qNHbx9LDL._AC_UY218_.jpg'/>
				<Product 
				id='9101'
				title='New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)'
				price={1100}
				rating={5}
				image='https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY218_.jpg'/>
				<Product 
				id='1213'
				title='Apple Watch Series 6 With New Powerfult Chip'
				price={700}
				rating={4}
				image='https://m.media-amazon.com/images/I/61MM7tB7iWL._AC_UL320_.jpg'/>
			</div>

			<div className='home_row'>
				<Product 
				id='1415'
				title='Samsung Galaxy Note 20 256GB N980F/DS S-Pen 6.7” Triple Camera GSM LTE Factory Unlocked Smartphone.'
				price={1300}
				rating={5}
				image='https://m.media-amazon.com/images/I/61SOUv7GCpL._AC_UY218_.jpg'/>

				<Product 
				id='1617'
				title='Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim'
				price={280}
				rating={3}
				image='https://m.media-amazon.com/images/I/81Wt3h7-V2L._AC_UY218_.jpg'/>
				<Product 
				id='1819'
				title='DIERYA DK61E 60% Mechanical Gaming Keyboard, RGB Backlit Wired PBT Keycap Waterproof'
				price={55}
				rating={4}
				image='https://m.media-amazon.com/images/I/51vDOyGtMGL._AC_UY218_.jpg'/>
			</div>
			<div className='home_row'>
				<Product 
				id='2021'
				title='ASUS ROG Strix XG43VQ 43? Super Ultra-Wide Curved HDR Gaming Monitor 120Hz (3840 x 1200) 1ms FreeSync 2 HDR DisplayHDR 400 90% DCI-P3,BLACK'
				price={1500}
				rating={5}
				image='https://m.media-amazon.com/images/I/81xhJYiF3LL._AC_UY218_.jpg'/>
			</div>
		</div>
	)
}

export default Home