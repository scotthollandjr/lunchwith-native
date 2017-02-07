import React, { Component } from 'react';
import { Text, View, Modal, TouchableWithoutFeedback, Image } from 'react-native';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { toggleBiomodal } from '../actions';

class BioModal extends Component {
  renderData() {
    if (!this.props.user) {
      return;
    }

    let user = this.props.user.user;

    return (
      <Card>
        <CardSection style={styles.cardSectionStyle}>
          <Image
            style={styles.avatarImageStyle}
            source={{uri: user.avatarUrl}}
          />
        </CardSection>
        <CardSection style={styles.cardSectionStyle}>
          <Text style={styles.textStyle}>
            {user.first_name} {user.last_name}
          </Text>
        </CardSection>
        <CardSection style={styles.cardSectionStyle}>
          <Text style={styles.textStyle}>
            {user.bio}
          </Text>
        </CardSection>
        <CardSection style={styles.cardSectionStyle}>
          <Text style={styles.textStyle}>
            Skills: {user.skills[0] + ', ' + user.skills[1] + ', ' + user.skills[2] }
          </Text>
        </CardSection>
        <CardSection style={styles.cardSectionStyle}>
          <Button
            text="Send Message"
          />
          <Button
            text="Suck Duck"
          />
        </CardSection>
      </Card>
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
        <TouchableWithoutFeedback onPress={() => this.props.toggleBiomodal()}>
          <View style={styles.containerStyle}>
            {this.renderData()}
          </View>
        </TouchableWithoutFeedback>
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
    height: 500,
    justifyContent: 'center',
  },
  avatarImageStyle: {
    height: 350,
    width: 350,
    justifyContent: 'center',
  }
};

const mapStateToProps = ({ map }) => {
  const { showModal } = map;

  return { showModal };
}

export default connect(mapStateToProps, {toggleBiomodal})(BioModal);
