import { useState } from 'react';
import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function PickLanguage({ navigation }) {
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };

    const sendLanguage = () => {
        navigation.navigate('SetupEen', { language: selectedLanguage });
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <Image
                    style={styles.logo}
                    source={{ uri: 'https://via.placeholder.com/170' }}
                />
                <View style={styles.languageview}>
                    <TouchableOpacity
                        style={selectedLanguage === 'Nederlands' ? styles.buttonSelected : styles.button}
                        onPress={() => handleLanguageSelect('Nederlands')}
                    >
                        <Text style={styles.buttonText}>Nederlands</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={selectedLanguage === 'English' ? styles.buttonSelected : styles.button}
                        onPress={() => handleLanguageSelect('English')}
                    >
                        <Text style={styles.buttonText}>English</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={[styles.bottomRight]}
                    onPress={sendLanguage}
                    disabled={!selectedLanguage}
                >
                    <Text style={styles.buttonText}>&gt;</Text>
                </TouchableOpacity>
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
    buttonSelected: {
        backgroundColor: 'red',
    },
    button: {
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 110,
        paddingRight: 110,
        marginBottom: 32,
    },
    buttonText: {
        color: 'black',
        textAlign: 'center',
    },
    languageview: {
        marginTop: 20,
    },
    bottomRight: {
        position: 'absolute',
        right: 32,
        bottom: 32,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 44,
        paddingRight: 44,
      },
});