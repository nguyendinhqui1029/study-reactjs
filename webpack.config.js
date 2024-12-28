module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'bundle.js',
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env)
      })
    ],  
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.mjs'],
    },
    devServer: {
      contentBase: './dist',
      port: 3000,
    },
  };
  