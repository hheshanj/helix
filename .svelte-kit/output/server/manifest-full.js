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
		client: {start:"_app/immutable/entry/start.Ca0ULEeX.js",app:"_app/immutable/entry/app.cojkFjrW.js",imports:["_app/immutable/entry/start.Ca0ULEeX.js","_app/immutable/chunks/CACxJjj5.js","_app/immutable/chunks/DrNNmNbn.js","_app/immutable/chunks/Cq-m0AA5.js","_app/immutable/chunks/omllwana.js","_app/immutable/entry/app.cojkFjrW.js","_app/immutable/chunks/D0fslg4X.js","_app/immutable/chunks/Cq-m0AA5.js","_app/immutable/chunks/1cQuEGss.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DrNNmNbn.js","_app/immutable/chunks/BkzNL7-B.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/rss.xml",
				pattern: /^\/rss\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/rss.xml/_server.js'))
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/sitemap.xml/_server.js'))
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
