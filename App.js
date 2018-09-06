/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  NavigatorIOS,
  View,
} from 'react-native';

import AppScreen from './src/components/app-screen';

class AppContainer extends React.Component {
  state = {
    loading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 1000);
  }

  render() {
    const {loading} = this.state;
    return (
      <View>
        {
          loading ? <AppScreen /> : null
        }
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'My Expense Note',
          component: AppContainer,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
