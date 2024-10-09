import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "@/components/Game/NumberContainer";
import Title from "@/components/ui/Title";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Card from "@/components/ui/Card";
import InstructionText from "@/components/ui/InstructionText";

type GameScreenProps = {
  userNumber: number;
  onGameOver: () => void;
};

function generateRandomBetween(min: number, max: number, exclude: number) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

enum Direction {
  LOWER = "Lower",
  HIGHER = "Higher",
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen({
  userNumber,
  onGameOver,
}: GameScreenProps) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  const nextGuessHandler = (direction: Direction) => {
    if (
      (direction === Direction.LOWER && currentGuess < userNumber) ||
      (direction === Direction.HIGHER && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === Direction.LOWER) {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    console.log(maxBoundary, minBoundary);
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  };

  return (
    <View style={styles.screen}>
      <Title text="Opponent's guess" />
      <NumberContainer number={currentGuess} />
      <Card>
        <InstructionText
          text="Higher or lower?"
          style={styles.instructionText}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              name={<Ionicons name="remove" size={24} color="white" />}
              onPress={() => {
                nextGuessHandler(Direction.LOWER);
              }}
            />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              name={<Ionicons name="add" size={24} color="white" />}
              onPress={() => {
                nextGuessHandler(Direction.HIGHER);
              }}
            />
          </View>
        </View>
      </Card>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
