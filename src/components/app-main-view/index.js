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
        <Button type='primary'>Normal Button</Button>
        <Button type='ghost'>Quick Button</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  appMainView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default AppMainView;
