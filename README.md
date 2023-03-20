# react-native-duck-template

A starter kit for initializing a new React-Native project with some commonly used preconfigured libraries and the folder structure

## 🚀 Getting Started

## Key features:

- Pre-configured folder structure
- Basic Authentication screens(Login, Main) and flow
- Reusable common components, utility functions and constants
- Navigation using [react-navigation](https://reactnavigation.org/) (v6)
- State management using [redux](https://redux.js.org/)
- Redux middleware [redux-saga](https://redux-saga.js.org/)
- API requests using [axios](https://axios-http.com/)
- Text font `Open sans`
- UI KIT support

## Quick Start

To create a new project using the barebone boilerplate:

```sh
npx react-native init AppName --template @vitvuive/react-native-duck-template.git
```

## Rename the project: (Thanks to [react-native-name](https://github.com/junedomingo/react-native-rename))

```sh
npx react-native-rename <your-project-name>
```

> With custom Bundle Identifier (Android only. For iOS, please use Xcode)

```sj
npx react-native-rename <your-project-name> -b <bundleIdentifier>
```

### Install Pods (iOS Only)

- `npm i`
- `cd ios && pod install`
- `cd .. && react-native run-ios/android`

### Android local.properties (Android Only)

- `npm i`
- `cd android && mkdir local.properties`
- `nano local.properties`

## Roadmap

- Add docs to explain provided common components usages
- bootsplash screen
- Add Husky, Lint
