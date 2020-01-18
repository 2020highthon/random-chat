import React, {Component} from 'react';
import {VERIFY_USER} from '../../Events'
import styled from "styled-components";
import oc from "open-color";
import {shadow} from "../../lib/styleUtil";

const Wrapper = styled.div`
    margin-top: 100px;
`;

class LoginForm extends Component {
    state = {
        nickname: "",
        error: ""
    };

    setUser = ({user, isUser}) => {

        if (isUser) {
            this.setError("User name taken");
        } else {
            this.setError("");
            this.props.setUser(user)
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {socket} = this.props;
        const {nickname} = this.state;
        socket.emit(VERIFY_USER, nickname, this.setUser)
    };

    handleChange = (e) => {
        this.setState({nickname: e.target.value})
    };

    setError = (error) => {
        this.setState({error})

    };

    render() {
        const {nickname, error} = this.state;
        return (
            <Wrapper>
                <div className="login">
                    <form onSubmit={this.handleSubmit} className="login-form">
                        <input
                            type="text"
                            id="nickname"
                            value={nickname}
                            onChange={this.handleChange}
                            placeholder={'이름을 입력해주세요.'}
                        />
                        <div className="error">{error ? error : null}</div>
                    </form>
                </div>
            </Wrapper>
        );
    }
}

export default LoginForm;