module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,json,webp,js,png,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};