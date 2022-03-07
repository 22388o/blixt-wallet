module.exports = {
  project: {
    ios: {},
    android: {},
    macos: {},
  },
  dependencies: {
    '@react-native-community/google-signin': {
      platforms: {
        ios: null,
      },
    },
    'react-native-tor': {
      platforms: {
        android: null,
      },
    },
  },
  assets: ["./assets/fonts/"],
}
