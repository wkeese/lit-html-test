module.exports = {
	mode: "development",

	//devtool: "eval-source",

	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							["@babel/preset-env", {
								targets: {
									ie: 11
								}
							}]
						]
					}
				}
			}
		]
	}
};