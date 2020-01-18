import React, { Component } from 'react';
import { VERIFY_USER } from '../Events'

export default class LoginForm extends Component {
	state = {
		nickname:"",
		error:""
	};

	setUser = ({user, isUser})=>{

		if(isUser){
			this.setError("User name taken");
		}else{
			this.setError("");
			this.props.setUser(user)
		}
	};

	handleSubmit = (e)=>{
		e.preventDefault();
		const { socket } = this.props;
		const { nickname } = this.state;
		socket.emit(VERIFY_USER, nickname, this.setUser)
	};

	handleChange = (e)=>{
		this.setState({nickname:e.target.value})
	};

	setError = (error)=>{
		this.setState({error})

	};

	render() {
		const { nickname, error } = this.state
		return (
			<div className="login">
				<form onSubmit={this.handleSubmit} className="login-form" >
					<input
						ref={(input)=>{ this.textInput = input }}
						type="text"
						id="nickname"
						value={nickname}
						onChange={this.handleChange}
						placeholder={'이름을 입력해주세요.'}
						/>
						<div className="error">{error ? error:null}</div>

				</form>
			</div>
		);
	}
}
