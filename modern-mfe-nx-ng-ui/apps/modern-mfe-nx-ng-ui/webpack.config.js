const { shareAll, ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  output: {
    publicPath: 'auto',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell-app', 
      library: { type: 'var', name: 'shell_app' },
      remotes: {
        admin: 'admin-app@http://localhost:4201/remoteEntry.js',
        user: 'user-app@http://localhost:4202/remoteEntry.js',
      },
      shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
      },
      externals: {
        'user/Module': 'user.Module', 
        'admin/Module': 'admin.Module', 
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html', // Adjust to your entry HTML file
    }),
  ],
  devServer: {
    port: 4200, // The port for your shell app
    historyApiFallback: true,
  },
};
