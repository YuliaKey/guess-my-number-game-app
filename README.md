# 🎮 Guess My Number Game

Welcome to **Guess My Number**, a fun mini-game built with [Expo](https://expo.dev), React Native and TypeScript! In this game, you pick a number, and the computer will try to guess it by following your instructions — whether the guess is too high or too low. Once the computer guesses correctly, the game is over!

## 🚀 Getting Started

Follow these instructions to get the game running on your local machine for development or testing purposes.

### 1. Install Dependencies

Make sure you have all the necessary dependencies installed by running the following command:

```bash
npm install
```

### 2. Start the App

To start the app, simply run:

```bash
npx expo start
```

This will launch Expo's developer tools, where you can choose to run the app on an Android Emulator, iOS Simulator, or using the Expo Go app on your phone.

## 📱 How to Play

**Start the Game:** Enter a number for the computer to guess.

**Computer Guesses:** The computer will make a guess, and you will need to guide it by pressing the Higher or Lower buttons, depending on whether the guess is too low or too high.

**Game Over:** Once the computer guesses your number correctly, the game ends, and the Game Over screen is displayed.

## 🎯 Key Features

**Fun Game Logic:** Let the computer guess your number by guiding it with the Higher or Lower buttons.
**Simple User Interface:** Intuitive and responsive design with React Native components.
**Game Screens:** The app includes three screens — the Start Game Screen, the Game Screen, and the Game Over Screen.

## Project Structure

This project uses file-based routing for organizing screens. Below is an overview of the key files and folders:

**screens/:** Contains the main screens of the game, including StartGameScreen.tsx, GameScreen.tsx, and GameOverScreen.tsx.
**components/:** UI components such as NumberContainer, Title, PrimaryButton, and custom cards used across the app.
**constants/:** Contains app constants like colors.

## 🛠️ Development

To modify the project or start developing new features, simply edit the files in the **app** directory. The project will automatically reload as you save changes.
