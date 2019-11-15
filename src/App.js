import React, { Component } from 'react';
import { Provider,connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  BackAndroid,
  StyleSheet
} from 'react-native';
import { Scene, Router, TabBar, Modal, Schema, Actions, Reducer, ActionConst } from 'react-native-router-flux';
import LoginPage from './components/loginComponent.js';
import HomeIndex from './components/indexComponent.js';
import testIndex from './components/testComponent.js';
import TabIcon from './common/tabIcon';
export default class AppRoot extends Component {
  constructor(props) {
    super(props);
  }

  onExitApp(){
    BackAndroid.exitApp();
    return true;
  }
  render() {
    return (
        <Router onExitApp={this.onExitApp}
                scenes={ scenes }
        >
        </Router >
    )
  }
}

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#fff',
    height:64
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#fff'
  },
  titleStyle: {
    color: '#fff'
  },
})

const scenes = Actions.create(
    <Scene key="root" hideNavBar={true}>
      <Scene key="login" component={LoginPage} title="登录" hideNavBar={true} />
      <Scene key="tabbar"
             initial
             tabs={true}
             tabBarPosition="bottom"
             showLabel={false}
             tabBarStyle={styles.tabBarStyle}
             tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
             titleStyle={styles.titleStyle}>
        <Scene key="home"
               hideNavBar={true}
               component={HomeIndex}
               icon={TabIcon}
               titleStyle={styles.titleStyle}/>

        <Scene key="movies"
               hideNavBar={true}
               component={HomeIndex}
               icon={TabIcon}
               titleStyle={styles.titleStyle} />

        <Scene key="theaters"
               hideNavBar={true}
               component={testIndex}
               icon={TabIcon}
               titleStyle={styles.titleStyle} />

        <Scene key="me"
               hideNavBar={true}
               component={LoginPage}
               icon={TabIcon}
               titleStyle={styles.titleStyle} />
      </Scene>
    </Scene>
)
