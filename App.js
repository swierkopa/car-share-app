import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Text } from 'react-native'
import HomePage from "./screens/HomePage";
import DetailsPage from "./screens/DetailsPage"; 

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent"
  }
};

const App = () => {
  let [loaded] = useFonts({
    ManropeExtraBold: require('./assets/fonts/Manrope-ExtraBold.ttf'),
    ManropeBold: require('./assets/fonts/Manrope-Bold.ttf'),
    ManropeSemiBold: require('./assets/fonts/Manrope-SemiBold.ttf'),
    ManropeMedium: require('./assets/fonts/Manrope-Medium.ttf'),
    ManropeRegular: require('./assets/fonts/Manrope-Regular.ttf'),
    ManropeLight: require('./assets/fonts/Manrope-Light.ttf'),
    Pacifico: require('./assets/fonts/Pacifico-Regular.ttf'),
  })

  if (!loaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer 
      theme={theme}
    >
      <Stack.Navigator 
        screenOptions={{ headerShown: false }}
        initialRouteName="HomePage"
      >
        <Stack.Screen 
          name="HomePage" 
          component={HomePage}
        />
        <Stack.Screen 
          name="DetailsPage" 
          component={DetailsPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;