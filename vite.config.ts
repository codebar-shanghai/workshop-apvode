import {
	defineConfig,
	splitVendorChunkPlugin,
} from 'vite'
import vue from '@vitejs/plugin-vue'

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
	],
	server: {
		host: true,
		port: 4001,
	}
})
