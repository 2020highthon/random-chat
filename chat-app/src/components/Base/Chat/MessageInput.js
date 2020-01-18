import React, {Component} from 'react';

class MessageInput extends Component {
    state = {
        message: "",
        isTyping: false
    };

    render() {
        const {message} = this.state;
        return (
            <div>
                <form>
                    <input type="text" value={message} placeholder="채팅 내용을 입력해주세요"/>
                    <button type="submit">전송</button>
                </form>
            </div>
        );
    }
}

export default MessageInput;