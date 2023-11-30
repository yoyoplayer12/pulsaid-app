import React from 'react';
import {Text} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function EnglishSetupEen() {
  return (
    <SafeAreaProvider>
        <SafeAreaView>
            <Text>Hey i'm an American(o)</Text>
        </SafeAreaView>
    </SafeAreaProvider>
  );
}