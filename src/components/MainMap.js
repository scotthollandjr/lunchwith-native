import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Dimensions} from 'react-native';
var {height, width} = Dimensions.get('window');
import MapView from 'react-native-maps';

class MainMap extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={{
          latitude: 45.526977,
          longitude: -122.683028,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  map: {
    width: width,
    height: height
  }
});

export default MainMap;
