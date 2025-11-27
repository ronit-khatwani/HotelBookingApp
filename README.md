# Hotel Booking App

This is a React Native CLI project for a Hotel Booking App.

## Prerequisites

- Node.js
- React Native CLI
- Android Studio / Xcode

## Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

2. Install iOS pods (Mac only):
   ```bash
   cd ios && pod install && cd ..
   ```

## Running the App

- Android:
  ```bash
  npx react-native run-android
  ```

- iOS:
  ```bash
  npx react-native run-ios
  ```

## Project Structure

- `src/assets`: Images and fonts.
- `src/components`: Reusable components (CustomButton, CustomInput, CustomText, HotelCard).
- `src/data`: Dummy data.
- `src/navigation`: Navigation configuration (Stack and Bottom Tabs).
- `src/screens`: Application screens.
- `src/theme`: Global theme (Colors, Fonts, Sizing).
- `src/utils`: Utility functions.

## Features

- **Dynamic Sizing**: Uses `src/theme/index.js` for responsive layout.
- **Global Colors**: Defined in `src/theme/index.js`.
- **Custom Components**: Fully dynamic components used throughout the app.
- **Navigation**: Stack and Bottom Tab navigation.
