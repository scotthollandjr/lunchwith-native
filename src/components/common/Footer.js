import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Footer = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Icon style={styles.textStyle} name="home" />
      <Icon style={styles.textStyle} name="search" />
      <Icon style={styles.textStyle} name="comments" />
    </View>
  );
};


const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    elevation: 2,
    position: 'relative',
  },
  textStyle: {
    fontSize: 35,
    margin: 10,
  }
};

export { Footer };
