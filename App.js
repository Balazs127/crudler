import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ModuleListScreen from "./scr/components/screens/ModuleListScreen";
import ModuleAddScreen from "./scr/components/screens/ModuleAddScreen";
import ModuleModifyScreen from "./scr/components/screens/ModuleModifyScreen";
import ModuleViewScreen from "./scr/components/screens/ModuleViewScreen";

const Stack = createStackNavigator();

export const App = () => {
  // Initialisations-------------------------
  // State-----------------------------------
  // Handlers--------------------------------
  // View -----------------------------------

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ModuleListScreen"
        screenOptions={{
          headerStyle: { backgroundColor: `black` },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="ModuleListScreen"
          component={ModuleListScreen}
          options={{ title: "List module" }}
        />

        <Stack.Screen
          name="ModuleAddScreen"
          component={ModuleAddScreen}
          options={{ title: "Add module" }}
        />

        <Stack.Screen
          name="ModuleViewScreen"
          component={ModuleViewScreen}
          options={{ title: "View module" }}
        />

        <Stack.Screen
          name="ModuleModifyScreen"
          component={ModuleModifyScreen}
          options={{ title: "Modify module" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
