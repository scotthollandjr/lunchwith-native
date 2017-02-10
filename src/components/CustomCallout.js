
import React, { PropTypes } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

class CustomCallout extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.amount}>
          {this.props.children}
        </View>
      </View>
    );
  }
}

CustomCallout.propTypes = propTypes;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 100,
    borderColor: '#999',
    borderWidth: 0.5,
  },
  amount: {
    flex: 1,
    backgroundColor: 'transparent'
  },
});

module.exports = CustomCallout;
