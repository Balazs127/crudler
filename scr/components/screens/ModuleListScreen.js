import { Alert, ActivityIndicator, LogBox, StyleSheet, Text, View } from "react-native";
import useLoad from "../API/useLoad.js";
import API from "../API/API.js";
import Screen from "../layout/Screen";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";
import ModuleList from "../entity/modules/ModuleList";

export const ModuleListScreen = ({ navigation }) => {
  // Initialisations-------------------------
  LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);
  const modulesEndpoint = "https://softwarehub.uk/unibase/api/modules";

  // State-----------------------------------
  const [modules, setModules, isLoading, loadModules] = useLoad(modulesEndpoint);

  // Handlers--------------------------------
  const onDelete = async (module) => {
    deleteEndpount = `${modulesEndpoint}/${module.ModuleID}`;
    const result = await API.delete(modulesEndpoint, module);
    if (result.isSuccess) {
      loadModules(modulesEndpoint);
      navigation.goBack();
    } else Alert.alert(result.message);
  };

  const onAdd = async (module) => {
    const result = await API.post(modulesEndpoint, module);
    if (result.isSuccess) {
      loadModules(modulesEndpoint);
      navigation.goBack();
    } else Alert.alert(result.message);
  };

  const onModify = async (module) => {
    const putEndpoint = `${modulesEndpoint}/${module.ModuleID}`;
    const result = await API.put(putEndpoint, module);
    if (result.isSuccess) {
      loadModules(modulesEndpoint);
      navigation.navigate("ModuleViewScreen", { module, onDelete, onModify });
    } else Alert.alert(result.message);
  };

  const goToViewScreen = (module) =>
    navigation.navigate("ModuleViewScreen", { module, onDelete, onModify });

  const goToAddScreen = () => navigation.navigate("ModuleAddScreen", { onAdd });

  // View -----------------------------------
  return (
    <Screen>
      <ButtonTray>
        <Button icon={<Icons.Add />} label="Add" onClick={goToAddScreen} />
      </ButtonTray>

      {isLoading && (
        <View style={styles.loading}>
          <Text>Retrieving records from {modulesEndpoint}...</Text>
          <ActivityIndicator size="large" />
        </View>
      )}

      <ModuleList modules={modules} onSelect={goToViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  loading: {
    height: 100,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ModuleListScreen;
