import React, {Component} from 'react';
import io from 'socket.io-client';
import LoginForm from "../components/Login/LoginForm";
import ChatContainer from "../components/Chat/ChatContainer";
import {USER_CONNECTED, LOGOUT} from '../Events'
const socketUrl = "";

class Chat extends Component {
    state = {
        socket: null,
        user: null
    };

    componentWillMount() {
        this.initSocket();
    }

    initSocket = ()=>{
        const socket = io(socketUrl);

        socket.on('connect', ()=>{
            console.log("Connected");
        });

        this.setState({socket});
    };

    setUser = (user)=>{
        const { socket } = this.state;
        socket.emit(USER_CONNECTED, user);
        this.setState({user})
    };

    logout = ()=>{
        const { socket } = this.state;
        socket.emit(LOGOUT);
        this.setState({user:null})
    };

    render() {
        const { socket, user } = this.state;
        return (
            <div className="container">
                {
                    !user ?
                        <LoginForm socket={socket} setUser={this.setUser} />
                        :
                        <ChatContainer socket={socket} user={user} logout={this.logout}/>
                }
            </div>
        );
    }
}

export default Chat;