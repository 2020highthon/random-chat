import React, {Component} from 'react';

class Messages extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {messages, user, typingUsers} = this.props;
        return (
            <div>
                <div>
                    {/*{*/}
                    {/*    messages.map((mes) => {*/}
                    {/*        return (*/}
                    {/*            <div key={mes.id} className={`message-container ${mes.sender === user.name && 'right'}`}>*/}
                    {/*                <div>{mes.time}</div>*/}
                    {/*                <div>*/}
                    {/*                    <div>{mes.sender}</div>*/}
                    {/*                    <div>{mes.message}</div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*}*/}
                    <div>
                        <div>06:18</div>
                        <div>
                            <div>김태빈:</div>
                            <div>아 배고프다</div>
                        </div>
                    </div>
                    {/*{*/}
                    {/*    typingUsers.map((name) => {*/}
                    {/*        return (*/}
                    {/*            <div key={name}>{`${name}님이 입력중입니다.`}</div>*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*}*/}
                </div>
            </div>
        );
    }
}

export default Messages;