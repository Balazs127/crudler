import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Icons from "../../UI/Icons.js";
import { Button, ButtonTray } from "../../UI/Button.js";

const defaultModule = {
  ModuleID: null, //Math.floor(100000 + Math.random() * 900000),
  ModuleCode: null, // "CI6330",
  ModuleName: null, // "Mobile Application Development",
  ModuleLevel: null, // 6,
  ModuleLeaderID: null, // 1,
  ModuleLeaderName: null, // "Graeme JONES",
  ModuleImage: null, //"https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg",
};

const ModuleForm = (onSubmit, onCancel) => {
  // Initialisations ------------------------
  defaultModule.ModuleID = Math.floor(100000 + Math.random() * 900000);
  defaultModule.ModuleImage =
    "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg";

  // State ----------------------------------
  const [module, setModule] = useState(defaultModule);

  // Handlers--------------------------------
  const handleAdd = () => onAdd(module);
  const handleSubmit = () => onSubmit(module);

  const handleChange = (field, value) =>
    setModule({ ...module, [field]: value });

  // View -----------------------------------
  const submitLabel = "Add";
  const submitIcon = <Icons.Add />;

  return (
    <View style={styles.formContainer}>
      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module code</Text>
        <TextInput
          value={module.ModuleCode}
          onChangeText={(value) => handleChange("ModuleCode", value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module name</Text>
        <TextInput
          value={module.ModuleName}
          onChangeText={(value) => handleChange("ModuleName", value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module level</Text>
        <TextInput
          value={module.ModuleLevel}
          onChangeText={(value) => handleChange("ModuleLevel", value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module leader</Text>
        <TextInput
          value={module.ModuleLeaderName}
          onChangeText={(value) => handleChange("ModuleLeaderName", value)}
          style={styles.itemTextInput}
        />
      </View>

      <View style={styles.item}>
        <Text style={styles.itemLabel}>Module image URL</Text>
        <TextInput
          value={module.ModuleImage}
          onChangeText={(value) => handleChange("ModuleImage", value)}
          style={styles.itemTextInput}
        />
      </View>

      <ButtonTray>
        <Button label={submitLabel} icon={submitIcon} onClick={handleSubmit} />
        <Button icon={<Icons.Cancel />} label="Cancel" onClick={onCancel} />
      </ButtonTray>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 15,
  },
  itemLabel: {
    color: "grey",
    fontSize: 16,
    marginBottom: 5,
  },
  itemTextInput: {
    height: 50,
    paddingLeft: 10,
    fontSize: 16,
    backgroundColor: "white",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "lightgray",
  },
});

export default ModuleForm;
