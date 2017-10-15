const path = require('path');
const PATH = require('./config');

module.exports = {
	entry: {
		"main": PATH.dev.devjs + "src/Top.js"
	},
	output: {
		filename: "[name].js"
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{loader: "babel-loader"}
				]
			},
			{
				test: /\.(glsl|frag|vert)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'raw-loader',
						options: {
							glsl: {
								chunkPath: ""
							}
						}
					}
				]
			},
			{
				test: /\.(glsl|frag|vert)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'glslify-loader',
						options: {
							glsl: {
								chunkPath: ""
							}
						}
					}
				]
			}
		]
	},
	// // プラグインの設定
	// plugins: [
	// 	new webpack.optimize.UglifyJsPlugin({
	// 		compress: {
	// 			// console.log（）などのconsole.*系の記述を取り除いて出力する
	// 			drop_console: true
	// 		},
	// 	}),
	// ],
	resolve: {
		modules: [
			path.join(__dirname, 'node_modules')
		]
	}
};
