import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";

import NumberContainer from "@/components/Game/NumberContainer";
import Title from "@/components/ui/Title";
import PrimaryButton from "@/components/ui/PrimaryButton";

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
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton
            name="-"
            onPress={() => {
              nextGuessHandler(Direction.LOWER);
            }}
          />
          <PrimaryButton
            name="+"
            onPress={() => {
              nextGuessHandler(Direction.HIGHER);
            }}
          />
        </View>
      </View>
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
});
