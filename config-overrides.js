const {
    overrideDevServer,
  } = require("customize-cra");
  
  const addDevServerCOOPReponseHeader = (config) => {
    config.headers = {
      ...config.headers,
      "Cross-Origin-Resource-Policy": "cross-origin",
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "credentialless",
    };
    return config;
  };
  
  module.exports = {
    mode: "development",
    devServer: overrideDevServer(addDevServerCOOPReponseHeader),
  };
  