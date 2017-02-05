import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import MainMap from './components/MainMap';

const RouterComponent = () => {
  return (
    <Router sceneStyle={ styles.global }>
      <Scene key="auth" initial>
        <Scene key="login" component={LoginForm} title="Login" />
        <Scene key="signup" component={SignupForm} title="Signup" initial />
      </Scene>
      <Scene key="main">
        <Scene key="map" component={MainMap} title="LunchWith" initial />
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
