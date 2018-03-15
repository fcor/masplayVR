import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class masPlayVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('cuerpos2.jpg')}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('masPlayVR', () => masPlayVR);
