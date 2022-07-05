import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
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