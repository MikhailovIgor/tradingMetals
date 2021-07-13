module.exports = {
  presets: ["module:metro-react-native-babel-preset", "@babel/preset-typescript"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [
          ".ios.js",
          "android.js",
          ".js",
          ".json",
          ".ios.ts",
          "android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
        ],
        alias: {
          "@navigation": "./src/navigation",
          "@screens": "./src/screens",
          "@assets": "./src/assets",
          "@images": "./src/assets/images",
          "@components": "./src/components",
          "@homeScreenComponents": "./src/components/HomeScreenComponents",
          "@signUpSteps": "./src/components/signUpSteps",
        },
      },
    ],
  ],
}
