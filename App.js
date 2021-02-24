// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Camera from './screens/Camera';
import ProfileDetails from './screens/ProfileDetails';
import ProfileForms from './screens/ProfileForms';


const Stack = createStackNavigator();

function NavStack() {
  return (
     <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#621FF7',
          },
          headerTintColor: '#fff',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{ title: 'Home' }}
      />

      <Stack.Screen 
       name="Camera" 
       component={Camera} 
      />
      
      <Stack.Screen 
       name="ProfileDetails" 
       component={ProfileDetails} 
       options={{ title: 'Profile Details' }}
      />

      <Stack.Screen 
       name="ProfileForms" 
       component={ProfileForms} 
       options={{ title: 'Profile Forms' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}