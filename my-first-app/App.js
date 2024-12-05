import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

export default function App() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to React Native!</Text>
      <TextInput
        style={styles.input}
        placeholder="Type something"
        onChangeText={setText}
        value={text}
      />
      <Button title="Submit" onPress={() => alert('You entered: ' + text)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingLeft: 10,
  },
});
