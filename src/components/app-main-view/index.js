import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {Button} from 'react-native-elements';

import CreateNote from '../app-create-note';
import CategoryItem from '../app-note-category';

class AppMainView extends React.Component {
  createNote = () => {
    // this.props.navigator.push({
    //   title: 'Results',
    //   component: CreateNote,
    //   passProps: {text: 'Normal Note'}
    // });
    this.props.navigator.push({
      title: 'Results',
      component: CategoryItem
    });
  }

  render() {
    return (
      <View style={styles.appMainView}>
        {this.props.categories && <Text>{this.props.categories}</Text>}
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
