import {
	defineConfig,
	splitVendorChunkPlugin,
} from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		splitVendorChunkPlugin(),
		svgLoader(),
	],
	server: {
		host: true,
		port: 4001,
	}
})
