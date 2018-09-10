import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import {Button} from 'react-native-elements';

import CreateNote from '../app-create-note';

class AppMainView extends React.Component {
  createNote = () => {
    this.props.navigator.push({
      title: 'Results',
      component: CreateNote,
      passProps: {text: 'Normal Note'}
    });
  }

  render() {
    return (
      <View style={styles.appMainView}>
        <Button raised title="Normal Note"
          onPress={this.createNote} />
        <Button raised title="Quick Note" />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  appMainView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#F5FCFF',
  },
});

export default AppMainView;
