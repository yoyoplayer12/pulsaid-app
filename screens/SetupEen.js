import React from 'react';
import {Text} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function LogInScreen({ route, navigation }) {
  const { language } = route.params;
  // Now you can use the `language` variable in your 'LogIn' screen.
  // ...

  return (
    <SafeAreaProvider>
    <SafeAreaView>
        <Text>{language}</Text>
    </SafeAreaView>
</SafeAreaProvider>
  );
}