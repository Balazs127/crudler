import { StyleSheet, Text } from "react-native";
import Screen from "../layout/Screen";
import Icons from "../UI/Icons.js";
import { Button, ButtonTray } from "../UI/Button.js";

const defaultModule = {
  ModuleID: Math.floor(100000 + Math.random() * 900000),
  ModuleCode: "CI6330",
  ModuleName: "Mobile Application Development",
  ModuleLevel: 6,
  ModuleLeaderID: 1,
  ModuleLeaderName: "Graeme JONES",
  ModuleImage:
    "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg",
};

export const ModuleAddScreen = ({ navigation, route }) => {
  // Initialisations-------------------------
  const { onAdd } = route.params;

  // State ----------------------------------
  // Handlers--------------------------------
  const handleAdd = () => onAdd(defaultModule);
  const handleCancel = () => navigation.goBack();

  // View -----------------------------------
  return (
    <Screen>
      <Text>Add</Text>
      <ButtonTray>
        <Button icon={<Icons.Add />} label="Add" onClick={handleAdd} />
        <Button icon={<Icons.Cancel />} label="Cancel" onClick={handleCancel} />
      </ButtonTray>
    </Screen>
  );
};

const styles = StyleSheet.create({});

export default ModuleAddScreen;
