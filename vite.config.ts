import uni from "@dcloudio/vite-plugin-uni"; // ！此依赖不能安装
import path from "path";
import { defineConfig } from "vite";
import { cool } from "@cool-vue/vite-plugin";
import { proxy } from "./src/config/proxy";

function resolve(dir: string) {
	return path.resolve(__dirname, dir);
}

// https://vitejs.dev/config

export default defineConfig(() => {
	return {
		plugins: [
			uni(),
			cool({
				type: "app",
				proxy,
			}),
		],
		server: {
			port: 9900,
			proxy,
			hmr: {
				overlay: true,
			},
		},
		resolve: {
			alias: {
				"/pages": resolve("./src/pages/"),
				"/@": resolve("./src/"),
				"/$": resolve("./src/uni_modules/"),
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					api: "modern-compiler", // or "modern"
					silenceDeprecations: ["legacy-js-api"],
					// prependData: `@use 'src/uni_modules/cool-ui/theme.scss' as *;`,
				},
			},
		},
	};
});
