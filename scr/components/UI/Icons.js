import { MaterialIcons } from "@expo/vector-icons";

const Icons = {};
// https://icons.expo.fyi/

const Add = () => <MaterialIcons name="add" size={16} />;
const Delete = () => <MaterialIcons name="delete" size={16} />;
const Edit = () => <MaterialIcons name="edit" size={16} />;
const Cancel = () => <MaterialIcons name="cancel" size={16} />;

// Compse
Icons.Add = Add;
Icons.Delete = Delete;
Icons.Edit = Edit;
Icons.Cancel = Cancel;

export default Icons;
