import { Pressable, StyleSheet, Text, View } from "react-native";
import Selector from "../../UI/Selector";

const ModuleItem = ({ module, onSelect }) => {
  // Initialisations ------------------
  // State ----------------------------
  // Handlers -------------------------
  // View -----------------------------
  return (
    <Selector pressedStyle={styles.pressedItem} onPress={() => onSelect(module)}>
      <View style={styles.item}>
        <Text style={styles.text}>
          {module.ModuleCode} {module.ModuleName}
        </Text>
      </View>
    </Selector>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderColor: "lightgrey",
  },
  text: {
    fontSize: 16,
  },
  pressedItem: {
    backgroundColor: "azure",
  },
});

export default ModuleItem;
