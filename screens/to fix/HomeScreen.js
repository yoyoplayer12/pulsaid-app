import React from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <Text>Home Screen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('LogIn')}/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}