import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection, Button } from './common';
import { connect } from 'react-redux';

class BioModal extends Component {
  renderData() {
    if (!this.props.user) {
      return;
    }

    let user = this.props.user.user;

    return (
      <CardSection style={styles.cardSectionStyle}>
        <Text style={styles.textStyle}>
          {user.first_name} {user.last_name}
        </Text>
        <Text style={styles.textStyle}>
          {user.bio}
        </Text>
      </CardSection>
    );
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button
        text="Login"
        onPress={this.onButtonPress.bind(this)}
      >
      </Button>
    );
  }

  render() {

    return (
      <Modal
        visible={this.props.visible}
        transparent
        animationType="slide"
        onRequestClose={() => {}}
      >
      <View style={styles.containerStyle}>
        {this.renderData()}
      </View>
      </Modal>
    );
  }
}

const styles = {
  cardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  }
};

export default BioModal;
