import React, {Component} from 'react';
import styled from 'styled-components'

const Message = styled.div`
border-bottom: 1px black solid;
`
const Button = styled.button`
    text-decoration: none;
    border-radius : 20%;
    font-weight: bold;
    font-size: 20px;
    background: white;
    color: black;
    cursor: pointer;
`
const Input = styled.input`
    margin-left: 10%;
    font-size: 18px;
    width: 450px;
    height: 30px;
    border-radius : 20%;
    border: none;
`
class MessageInput extends Component {

    state = {
        message: "",
        isTyping: false
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.sendMessage()
        this.setState({message: ""})
    }

    sendMessage = () => {
        this.props.sendMessage(this.state.message)

    }

    componentWillUnmount() {
        this.stopCheckingTyping()
    }

    sendTyping = () => {
        this.lastUpdateTime = Date.now()
        if (!this.state.isTyping) {
            this.setState({isTyping: true})
            this.props.sendTyping(true)
            this.startCheckingTyping()
        }
    }

    /*
    *	startCheckingTyping
    *	Start an interval that checks if the user is typing.
    */
    startCheckingTyping = () => {
        console.log("Typing");
        this.typingInterval = setInterval(() => {
            if ((Date.now() - this.lastUpdateTime) > 300) {
                this.setState({isTyping: false})
                this.stopCheckingTyping()
            }
        }, 300)
    }

    /*
    *	stopCheckingTyping
    *	Start the interval from checking if the user is typing.
    */
    stopCheckingTyping = () => {
        console.log("Stop Typing");
        if (this.typingInterval) {
            clearInterval(this.typingInterval)
            this.props.sendTyping(false)
        }
    }


    render() {
        const { message } = this.state
        return (
            <Message className="message-input">
                <form
                    onSubmit={ this.handleSubmit }
                    className="message-form">
                    <Input
                        id = "message"
                        type = "text"
                        className = "form-control"
                        value = { message }
                        autoComplete = {'off'}
                        placeholder = "채팅쳐 "
                        onKeyUp = { e => { e.keyCode !== 13 && this.sendTyping() } }
                        onChange = {
                            ({target})=>{
                                this.setState({message:target.value})
                            }
                        }
                    />
                    <Button
                        disabled = { message.length < 1 }
                        type = "submit"
                        className = "send"
                    > 전송 </Button>
                    
                </form>
            </Message>
        );
    }
}

export default MessageInput;