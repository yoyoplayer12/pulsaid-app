import React from 'react';
import {Text} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function NederlandsSetupEen() {
  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <Text>Hey ik ben een hollander</Text>
        </SafeAreaView>
    </SafeAreaProvider>
  );
}