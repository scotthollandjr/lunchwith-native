import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View, Dimensions, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { selectUser } from '../actions';
import BioModal from './BioModal';
var {height, width} = Dimensions.get('window');
import MapView, { Marker } from 'react-native-maps';

const ASPECT_RATIO = width / height;
const LATITUDE = 45.526977;
const LONGITUDE = -122.683028;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

let id = 0;

let users = [
  {
    id: 0,
    first_name: "Appa",
    last_name: "Sunflower",
    skills: ["", "", ""],
    bio: "My name is Appa",
    coordinate: {
      longitude: -122.6804352795281,
      latitude: 45.49031028995796,
    }
  },
  {
    id: 1,
    first_name: "Eli",
    last_name: "Skinny Mac",
    skills: ["", "", ""],
    bio: "My name is Eli",
    coordinate: {
      longitude: -122.6927766289744,
      latitude: 45.52556019729369,
    }
  },
  {
    id: 2,
    first_name: "Breakfast",
    last_name: "Princess",
    skills: ["", "", ""],
    bio: "My name is Breakfast",
    coordinate: {
      longitude: -122.6799167354337,
      latitude: 45.52846642077944,
    }
  },
  {
    id: 3,
    first_name: "Quee",
    last_name: "Queg",
    skills: ["", "", ""],
    bio: "My name is QueeQueg",
    coordinate: {
      longitude: -122.6789833560638,
      latitude: 45.52120058053362,
    }
  },
  {
    id: 4,
    first_name: "Chester",
    last_name: "Cheetoh",
    skills: ["", "", ""],
    bio: "My name is Chester",
    coordinate: {
      longitude: -122.6861392645663,
      latitude: 45.51553257367652,
    }
  },
  {
    id: 5,
    first_name: "Riff-Raff",
    last_name: "Holla",
    skills: ["", "", ""],
    bio: "My name is Riff-Raff",
    coordinate: {
      longitude: -122.6968212729106,
      latitude: 45.51989262962709,
    }
  },
  {
    id: 6,
    first_name: "Lil' Douggie",
    last_name: "McIntire",
    skills: ["", "", ""],
    bio: "My name is Lil' Douggie",
    coordinate: {
      longitude: -122.6551303277222,
      latitude: 45.52011062355635,
    }
  },
  {
    id: 7,
    first_name: "Feli",
    last_name: "of Skuntank",
    skills: ["", "", ""],
    bio: "My name is Feli",
    coordinate: {
      longitude: -122.6635307420512,
      latitude: 45.53260752981592,
    },
  },
  {
    id: 8,
    first_name: "Zoe",
    last_name: "King",
    skills: ["", "", ""],
    bio: "My name is Zoe",
    coordinate: {
      longitude: -122.6758720914976,
      latitude: 45.53979925769482,
    }
  },
  {
    id: 9,
    first_name: "Bohdi",
    last_name: "Hou",
    skills: ["", "", ""],
    bio: "My name is Bohdi",
    coordinate: {
      longitude: -122.6698569800027,
      latitude: 45.50717485546119,
    }
  }
]

class MainMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: [],
      showModal: false,
    };
  }

  onMapPress(event) {
    return;
  }

  onMarkerClick(user) {
    console.log(user);
    this.props.selectUser({ user });
    this.setState({ showModal: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO,
          }}
          onPress={(event) => this.onMapPress(event)}
        >
          {users.map(user => (
            <MapView.Marker
              coordinate={user.coordinate}
              key={user.id}
              title={user.first_name + ' ' + user.last_name}
              onPress={() => this.onMarkerClick(user)}>
            </MapView.Marker>
          ))}
        </MapView>
        <BioModal
          visible={this.state.showModal}
          user={this.props.user}
        >
        </BioModal>
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

const mapStateToProps = ({ map }) => {
  const { user } = map;

  return { user };
}

export default connect(mapStateToProps, {selectUser})(MainMap);

// const customStyle = [
//   {
//     featureType: "landscape.man_made",
//     stylers: [
//       {
//         color: "#4b4b4b",
//       },
//     ],
//   },
//   {
//     featureType: "landscape.natural",
//     stylers: [
//       {
//         color: "#5f5f5f",
//       },
//     ],
//   },
//   {
//     featureType: "administrative",
//     stylers: [
//       {
//         color: "#5f5f5f",
//       },
//     ],
//   },
//   {
//     featureType: "administrative",
//     elementType: "labels.icon",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#ebebeb",
//       },
//     ],
//   },
//   {
//     featureType: "water",
//     stylers: [
//       {
//         color: "#808080",
//       },
//     ],
//   },
//   {
//     featureType: "transit",
//     elementType: "labels",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "transit.line",
//     stylers: [
//       {
//         color: "#333333",
//       },
//     ],
//   },
//   {
//     featureType: "road",
//     stylers: [
//       {
//         color: "#333333",
//       },
//     ],
//   },
//   {
//     featureType: "road.highway",
//     stylers: [
//       {
//         color: "#3d3d3d",
//       },
//     ],
//   },
//   {
//     elementType: "labels.text.fill",
//     stylers: [
//       {
//         color: "#ebebeb",
//       },
//     ],
//   },
//   {
//     elementType: "labels.text.stroke",
//     stylers: [
//       {
//         color: "#000000",
//       },
//     ],
//   },
//   {
//     featureType: "poi",
//     stylers: [
//       {
//         visibility: "off",
//       },
//     ],
//   },
//   {
//     featureType: "transit.station.airport",
//     stylers: [
//       {
//         color: "#4b4b4b",
//       },
//     ],
//   },
// ]
