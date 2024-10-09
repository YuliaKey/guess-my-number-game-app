import Colors from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

type NumberContainerProps = {
  number: number;
};

const NumberContainer = ({ number }: NumberContainerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{number}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontFamily: "open-sans-bold",
    fontSize: 36,
    color: Colors.accent500,
  },
});
