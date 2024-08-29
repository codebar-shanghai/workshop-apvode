import {
	defineConfig,
	splitVendorChunkPlugin,
} from 'vite'
import vue from '@vitejs/plugin-vue'
import { visualizer } from "rollup-plugin-visualizer";

const repoName = process.env.VITE_REPO_NAME || '/';

// https://vitejs.dev/config/
export default defineConfig({
	base: repoName,
	plugins: [
		vue({
			template: {
				transformAssetUrls: {
					img: ["src", "data-src"],
				}
			},
		}),
		splitVendorChunkPlugin(),
		visualizer(),
	],
	server: {
		host: true,
		port: 4001,
	}
})
