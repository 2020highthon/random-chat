import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {shadow} from "../../../lib/styleUtil";

const ShadowedBox = styled.div`
    margin: 0 auto;
    width: 350px; 
    height: 500px;
    border: 1px solid black;
    border-radius: 10%;
    ${shadow(2)}
`;

const SearchButton = styled.div`
    margin-top: 40%;
    margin-left: auto;
    margin-right: auto;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background: green;
    opacity: 0.7;
`;

const TextArea = styled.div`
    font-weight: bold;
    font-size: 30px;
    margin-top: 7%;
    text-align: center;
    text-decoration: none;
    color: black;
`;

const SearchButton_1 = styled.div`
    margin-top: -52%;
    margin-left: auto;
    margin-right: auto;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: green;
    opacity: 0.5;
`;

const SearchButton_2 = styled.div`
    margin-top: -64%;
    margin-left: auto;
    margin-right: auto;
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background: green;
    opacity: 0.3;
`;
const TextArea_1 = styled.div`
    margin-top: 10px;
    text-align: center;
    text-decoration: none;
    color: black;
`
const Icon = styled.div`

`
const LinkTag = styled.a`
    text-decoration: none;
`


const StartBox = () => {
    return (
        <ShadowedBox>
            <LinkTag href="/chatting">
                <div>
                    <SearchButton/>
                    <SearchButton_1/>
                    <SearchButton_2/>
                    <TextArea>매칭하기</TextArea>
                    <TextArea_1>매칭 시 조금의 대기시간이 있을 <br/> 수 있습니다.</TextArea_1>
                    <Icon> <img src = "icon\search.png"/> </Icon>
                </div>
            </LinkTag>
        </ShadowedBox>

    );
};

export default StartBox;