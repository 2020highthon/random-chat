import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import {shadow} from "../../../lib/styleUtil";
import search from "../../../icon/search.png"

const ShadowedBox = styled.div`
    margin: 0 auto;
    width: 350px; 
    height: 500px;
    border: 1px solid black;
    border-radius: 10%;
    ${shadow(2)}
`;

const SearchButton = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background-color: #1DDB16;

`;

const TextArea = styled.div`
    font-weight: bold;
    font-size: 30px;
    margin-top: 83%;
    text-align: center;
    text-decoration: none;
    color: black;
`;

const SearchButton_1 = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #53FF4C;
`;

const SearchButton_2 = styled.div`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 240px;
    height: 240px;
    border-radius: 50%;
    background-color: #89FF82; 
`;
const TextArea_1 = styled.div`
    margin-top: 10px;
    text-align: center;
    text-decoration: none;
    color: black;
`
const Icon = styled.div`
position: absolute;
top: 30%;
left: 50%;
transform: translate(-50%, -50%);
`
const LinkTag = styled.a`
    text-decoration: none;
`
const StartBox = () => {
    return (
        <ShadowedBox>
            <LinkTag href="/chatting">
                <div>
                    <SearchButton_2/>
                    <SearchButton_1/>
                    <SearchButton/>
                    <Icon> <img src={search}/> </Icon>
                    <TextArea>매칭하기</TextArea>
                </div>
            </LinkTag>
            <TextArea_1>매칭 시 조금의 대기시간이 있을 <br/> 수 있습니다.</TextArea_1>
        </ShadowedBox>

    );
};

export default StartBox;