import { useState } from "react";
import { StyleSheet } from "react-native";
import Screen from "../layout/Screen";
import ModuleList from "../entity/modules/ModuleList";

import initialModules from "../../data/modules.js";
import RenderCount from "../UI/RenderCount.js";

export const ModuleListScreen = ({ navigation }) => {
  // Initialisations-------------------------
  // let modules = initialModules;

  // State-----------------------------------
  const handleSelect = (module) =>
    navigation.navigate("ModuleViewScreen", { module });
  const [modules, setModules] = useState(initialModules);

  // Handlers--------------------------------
  const handleDelete = (module) =>
    setModules(modules.filter((item) => item.ModuleID !== module.ModuleID));

  // View -----------------------------------
  return (
    <Screen>
      <RenderCount />
      <ModuleList modules={modules} onSelect={handleSelect} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ModuleListScreen;
