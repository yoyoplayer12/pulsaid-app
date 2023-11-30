import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Notifications from 'expo-notifications';
import React, { useEffect } from 'react';


const Stack = createStackNavigator();


function HomeScreen() {
  const scheduleNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Test Notification 📬",
        body: 'This is a test notification!',
      },
      trigger: { seconds: 2 },
    });
  };
  return (
    <View style={styles.container}>
      <Text></Text>
      <StatusBar style="auto" />
      <Button title="Schedule Notification" onPress={scheduleNotification} />
    </View>
  );
}


export default function App() {
  useEffect(() => {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });
    Notifications.requestPermissionsAsync()
    .then(status => console.log(status))
    .catch(err => console.log(err));
  }, []); 
  const scheduleNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Test Notification 📬",
        body: 'This is a test notification!',
      },
      trigger: { seconds: 2 },
    });
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Pulsaid' }}
        />
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
