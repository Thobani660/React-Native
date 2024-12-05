import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Modal,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const handleSubmit = () => {
    setModalVisible(true); // Show modal
  };

  const handleCancel = () => {
    setModalVisible(false); // Hide modal
  };

  return (
    <ImageBackground
      source={require('./assets/64e5de11811d72e03bc71dbd_react-native.png')}
      style={styles.background}
      resizeMode="cover" // Adjust image scaling
    >
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.header}>Mr T Welcome to React Native!</Text>
          <TextInput
            style={styles.input}
            placeholder="Type something"
            onChangeText={setText}
            value={text}
          />
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>

        {/* Modal */}
        <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={handleCancel}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>You entered: {text}</Text>
              <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%', // Ensure full width
    height: '100%', // Ensure full height
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay to make details more visible
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '90%', // Center content
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Light background for better readability
    borderRadius: 10,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '100%',
    paddingLeft: 10,
    backgroundColor: 'lightgray',
    borderRadius: 20,
  },
  button: {
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  cancelButton: {
    height: 40,
    backgroundColor: 'red',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
