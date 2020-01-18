import React, {Component} from 'react';
import styled from 'styled-components'

const Name = styled.div`
border-top: 1px black solid;
font-size: 20px;
font-weight: bold;
margin: 0px 0px 10px 10%;
`
const Message = styled.div`
font-size: 15px;
margin: 0px 0px 10px 10%;

`
const Time = styled.div`
color: #8BAE63;
border-top: 1px black solid;
float: right;
font-size: 25px;
`
const TypingUser = styled.div`
font-size: 10px;
margin-left: 10%;
`

class Messages extends Component {
    constructor(props) {
        super(props);

        // this.scrollDown = this.scrollDown.bind(this)
    }

    // scrollDown() {
    //     const {container} = this.refs
    //     container.scrollTop = container.scrollHeight
    // }

    // componentDidMount() {
    //     // this.scrollDown()
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     this.scrollDown()
    // }

    render() {
        const {messages, user, typingUsers} = this.props;
        return (
            <div className="thread-container">
                <div className="thread">
                    {
                        messages.map((mes) => {
                            return (
                                <div
                                    key={mes.id}
                                    className={`message-container ${mes.sender === user.name && 'right'}`}
                                >
                                    <Time className="time">{mes.time}</Time>
                                    <div className="data">
                                        <Name className="name">{mes.sender}</Name>
                                        <Message className="message">{mes.message}</Message>
                                    </div>
                                </div>

                            )
                        })
                    }
                    {
                        typingUsers.map((name) => {
                            return (
                                <TypingUser key={name} className="typing-user">
                                    {`${name}님이 입력중입니다.`}
                                </TypingUser>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Messages;