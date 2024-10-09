import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

import Colors from "@/constants/colors";

type InstructionTextProps = {
  text: string;
  style?: StyleProp<TextStyle>;
};

export default function InstructionText({ text, style }: InstructionTextProps) {
  return <Text style={[styles.instructionText, style]}>{text}</Text>;
}
const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
