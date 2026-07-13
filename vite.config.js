import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';

export default defineConfig({
	plugins: [
		react(),
		babel({ presets: [reactCompilerPreset(), '@babel/preset-react'] }),
	],
	base: '/Solar-System/',
	server: {
		port: 3000,
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './vitest.setup.js',
		clearScreen: true,
	},
});
