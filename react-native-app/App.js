import React from 'react';
import { StyleSheet, Text, View , TextInput} from 'react-native';

export default class App extends React.Component {
  state= {
    placeName: ''
  }

  placeNameChangeHandler = (event) => {
    this.setState({
      placeName: event
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Input something!</Text>
        <TextInput
          style={{
            width: 250
          }}
          placeholder="An Awsome String!!"
        value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding:50,
    justifyContent: 'flex-start',
  },
});
