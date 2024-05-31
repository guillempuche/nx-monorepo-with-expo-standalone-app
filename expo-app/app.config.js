module.exports = ({ config }) => ({
	...config,
	expo: {
		name: "expo-app",
		slug: "expo-app",
		version: "1.0.0",
		orientation: "portrait",
		icon: "./assets/images/icon.png",
		scheme: "expoapp",
		userInterfaceStyle: "automatic",
		splash: {
			image: "./assets/images/splash.png",
			resizeMode: "contain",
			backgroundColor: "#ffffff",
		},
		ios: {
			supportsTablet: true,
			bundleIdentifier: "com.guillemtest.expoapp",
		},
		android: {
			adaptiveIcon: {
				foregroundImage: "./assets/images/adaptive-icon.png",
				backgroundColor: "#ffffff",
			},
			package: "com.guillemtest.expoapp",
		},
		web: {
			bundler: "metro",
			output: "static",
			favicon: "./assets/images/favicon.png",
		},
		plugins: [
			[
				"expo-dev-launcher",
				{
					launchMode: "most-recent",
				},
			],
			"expo-router",
		],
		experiments: {
			typedRoutes: true,
		},
		extra: {
			router: {
				origin: false,
			},
			eas: {
				projectId: "de75d0c8-9890-43de-b78e-445b536a9cf9",
			},
		},
		owner: "guillem-test",
	},
});
