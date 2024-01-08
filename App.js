import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from "./components/Home"
import OnBoard from "./components/onBoarding"
import Details from "./components/Details"
import Cart from './components/Cart';
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer show>
    <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="OnBoard" component={OnBoard} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Details" component={Details} />
    <Stack.Screen name="Cart" component={Cart} />
  </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
