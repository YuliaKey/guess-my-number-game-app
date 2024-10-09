import Colors from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

type GuessLogItemProps = {
  round: number;
  guess: number;
};

const GuessLogItem = ({ round, guess }: GuessLogItemProps) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{round}</Text>
      <Text style={styles.itemText}>Opponent's guess: {guess}</Text>
    </View>
  );
};
export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4, //for android
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
});
