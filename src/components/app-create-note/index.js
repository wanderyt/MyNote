import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
import {Button, Subheader} from 'react-native-elements';
import CreateNoteForm from '../app-create-note-form';

class CreateNote extends React.Component {
  _goBack = () => {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.createNote}>
        {/* <Subheader text="Subheader text" /> */}
        <CreateNoteForm />
        <Button
          raised
          buttonStyle={styles.goBackBtn}
          onPress={this._goBack}
          title="Go Back" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  createNote: {
    flex: 1,
    // height: '100%',
    // marginTop: 64,
  },
  goBackBtn: {
    width: 100,
    bottom: 10,
  },
});

export default CreateNote;
