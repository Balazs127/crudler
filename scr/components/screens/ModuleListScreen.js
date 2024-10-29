import { useState, useEffect } from "react";
import { LogBox, StyleSheet, Text } from "react-native";
import Screen from "../layout/Screen";
import API from "../API/API.js";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";
import ModuleList from "../entity/modules/ModuleList";

export const ModuleListScreen = ({ navigation }) => {
  // Initialisations-------------------------
  LogBox.ignoreLogs(["Non-serializable values were found in the navigation state"]);
  const modulesEndpoint = "https://softwarehub.uk/unibase/api/modules";

  // State-----------------------------------
  const [modules, setModules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadModules = async (endpoint) => {
    const response = await API.get(endpoint);
    setIsLoading(false);
    if (response.isSuccess) setModules(response.result);
  };

  useEffect(() => {
    loadModules(modulesEndpoint);
  }, []);

  // Handlers--------------------------------
  const handleDelete = (module) => {
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));
  };

  const handleAdd = (module) => setModules([...modules, module]);

  const handleModify = (updatedModule) => {
    setModules(
      modules.map((module) => (module.ModuleID === updatedModule.ModuleID ? updatedModule : module))
    );
  };

  const onDelete = (module) => {
    handleDelete(module);
    navigation.goBack();
  };

  const onAdd = (module) => {
    handleAdd(module);
    navigation.goBack();
  };

  const onModify = (module) => {
    handleModify(module);
    navigation.navigate("ModuleListScreen");
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

      {isLoading && <Text>Loading Records...</Text>}

      <ModuleList modules={modules} onSelect={goToViewScreen} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
