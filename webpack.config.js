var path = require("path");

module.exports = {
	entry: [
		"./app/index.js"
	],
	output: {
		filename: "[name].bundle.js",
		path: path.join(__dirname, "./public/javascripts")
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
		]
	}
};