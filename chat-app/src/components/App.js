import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, Auth } from '../pages';
import HeaderContainer from '../containers/Base/HeaderContainer';

import storage from '../lib/storage';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../redux/modules/user';
import Chat from "../pages/Chat";

class App extends Component {
    componentDidMount() {
        this.initializeUserInfo();
    }

    initializeUserInfo = async () => {
        const loggedInfo = storage.get('loggedInfo'); // 로그인 정보를 로컬스토리지에서 가져옵니다.
        if(!loggedInfo) return; // 로그인 정보가 없다면 여기서 멈춥니다.

        const { UserActions } = this.props;
        UserActions.setLoggedInfo(loggedInfo);
        try {
            await UserActions.checkStatus();
        } catch (e) {
            storage.remove('loggedInfo');
            window.location.href = '/auth/login?expired';
        }
    };

    render() {
        return (
            <div>
                <HeaderContainer/>
                <Route exact path="/" component={Home}/>
                <Route path="/auth" component={Auth}/>
                <Route path="/chatting" component={Chat}/>
            </div>
        );
    }
}

export default connect(
    null,
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(App);