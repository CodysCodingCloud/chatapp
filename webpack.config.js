module.exports = {
	mode: "development",
	entry: ["./client/index.js"],
	output: {
		path: __dirname,
		filename: "./public/bundle.js",
	},
	context: __dirname,
	devtool: "source-map",
	devServer: {
		static: {
			directory: __dirname + "/public",
		},
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-react"],
				},
			},
		],
	},
};
