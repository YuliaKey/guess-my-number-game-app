import Colors from "@/constants/colors";
import { StyleSheet, Text, View, Dimensions } from "react-native";

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

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    margin: deviceWidth < 450 ? 12 : 24,
    padding: deviceWidth < 450 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontFamily: "open-sans-bold",
    fontSize: deviceWidth < 450 ? 26 : 36,
    color: Colors.accent500,
  },
});
