import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {Button} from 'react-native-material-ui';

class AppMainView extends React.Component {
  render() {
    return (
      <View style={styles.appMainView}>
        <Button>Normal Note</Button>
        <Button>Quick Note</Button>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  appMainView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default AppMainView;
