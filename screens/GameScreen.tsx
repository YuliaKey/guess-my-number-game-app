import { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Alert,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "@/components/Game/NumberContainer";
import Title from "@/components/ui/Title";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Card from "@/components/ui/Card";
import InstructionText from "@/components/ui/InstructionText";
import GuessLogItem from "@/components/Game/GuessLogItem";

type GameScreenProps = {
  userNumber: number;
  onGameOver: (rounds: number) => void;
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
  const [guessRounds, setGuessRounds] = useState<number[]>([initialGuess]);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
    setGuessRounds((prevGuessRounds) => [newRandomNumber, ...prevGuessRounds]);
  };

  const guessRoundsListLength = guessRounds.length;

  let content = (
    <>
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
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton
              name={<Ionicons name="remove" size={24} color="white" />}
              onPress={() => {
                nextGuessHandler(Direction.LOWER);
              }}
            />
          </View>
          <NumberContainer number={currentGuess} />
          <View style={styles.buttonContainer}>
            <PrimaryButton
              name={<Ionicons name="add" size={24} color="white" />}
              onPress={() => {
                nextGuessHandler(Direction.HIGHER);
              }}
            />
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title text="Opponent's guess" />
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              round={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
