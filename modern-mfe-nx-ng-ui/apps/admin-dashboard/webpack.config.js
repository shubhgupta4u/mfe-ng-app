const { shareAll, ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: 'auto',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'admin-app',
      library: { type: 'var', name: 'admin_dashboard' },
      filename: 'remoteEntry.js',
      exposes: {
        './Module': './apps/admin-dashboard/src/app/dashboard/dashboard.module.ts', 
      },
      shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
      },
    }),
  ],
};
