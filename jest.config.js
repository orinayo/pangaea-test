const path = require('path');

module.exports = {
	rootDir: path.join(__dirname),
	moduleDirectories: [
		'node_modules',
		path.join(__dirname, 'src'),
		'shared',
		path.join(__dirname),
	],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	collectCoverageFrom: ['*/src/**/*.js'],
	testEnvironment: 'jest-environment-jsdom',
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
};
