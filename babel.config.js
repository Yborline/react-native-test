module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          extensions: [".ts", ".tsx", ".js", ".json", ".png"],
          alias: {
            "@app": "./app",
            "@assets": "./assets",
            "@components": "./components",
            "@hooks": "./hooks",
            "@constants": "./constants",
          },
        },
      ],
    ],
  };
};
