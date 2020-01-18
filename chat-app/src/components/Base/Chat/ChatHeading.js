import React from 'react';

const ChatHeading = ({name, numberOfUsers}) => {
    return (
        <div>
            <div>
                {/*<div>{name}</div>*/}
                {/*<div>*/}
                {/*    <span>{numberOfUsers ? numberOfUsers : null}</span>*/}
                {/*</div>*/}
                <div>김태빈</div>
                <div>
                    <span>(1)</span>
                </div>
            </div>
        </div>
    );
};

export default ChatHeading;