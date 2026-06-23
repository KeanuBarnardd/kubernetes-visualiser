import { defineConfig } from "@kubb/core";
import { pluginTs } from "@kubb/plugin-ts";
import { pluginOas } from "@kubb/plugin-oas";
import { pluginClient } from "@kubb/plugin-client";

export default defineConfig({
	root: ".",
	input: { path: "./openapi/openapi.json" },
	output: { path: "./src/lib/api/generated", clean: true },
	plugins: [pluginTs(), pluginOas(), pluginClient({ client: "axios" })],
});
