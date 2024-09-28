import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { auth } from '../firebase'; // Correct path

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState(''); // Added state for name
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignUp = () => {
    console.log("Sign Up clicked");
    console.log("Name:", name); // Log the name
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      console.error("Passwords do not match");
      return;
    }
    if (password.length < 6) {
      setError("Password should be at least 6 characters");
      console.error("Password too short");
      return;
    }

    auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        setSuccess("Account created successfully");
        setError('');
        console.log("Account created successfully");
        navigation.navigate('Home'); // Navigate to the Home page after successful sign-up
      })
      .catch((error) => {
        setSuccess('');
        setError(error.message);
        console.error("Error creating account:", error.message);
      });
  };

  return (
    <ImageBackground
      source={require('../../assets/background-image.png')} // Your normal image
      style={styles.backgroundImage}
      blurRadius={2} // Adjust the blur effect as needed
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
            <Text style={styles.signUpTitle}>Sign Up</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
            {success ? <Text style={styles.successText}>{success}</Text> : null}
            <TouchableOpacity
              style={styles.loginButton} // Add a style for the login button
              onPress={() => navigation.navigate('Login')} // Navigate to the Login screen
            >
              <Text style={styles.loginButtonText}>
                Already have an account? <Text style={styles.loginLink}>Login</Text>
              </Text>
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
    justifyContent: 'flex-start', // Adjust to push content down
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 5, // Increase this value to push the content down
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
    color: '#693F21',
    textAlign: 'center',
  },
  formContainer: {
    width: '90%',
    maxWidth: 400,
    backgroundColor: '#693F21',
    borderRadius: 20,
    padding: 20,
    elevation: 3,
    minHeight: 600,
    justifyContent: 'space-between',
    marginBottom: 2,
    marginTop: 120, // Increase this margin to provide enough space below the header
    zIndex: 1,
  },
  signUpTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
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
  signUpButton: {
    backgroundColor: '#FFA500',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 20,
    width: '50%',
    alignSelf: 'center',
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginButton: {
    marginTop: 20,
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#007bff',
  },
  loginLink: {
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
    backgroundColor: 'white',
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
    backgroundColor: 'white',
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
  socialText1: {
    fontSize: 16,
  },
  socialText: {
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
  successText: {
    color: 'green',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default SignUpScreen;
