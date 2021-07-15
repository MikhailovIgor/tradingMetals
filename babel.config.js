module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        'root': ['./src'],
        'extensions': [
          '.ios.js',
          'android.js',
          '.js',
          '.ios.jsx',
          '.android.jsx',
          '.jsx',
          '.json',
        ],
        'alias': {
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@images': './src/assets/images',
          '@components': './src/components',
          '@homeScreenComponents': './src/components/HomeScreenComponents',
          '@signUpSteps': './src/components/signUpSteps',
          '@mockData': './src/utils/mockData',
          '@constants': './src/constants',
        }
      }
    ]
  ]
};
