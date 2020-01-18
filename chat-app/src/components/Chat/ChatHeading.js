import React from 'react';
import styled from 'styled-components'
const UserName = styled.div`
font-size: 10px;
margin: 0px 0px 10px 10%;
`
const ChatHeading = ({name, numberOfUsers}) => {
    return (
        <div className="chat-header">
            <div className="user-info">
                <UserName className="user-name">{name}</UserName>
                <div className="status">
                    <div className="indicator"></div>
                    <span>{numberOfUsers ? numberOfUsers : null}</span>
                </div>
            </div>
        </div>
    );
};

export default ChatHeading;