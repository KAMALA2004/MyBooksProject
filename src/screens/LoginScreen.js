// src/screens/LoginScreen.js
import React, { useState } from 'react';
import { View,Image, Text, Platform, KeyboardAvoidingView, ImageBackground, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email && password) {
      try {
        // Replace with actual authentication logic
        // Example: await auth.signInWithEmailAndPassword(email, password);
        navigation.navigate('Home'); // Navigate to HomeScreen on success
      } catch (error) {
        Alert.alert('Login failed', 'Please check your credentials and try again.');
      }
    } else {
      Alert.alert('Input Error', 'Please enter both email and password.');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/background-image.png')}
      style={styles.backgroundImage}
      blurRadius={2}
    >
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <View style={styles.overlay}>
          {/* Header */}
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>WingReads7</Text>
          </View>

          {/* Form Container */}
          <View style={styles.formContainer}>
            <Text style={styles.loginTitle}>Login</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.separator}>
              <View style={styles.line} />
              <Text style={styles.separatorText}>or</Text>
              <View style={styles.line} />
            </View>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('../../assets/facebook-icon.png')} style={styles.socialIcon} />
              <Text style={styles.socialText1}>Login with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton1}>
              <Image source={require('../../assets/google-icon.png')} style={styles.socialIcon} />
              <Text style={styles.socialText}>Login with Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 5,
  },
  headerContainer: {
    position: 'absolute',
    top: 40,
    alignItems: 'center',
    zIndex: 2,
    backgroundColor: 'white',
    paddingVertical: 5,
    borderRadius: 7,
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#693F21', // Updated color
    textAlign: 'center',
  },
  formContainer: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#FFFFFF', // Updated color
    borderRadius: 20,
    padding: 20,
    elevation: 3,
    minHeight: 450,
    justifyContent: 'center',
    marginBottom: 2,
    marginTop: 120,
    zIndex: 1,
  },
  loginTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#693F21',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 2,
    marginBottom: 15,
    paddingHorizontal: 20,
    borderRadius: 7,
    color: 'black',
    backgroundColor: 'white',
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#FFA500',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
    width: '50%',
    alignSelf: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  separatorText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#666',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'blue',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    width: '100%',
  },
  socialButton1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    width: '100%',
  },
  socialIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  socialText: {
    fontSize: 16,
    color:'white',
  },
  socialText1: {
    fontSize: 16,
    color:'white',
  },
});


export default LoginScreen;
