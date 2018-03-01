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
        <Pano source={asset('planoz1.jpg')}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('masPlayVR', () => masPlayVR);
