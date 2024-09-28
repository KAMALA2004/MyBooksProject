import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import all your screen components
import LogoScreen from './src/screens/LogoScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import BuyBooksScreen from './src/screens/BuyBooksScreen';
import SellBooksScreen from './src/screens/SellBooksScreen';
import LendBooksScreen from './src/screens/LendBooksScreen';
import BookDetailScreen from './src/screens/BookDetailScreen';
import BorrowBooksScreen from './src/screens/BorrowBooksScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Logo" component={LogoScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LendBooks" component={LendBooksScreen} />
        <Stack.Screen name="BuyBooks" component={BuyBooksScreen} />
        <Stack.Screen name="BookDetail" component={BookDetailScreen} />
        <Stack.Screen name="SellBooks" component={SellBooksScreen} />
        <Stack.Screen name="BorrowBooks" component={BorrowBooksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
