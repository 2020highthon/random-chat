import React, { Component } from 'react';
import StartBox from "../components/Base/Start/StartBox";
import styled from "styled-components";

const Page = styled.div`
    margin-top: 70px;
    margin-left: 100px;
    margin-right: 100px;
`;


class Home extends Component {
    render() {
        return (
            <Page>
                <StartBox/>
            </Page>

        );
    }
}

export default Home;