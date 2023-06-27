const path = require("path");

module.exports = {
	root: path.resolve(__dirname, "src"),
	build: {
		outDir: "../dist",
	},

	server: {
		port: 8080,
		hot: true,
	},
};
