# Expo_app

## About

This is a collection of javascript apps that use the expo sdk to create and deploy apps. This will be done on the iPhone 14 Pro Max running the latest version of iOS 16.2.

## Notes to build your first expo app

To create a new app open a new terminal and enter the follow:

```terminal
npx create-expo-app my-first-app
```

then cd into the directory

```terminal
cd my-first-app
```

In order to run the app on the web, dependencies must be installed by running the following commands:

```terminal
npx expo install react-dom react-native-web @expo/webpack-config
```

start the app by entering:

```terminal
npx expo start 
```

Now enjoy using the app and customising it to fit your needs.

## my-app

The purpose of this app was to build the program and demonstrate that it runs while changing the text displayed in the middle of the screen. The output is show below:

<p
align="center">
<img
src="https://github.com/AndrewFelton23/Expo_app/blob/d1676b638ce58735c8ceaf7cf1bfd65522006155/Resources/myapp.png" height="699" width="322.5">
</p>

## PhotoDisplay

The purpose of this app was to build a program that shows an image and two buttons with different styles. The output is show below:

<p
align="center">
<img
src="https://github.com/AndrewFelton23/Expo_app/blob/34fa38947c918595d1afc1f7465dbff67c59c459/Resources/PhotoDisplay.png" height="699" width="322.5">
</p>

## ReactNative_Navigation

### stack-app

The purpose of this app was to build a program that navigates between screens using the react native stack:

<p
align="center">
<img
src="https://github.com/AndrewFelton23/Expo_app/blob/76233387e99fc7e9c97b30aedf673d083ee52b15/Resources/stack-app1.png" height="699" width="322.5">
<img
src="https://github.com/AndrewFelton23/Expo_app/blob/76233387e99fc7e9c97b30aedf673d083ee52b15/Resources/stack-app2.png" height="699" width="322.5">
</p>

To create this create a new file and open it in vscode, Install Expo CLI by typing the following in the terminal:

```terminal
npm install -g expo-cli
```

Create React Native Project

```terminal
expo init <app-name>
```

then cd into the folder that you created

```terminal
cd <app-name>
```

install react navigation

```terminal
npm install @react-navigation/native
```

Install Stack Navigation

```terminal
npm install @react-navigation/native-stack
```

start program

```terminal
npx expo start
```

### drawer

The purpose of this app was to build a program that navigates between screens using the react native drawer:

```terminal
npm install -g expo-cli
```

Create React Native Project

```terminal
expo init <app-name>
```

then cd into the folder that you created

```terminal
cd <app-name>
```

install react navigation

```terminal
npm install @react-navigation/native
```

Install Stack Navigation

```terminal
npm install @react-navigation/drawer
```

start program

```terminal
npx expo start
```