import { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";

import PrimaryButton from "@/components/ui/PrimaryButton";
import Colors from "@/constants/colors";
import Title from "@/components/ui/Title";
import Card from "@/components/ui/Card";
import InstructionText from "@/components/ui/InstructionText";

type StartGameScreenType = {
  onPickNumber: (chosenNumber: number) => void;
};

export default function StartGameScreen({ onPickNumber }: StartGameScreenType) {
  const [enteredNumber, setEnteredNumber] = useState<string>("");

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const resetInputHandle = () => {
    setEnteredNumber("");
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandle },
      ]);
      return;
    }

    onPickNumber(chosenNumber);
  };

  return (
    <View style={styles.rootContainer}>
      <Title text="Guess my number" />
      <Card>
        <InstructionText text="Enter a number" />
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandle} name="Reset" />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler} name="Confirm" />
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    fontWeight: "bold",
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
