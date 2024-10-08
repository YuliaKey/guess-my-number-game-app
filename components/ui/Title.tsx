import Colors from "@/constants/colors";
import { StyleSheet, Text, View } from "react-native";

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <View>
      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
