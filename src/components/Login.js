import React, {useState} from 'react'
import './css/Login.css'
import {Link, useHistory} from 'react-router-dom'
import {auth} from '../Firebase.js'

function Login () {
	const history = useHistory()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const login = e => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(email, password)
		.then((auth) => {
			history.push('/')
		}).catch((e) => alert(e.message))
	}
  const register = e => {
		e.preventDefault();
		auth.createUserWithEmailAndPassword(email, password)
		.then((auth) => {
			history.push('/')
		}).catch((e) => alert(e.message))
	}

	return (
		<div className="login">
			<Link to='/'>
				<img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
			</Link>

			<div className="login_container">
				<h1>Sign In</h1>
				<form>
					<h5>E-mail</h5>
					<input value={email} onChange={event => setEmail(event.target.value)} type="email"/>
					<h5>Password</h5>
					<input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
					<button onClick={login} type='submit' className='login_signInButton'>Sign In</button>
				</form>
				<p>By signing-in you agree to Amazon's Conditions of use and sales. Please see our Privacy Notice, our Cookies notice and our interest based Ads notice.</p>
				<button onClick={register} className='login_registerButton'>Create your Amazon Account</button>
			</div>
		</div>
	)
}
export default Login