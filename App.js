// import { Text, View } from 'react-native';
import OnBoard from './src/onboard/OnBoard';
// import Home from './src/home/Home';
import Footer from './src/components/footer/Footer';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

const Home = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home Screen</Text>
  </View>
);

const About = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>About Screen</Text>
  </View>
);

const Profile = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);

const Cart = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Cart Screen</Text>
  </View>
);

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
          style: {
            backgroundColor: 'white',
            borderTopWidth: 1,
            borderTopColor: 'lightgray',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={About}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="information-circle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="cart" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};



export default App;
