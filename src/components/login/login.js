import React, { Component } from 'react';
import './login.css';

class Login extends Component {
	render(){
		return (
			<div className="loginWrapper">
				<div className="loginForm">
					<form>
						<label> Username : <input type="text" placeholder="username" /></label>
						<label> Password : <input type="password" placeholder="password" /></label>
						<button type="submit" value="login">Login</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;