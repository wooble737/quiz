export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/style.css","js/quiz.js","js/upload.js","pages/login.html","pages/register.html","robots.txt"]),
	mimeTypes: {".css":"text/css",".js":"text/javascript",".html":"text/html",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.e0DnwIWA.js",app:"_app/immutable/entry/app.WuL9BE73.js",imports:["_app/immutable/entry/start.e0DnwIWA.js","_app/immutable/chunks/nmLeRwR2.js","_app/immutable/chunks/D5VUmKBG.js","_app/immutable/chunks/CBFt5A9N.js","_app/immutable/entry/app.WuL9BE73.js","_app/immutable/chunks/D5VUmKBG.js","_app/immutable/chunks/DrJLZm3o.js","_app/immutable/chunks/KiRHlVu4.js","_app/immutable/chunks/CBPuV305.js","_app/immutable/chunks/CBFt5A9N.js","_app/immutable/chunks/DwZR9p66.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js'))
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
				id: "/create-question",
				pattern: /^\/create-question\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/landing",
				pattern: /^\/landing\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/register",
				pattern: /^\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
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
