import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';

const SellBooksScreen = ({ navigation }) => {
  console.log('SellBooksScreen rendered');

  const [pickupAddress, setPickupAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [bookName, setBookName] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.uri);
    }
  };

  const pickVideo = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: "video/*",
    });

    if (result.type !== 'cancel') {
      setSelectedVideo(result.uri);
    }
  };

  const submitForm = () => {
    Alert.alert('Submitted', 'Your book has been listed for sale!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>WingReads7</Text>
        <Text style={styles.catchphrase}>Sell your books to us now!</Text>
      </View>

      <Text style={styles.label}>Pick Up Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter pick up address"
        value={pickupAddress}
        onChangeText={setPickupAddress}
      />

      <Text style={styles.label}>Landmark</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter landmark"
        value={landmark}
        onChangeText={setLandmark}
      />

      <Text style={styles.label}>Book Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter book name"
        value={bookName}
        onChangeText={setBookName}
      />

      <Text style={styles.uploadLabel}>Upload Photos</Text>
      <View style={styles.uploadContainer}>
        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          <Text style={styles.uploadButtonText}>Choose File</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.inputWithButton}
          placeholder="No file chosen"
          editable={false}
        />
        {selectedImage && <Text style={styles.fileText}>Image Selected</Text>}
      </View>

      <Text style={styles.uploadLabel}>Upload Video</Text>
      <View style={styles.uploadContainer}>
        <TouchableOpacity style={styles.uploadButton} onPress={pickVideo}>
          <Text style={styles.uploadButtonText}>Choose File</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.inputWithButton}
          placeholder="No file chosen"
          editable={false}
        />
        {selectedVideo && <Text style={styles.fileText}>Video Selected</Text>}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={submitForm}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#693F21',
    paddingVertical: 20,
    height:120,
    top:-20,
    width: '111%', // Full width
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: -20, 
    marginRight:40,
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#663e22',
    backgroundColor:"white",
  },
  catchphrase: {
    fontSize: 16,
    top:10,
    color: '#FFFFFF',
    marginTop: 5,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#663e22',
    marginTop: 20,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#9F7651',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
  uploadLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 20,
    color: '#663e22',
  },
  uploadContainer: {
    position: 'relative',
    marginBottom: -7,
  },
  inputWithButton: {
    height: 40,
    borderColor: '#9F7651',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingLeft: 90,
    backgroundColor: '#FFFFFF',
    position: 'relative',
  },
  uploadButton: {
    position: 'absolute',
    top: 5,
    left: 5,
    height: 30,
    width: 80,
    backgroundColor: '#9F7651',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  uploadButtonText: {
    color: '#FFFFFF',
  },
  fileText: {
    marginTop: 10,
    fontSize: 14,
    color: '#663e22',
  },
  submitButton: {
    backgroundColor: '#9F7651',
    paddingVertical: 12,
    paddingHorizontal: 40, // Smaller width
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 40, // More space above the button
    alignSelf: 'center', // Center the button horizontally
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SellBooksScreen;
