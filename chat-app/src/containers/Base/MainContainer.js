import React, {Component} from 'react';
import io from 'socket.io-client';
import ChatContainer from "../../components/Base/Chat/ChatContainer";
import styled from "styled-components";

const Page = styled.div`
    margin-top: 70px;
    margin-left: 100px;
    margin-right: 100px;
`;


const socketUrl = "";

class MainContainer extends Component {
    state = {
        socket: null,
        user: null
    };

    // componentWillMount() {
    //     this.setUser();
    //     this.initSocket();
    // }
    //
    // setUser = (user) => {
    //     const {socket} = this.state;
    //     socket.emit("USER_CONNECTED", user);
    //     this.setState({user});
    // };
    //
    // initSocket = () => {
    //     const socket = io(socketUrl);
    //
    //     socket.on('connect', () => {
    //         console.log("소켓 연결에 성공했습니다.");
    //     });
    //
    //     this.setState({socket});
    // };

    render() {
        const {socket, user} = this.state;
        return (
            <Page>
                {/*<ChatContainer socket={socket} user={user}/>*/}
                <ChatContainer/>
            </Page>
        );
    }
}

export default MainContainer;