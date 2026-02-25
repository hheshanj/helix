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
		client: {start:"_app/immutable/entry/start.BDeQFeqd.js",app:"_app/immutable/entry/app.Cq8csLgy.js",imports:["_app/immutable/entry/start.BDeQFeqd.js","_app/immutable/chunks/DoVcPa9l.js","_app/immutable/chunks/DrNNmNbn.js","_app/immutable/chunks/Cq-m0AA5.js","_app/immutable/chunks/CsnqU1bV.js","_app/immutable/entry/app.Cq8csLgy.js","_app/immutable/chunks/D0fslg4X.js","_app/immutable/chunks/Cq-m0AA5.js","_app/immutable/chunks/1cQuEGss.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DrNNmNbn.js","_app/immutable/chunks/BkzNL7-B.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
