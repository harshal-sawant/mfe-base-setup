const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "host",

  remotes: {
    remote1: "http://localhost:4300/remoteEntry.js",
    remote2: "http://localhost:4400/remoteEntry.js",
  },

  exposes: {
    "./SharedState": "./src/app/shared/shared-state.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },
});

// remote1: "http://localhost:8080/remoteEntry.js",
// remote1: "../../remote1/dist/remote1/remoteEntry.js",

// remote1: "http://localhost:8080/remoteEntry.js",
// remote2: "http://localhost:8001/remoteEntry.js",

//  remote1: "http://localhost:4300/remoteEntry.js",
//   remote2: "http://localhost:4400/remoteEntry.js",
