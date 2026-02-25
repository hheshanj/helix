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
		client: {start:"_app/immutable/entry/start.Df8kXtfj.js",app:"_app/immutable/entry/app.J4IDAHIh.js",imports:["_app/immutable/entry/start.Df8kXtfj.js","_app/immutable/chunks/DK4DKMfM.js","_app/immutable/chunks/D8yk0nqa.js","_app/immutable/chunks/DEWLZVq4.js","_app/immutable/entry/app.J4IDAHIh.js","_app/immutable/chunks/DEWLZVq4.js","_app/immutable/chunks/D8yk0nqa.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
