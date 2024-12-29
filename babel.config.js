module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        safe: true, // Si quieres asegurarte de que todas las variables estén definidas, cambia a true
        allowUndefined: false,
      },
    ],
  ],
};
