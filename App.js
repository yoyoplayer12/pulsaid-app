import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import screens
import HomeScreen from './screens/to fix/HomeScreen';
import LogIn from './screens/to fix/LogIn';
import PickLanguage from './screens/PickLanguage';
import NederlandsSetupEen from './screens/Nederlands/NederlandsSetupEen';
import EnglishSetupEen from './screens/English/EnglishSetupEen';

const Stack = createStackNavigator();
// function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <Text>hejjj</Text>
//       <StatusBar style="auto" />
      
//     </View>
//   );
// }

export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false, animationEnabled: false, }}>
        <Stack.Screen name="PickLanguage" component={PickLanguage} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="NederlandsSetupEen" component={NederlandsSetupEen}/>
        <Stack.Screen name="EnglishSetupEen" component={EnglishSetupEen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
