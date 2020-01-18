import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {shadow} from "../../../lib/styleUtil";

const ShadowedBox = styled.div`
    margin: 0 auto;
    width: 500px; 
    height: 500px;
    border: 1px solid black;
    ${shadow(2)}
`;

const SearchButton = styled.div`
    margin: 50px auto;
    width: 250px;
    height: 350px;
    border-radius: 15px;
    background: green;
`;

const TextArea = styled.div`
    text-align: center;
    text-decoration: none;
`;

const StartBox = () => {
    return (
        <ShadowedBox>
            <Link to="chatting">
                <div>
                    <SearchButton/>
                    <TextArea>입장하기</TextArea>
                </div>
            </Link>
        </ShadowedBox>

    );
};

export default StartBox;