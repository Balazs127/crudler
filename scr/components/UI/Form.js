// npx expo install @react-native-picker/picker
import { Picker } from "@react-native-picker/picker";

import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Button, ButtonTray } from "./Button.js";
import Icons from "./Icons.js";

const Form = ({ children, onSubmit, onCancel, submitLabel, submitIcon }) => {
  // Initialisations ------------------------
  // State ----------------------------------
  // Handlers--------------------------------
  // View -----------------------------------
  return (
    <KeyboardAvoidingView style={styles.formContainer}>
      <ScrollView contentContainerStyle={styles.formItems}>{children}</ScrollView>

      <ButtonTray>
        <Button label={submitLabel} icon={submitIcon} onClick={onSubmit} />
        <Button icon={<Icons.Cancel />} label="Cancel" onClick={onCancel} />
      </ButtonTray>
    </KeyboardAvoidingView>
  );
};

const InputText = ({ label, value, onChange }) => {
  // Initialisations ------------------------
  // State ----------------------------------
  // Handlers--------------------------------
  // View -----------------------------------
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      <TextInput value={value} onChangeText={onChange} style={styles.itemTextInput} />
    </View>
  );
};

const InputSelect = ({ label, prompt, options, value, onChange, isLoading = false }) => {
  // Initialisations ------------------------
  // State ----------------------------------
  // Handlers--------------------------------
  // View -----------------------------------
  return (
    <View style={styles.item}>
      <Text style={styles.itemLabel}>{label}</Text>
      {isLoading ? (
        <View style={styles.itemLoading}>
          <Text style={styles.itemLoadingText}>Loading records...</Text>
        </View>
      ) : (
        <Picker
          mode="dialog"
          selectedValue={value}
          onValueChange={onChange}
          style={styles.itemPickerStyle}
        >
          <Picker.Item value={null} label={prompt} style={styles.itemPickerPromptStyle} />
          {options.map((option, index) => (
            <Picker.Item key={index} value={option.value} label={option.label} />
          ))}
        </Picker>
      )}
    </View>
  );
};

// Compose components
Form.InputText = InputText;
Form.InputSelect = InputSelect;

// Styles

const styles = StyleSheet.create({
  formContainer: {
    gap: 10,
  },
  formItems: {
    gap: 5,
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

  itemPickerStyle: {
    backgroundColor: "whitesmoke",
    height: 50,

    // Added style to make sure it works properly on iOS
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    justifyContent: "center",
    alignSelf: "stretch",
    overflow: "hidden",
  },

  itemPickerPromptStyle: {
    color: "gray",
  },
  itemLoading: {
    height: 50,
    backgroundColor: "mistyrose",
    justifyContent: "center",
    paddingLeft: 10,
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
  },
  itemLoadingText: {
    color: "gray",
    fontSize: 16,
  },
});

export default Form;
