import React from 'react';
import { StyleSheet, ImageBackground, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={{height: 600, width: 600}}
          imageStyle={{resizeMode: 'cover'}}
          source={require('./r/i/home.png')}
        >
          <Text>L'app de korvus</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
