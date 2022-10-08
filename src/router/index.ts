import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Statement from '@/views/Statement.vue'
import Add from '@/views/Add.vue'
import Settings from '@/views/Settings.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
	{
		path: '/',
		redirect: '/statement',
	},
	{
		path: '/statement',
		component: Statement,
	},
	{
		path: '/add',
		component: Add,
	},
	{
		path: '/settings',
		component: Settings,
	},
]

const router = new VueRouter({
	routes,
})

export default router
