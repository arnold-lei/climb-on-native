import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

class ClimbOnNative extends React.Component {
  render() {
    return <App />;
  }
}

AppRegistry.registerComponent('ClimbOnNative', () => ClimbOnNative);
