import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Button from 'antd-mobile-rn/lib/button';

class AppMainView extends React.Component {
  render() {
    return (
      <View style={styles.appMainView}>
        <Button>Test Button</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appMainView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default AppMainView;
