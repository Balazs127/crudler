import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ModuleListScreen from './scr/components/screens/ModuleListScreen';

const Stack = createStackNavigator();

export const App = () => {
  // Initialisations-------------------------
  // State-----------------------------------
  // Handlers--------------------------------
  // View -----------------------------------
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ModuleList">

        <Stack.Screen 
          name="ModuleList" 
          component={ModuleListScreen} 
          options={{ title: 'List Modules' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;