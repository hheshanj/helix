export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.D9cNVTz-.js",app:"_app/immutable/entry/app.DsmVSV_C.js",imports:["_app/immutable/entry/start.D9cNVTz-.js","_app/immutable/chunks/u9O7V38D.js","_app/immutable/chunks/BtMtoYAL.js","_app/immutable/chunks/Dv-8bcD8.js","_app/immutable/entry/app.DsmVSV_C.js","_app/immutable/chunks/BtMtoYAL.js","_app/immutable/chunks/u9O7V38D.js","_app/immutable/chunks/Dv-8bcD8.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/rss.xml","/sitemap.xml","/blog/hello-world","/blog/oled-dark-mode"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
