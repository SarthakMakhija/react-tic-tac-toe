var path = require('path');
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );
var ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'build.js'
	},
	module: {
		rules: [
			{ test: /\.(js)$/, use: 'babel-loader' },
			{ test: /\.css$/, use: ExtractTextPlugin.extract(
				{
					fallback: 'style-loader',
					use: 'css-loader'
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css', { allChunks: true }),
		new HtmlWebpackPlugin({template: 'src/index.html'})
	]
}