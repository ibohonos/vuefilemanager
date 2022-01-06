const routesIndex = [
	{
		name: 'Homepage',
		path: '/',
		component: () =>
			import(/* webpackChunkName: "chunks/homepage" */ '../views/Frontpage/Homepage'),
		meta: {
			requiresAuth: false
		},
	},
	{
		name: 'DynamicPage',
		path: '/page/:slug',
		component: () =>
			import(/* webpackChunkName: "chunks/dynamic-page" */ '../views/Frontpage/DynamicPage'),
		meta: {
			requiresAuth: false
		},
	},
	{
		name: 'ContactUs',
		path: '/contact-us',
		component: () =>
			import(/* webpackChunkName: "chunks/contact-us" */ '../views/Frontpage/ContactUs'),
		meta: {
			requiresAuth: false
		},
	},
	{
		name: 'NotFound',
		path: '/not-found',
		component: () =>
			import(/* webpackChunkName: "chunks/not-found" */ '../views/NotFound'),
		meta: {
			requiresAuth: false
		},
	},
	{
		name: 'TemporaryUnavailable',
		path: '/temporary-unavailable',
		component: () =>
			import(/* webpackChunkName: "chunks/temporary-unavailable" */ '../views/TemporaryUnavailable'),
		meta: {
			requiresAuth: false
		},
	},
]

export default routesIndex