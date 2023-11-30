import React from 'react';
import { Button, Image, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function PickLanguage({ navigation }) {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
            <Image
            style={styles.logo}
            source={{ uri: 'https://via.placeholder.com/170' }}
            />
            <Button title="Nederlands" onPress={() => styles.buttonselected}></Button>
            <Button title="English" onPress={() => styles.buttonselected}></Button>
            <Button title=">" onPress={() => navigation.navigate('LogIn')}/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
    logo: {
        width: 170,
        height: 170,
        borderRadius: 8,
    },
    container: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonselected: {
        backgroundColor: 'red',
    },
});