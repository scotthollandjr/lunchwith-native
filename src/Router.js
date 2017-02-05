import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import MainMap from './components/MainMap';

const RouterComponent = () => {
  return (
    <Router sceneStyle={ styles.global }>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login" initial />
      </Scene>
      <Scene key="main">
        <Scene key="map" component={MainMap} title="LunchWith" initia />
      </Scene>
    </Router>
  )
};

const styles = {
  global: {
    paddingTop: 65,
  }
}

export default RouterComponent;
