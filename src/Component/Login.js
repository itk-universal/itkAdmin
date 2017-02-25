import React, { Component } from 'react';
import '../Stylesheets/Login.css';

class Login extends Component {
	render() {
		return (
			<form className="form-signin">
				<h2 className="form-signin-heading">请登录</h2>
				<label for="inputEmail" className="sr-only">手机号码</label>
				<input type="number" id="inputEmail" className="form-control" placeholder="请输入手机号码" required="true" />
				<label for="inputPassword" className="sr-only">密码</label>
				<input type="password" id="inputPassword" className="form-control" placeholder="请输入密码" required=""/>
				<div className="checkbox">
				  <label>
				    <input type="checkbox" value="remember-me"/>记住我
				  </label>
				</div>
				<button className="btn btn-lg btn-primary btn-block" type="submit">登录</button>
			</form>
		)
	}
}

export default Login