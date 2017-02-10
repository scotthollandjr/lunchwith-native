import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { selectUser, toggleBiomodal } from '../actions';
import BioModal from './BioModal';
var {height, width} = Dimensions.get('window');
import MapView, { Marker } from 'react-native-maps';

import CustomCallout from './CustomCallout';
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
    skills: ["Biting", "Cross-Eyes", "Q-Tips"],
    bio: "My name is Appa",
    avatarUrl: "https://s-media-cache-ak0.pinimg.com/736x/58/2b/fa/582bfac8dab69c53984c2fa8642db942.jpg",
    coordinate: {
      longitude: -122.6804352795281,
      latitude: 45.49031028995796,
    }
  },
  {
    id: 1,
    first_name: "Eli",
    last_name: "Skinny Mac",
    skills: ["Ears", "Climbing", "Baby Mice"],
    bio: "My name is Eli",
    avatarUrl: "https://s-media-cache-ak0.pinimg.com/736x/85/a7/39/85a739f5737ceced2aedbb8f31178d74.jpg",
    coordinate: {
      longitude: -122.6927766289744,
      latitude: 45.52556019729369,
    }
  },
  {
    id: 2,
    first_name: "Breakfast",
    last_name: "Anne",
    skills: ["Sneezing", "Dinner", "Mutton Chops"],
    bio: "My name is Breakfast",
    avatarUrl: "https://pbs.twimg.com/profile_images/506522217052528640/wBUjUJSK_400x400.jpeg",
    coordinate: {
      longitude: -122.6799167354337,
      latitude: 45.52846642077944,
    }
  },
  {
    id: 3,
    first_name: "Quee",
    last_name: "Queg",
    skills: ["Subaru", "Porch Lights", "Picking Fights"],
    bio: "My name is QueeQueg",
    avatarUrl: "https://pbs.twimg.com/profile_images/708067740888801280/7rTsSuBP.jpg",
    coordinate: {
      longitude: -122.6789833560638,
      latitude: 45.52120058053362,
    }
  },
  {
    id: 4,
    first_name: "Chester",
    last_name: "Cheetoh",
    skills: ["Rocks", "Star Trek", "Other Cats"],
    bio: "My name is Chester",
    avatarUrl: "https://pbs.twimg.com/profile_images/668439459986350081/gfVktJWg.jpg",
    coordinate: {
      longitude: -122.6861392645663,
      latitude: 45.51553257367652,
    }
  },
  {
    id: 5,
    first_name: "Riff-Raff",
    last_name: "Holla",
    skills: ["Tattoos", "Doritos", "Ska"],
    bio: "My name is Riff-Raff",
    avatarUrl: "https://ih1.redbubble.net/image.73670090.0092/flat,1000x1000,075,f.u2.jpg",
    coordinate: {
      longitude: -122.6968212729106,
      latitude: 45.51989262962709,
    }
  },
  {
    id: 6,
    first_name: "Lil' Douggie",
    last_name: "McIntire",
    skills: ["Green Shakes", "Charcuterie", "Drones"],
    bio: "My name is Lil' Douggie",
    avatarUrl: "https://s-media-cache-ak0.pinimg.com/236x/1b/92/e2/1b92e2949becda1f180d46fc4b546690.jpg",
    coordinate: {
      longitude: -122.6551303277222,
      latitude: 45.52011062355635,
    }
  },
  {
    id: 7,
    first_name: "Feli",
    last_name: "of Skuntank",
    skills: ["Cigarettes", "PBR", "Thrash Brass"],
    bio: "My name is Feli",
    avatarUrl: "https://s-media-cache-ak0.pinimg.com/originals/95/ed/a7/95eda7740e1745ccd6ac85250e7b42f6.jpg",
    coordinate: {
      longitude: -122.6635307420512,
      latitude: 45.53260752981592,
    },
  },
  {
    id: 8,
    first_name: "Zoe",
    last_name: "King",
    skills: ["String", "Donuts", "Reeses"],
    bio: "My name is Zoe",
    avatarUrl: "https://s-media-cache-ak0.pinimg.com/736x/34/ba/db/34badbcd09831ed25743cb2850177737.jpg",
    coordinate: {
      longitude: -122.6758720914976,
      latitude: 45.53979925769482,
    }
  },
  {
    id: 9,
    first_name: "Bohdi",
    last_name: "Hou",
    skills: ["Dim Sum", "Kibble", "Fusion"],
    bio: "My name is Bohdi",
    avatarUrl: "https://www.sturbridgeyankee.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/r/brown_tabby_cat_1.jpg",
    coordinate: {
      longitude: -122.6698569800027,
      latitude: 45.50717485546119,
    }
  }
]

class MainMap extends Component {
  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = JSON.stringify(position);
        this.setState({initialPosition});
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({lastPosition});
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      markers: [],
      region: {
        latitude: 45.526977,
        longitude: -122.683028,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  onMapPress(event) {
    return;
  }

  onMarkerClick(user) {
    let lat = user.coordinate.latitude - .01;
    let long = user.coordinate.longitude + .01;

    console.log("lat", lat);
    console.log("long", long);

    this.setState({ region: {
      latitude: lat,
      longitude: long,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      },
    });
  }

  onCalloutClick(user) {
    console.log(user);
    // this.props.selectUser({ user });
    // this.props.toggleBiomodal();
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={this.state.region}
          onPress={(event) => this.onMapPress(event)}
        >
          {users.map(user => (
            <MapView.Marker
              key={user.id}
              coordinate={user.coordinate}
              title={user.first_name + ' ' + user.last_name}
              onPress={() => this.onMarkerClick(user)}
              >
              <MapView.Callout
                tooltip>
                <CustomCallout
                  onPress={() => this.onCalloutClick(user)}>
                  <Text>{user.first_name} {user.last_name} </Text>
                </CustomCallout>
              </MapView.Callout>
            </MapView.Marker>
          ))}
        </MapView>
        <BioModal
          visible={this.props.showModal}
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
    height: height,
  },
  avatarImageStyle: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  // customView: {
  //   width: 150,
  //   height: 150,
  // },
});

const mapStateToProps = ({ map }) => {
  const { user, showModal } = map;

  return { user, showModal };
}

export default connect(mapStateToProps, {selectUser, toggleBiomodal})(MainMap);

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
