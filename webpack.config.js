const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
	entry: ['./src/scss/style.scss'],
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'dark.css'
	},
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'dark.css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
  ],
	module: {
		rules: [
			{
				test: /\.(css|sass|scss)$/,
				use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: path.resolve(__dirname, "dist"),
            },
          },
          {
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              map: true,
              plugins: [require('autoprefixer')({
                browsers: [
                  'Explorer >= 10',
                  'last 2 versions'
                ]
              })]
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            }
          }
        ]
      }
		]
	}
};