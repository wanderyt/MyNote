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
import {BACKGROUND} from './src/config/COLOR';
import AppScreen from './src/components/app-screen';
import AppMainView from './src/components/app-main-view';

class AppContainer extends React.Component {
  state = {
    loading: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 100);
  }

  render() {
    const {loading} = this.state;
    return (
      <View>
        {
          loading ? <AppScreen /> : <AppMainView {...this.props} />
        }
      </View>
    );
  }
}

export {AppContainer};

export default class App extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        navigationBarHidden={true}
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
    backgroundColor: BACKGROUND,
  },
});
