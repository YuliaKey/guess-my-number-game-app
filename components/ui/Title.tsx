import { StyleSheet, Text, View, Platform } from "react-native";

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
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    borderWidth: Platform.OS === "ios" ? 2 : 1,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
  },
});
