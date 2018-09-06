import React from 'react';
import {
  Image,
  View,
  StyleSheet,
} from 'react-native';

class AppScreen extends React.Component {
  render() {
    return (
      <View style={styles.appScreen}>
        <Image source={require('./img/house.png')} style={styles.screenImg}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  appScreen: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  screenImg: {
    width: 300,
    height: 200,
  },
});

export default AppScreen;
