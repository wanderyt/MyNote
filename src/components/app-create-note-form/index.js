import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Button} from 'react-native-elements';

class CreateNoteForm extends React.Component {
  state = {
    number: '0'
  }
  _changeNumber = (text) => {
    this.setState({
      number: text
    });
  }
  render() {
    return (
      <View style={styles.createNoteForm}>
        <TextInput
          style={styles.numberInput}
          onChangeText={this._changeNumber}
          keyboardType="numeric"
          placeholder="0" />
        <Button
          buttonStyle={styles.saveButton}
          raised title="Save!" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  createNoteForm: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberInput: {
    width: 100,
    height: 30,
    lineHeight: 30,
    fontSize: 20,
    // color: 'red'
  },
  saveButton: {
    width: 100
  }
});

export default CreateNoteForm;
