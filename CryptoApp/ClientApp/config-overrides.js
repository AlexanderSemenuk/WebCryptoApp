const { override, addWebpackResolve } = require("customize-cra");

module.exports = override(
  addWebpackResolve({
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer/"),
      "readable-stream": require.resolve("readable-stream"),
    },
  })
);
