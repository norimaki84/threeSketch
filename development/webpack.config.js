const path = require('path');
const PATH = require('./config');

module.exports = {
	mode: 'none',
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
					{
						loader: 'babel-loader',
						options: {
							presets: [
								['@babel/preset-env']
							]
						}
					}
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
	resolve: {
		modules: [
			path.join(__dirname, 'node_modules')
		]
	}
};
