import React from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function LogIn({ navigation }) {
  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <Text>Details Screen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </SafeAreaView>
    </SafeAreaProvider>
  );
}