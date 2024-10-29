import { Pressable, StyleSheet, Text, Vibration, View } from "react-native";

export const Button = ({ label, icon, onClick, styleLabel, styleButton }) => {
  // Initialisations ------------------------
  // State ----------------------------------
  // Handlers -------------------------------
  const onPress = () => {
    Vibration.vibrate(5);
    onClick();
  };
  // View -----------------------------------
  return (
    <Pressable
      onPress={onPress}
      //style={[styles.button, styleButton]}
      style={({ pressed }) => [
        styles.button,
        styleButton,
        pressed && styles.pressedButton,
      ]}
    >
      {icon ? icon : null}
      <Text style={[styles.label, styleLabel]}>{label}</Text>
    </Pressable>
  );
};

export const ButtonTray = ({ children }) => {
  // Initialisations ------------------------
  // State ----------------------------------
  // Handlers -------------------------------
  // View -----------------------------------
  return <View style={styles.buttonTray}>{children}</View>;
};

const styles = StyleSheet.create({
  buttonTray: {
    flexDirection: "row",
    gap: 15,
  },
  button: {
    minHeight: 50,
    borderWidth: 1,
    borderRadius: 7,
    borderColor: "grey",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
    flex: 1,
    flexDirection: "row",
    gap: 5,
  },
  label: {
    fontSize: 16,
  },
  pressedButton: {
    backgroundColor: "lightblue",
  },
});
