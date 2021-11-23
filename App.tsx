import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './screens/HomeScreen'
import { ImageScreen } from './screens/ImageScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          options={{
            headerLeft: () => <Image source={{ uri:"https://thomasvitali.com/wp-content/uploads/2019/10/Pexels-Logo.jpg" }} style={styles.logo} />,
            headerRight: () => (
              <Text
                style={{ color: "white", fontSize: 18 }}
                onPress={() => setOpenSearch(!openSearch)}
              >
                {openSearch ? "Close" : "Search"}
              </Text>
            ),
            title: 'Pexels App',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#0D0D0D',
            }
          }}
        >
          {( props ) => <HomeScreen {...props} openSearch={openSearch} />}
        </Stack.Screen>
        <Stack.Screen
          name="ImageScreen"
          component={ImageScreen}
          options={{
            headerStyle: {
              backgroundColor: "#0D0D0D",
            },
            title: "Pexels App",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 30,
    marginEnd: 5,
    borderRadius: 5,
  }
})
