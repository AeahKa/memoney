import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Statement from '@/views/Statement.vue'
import Add from '@/views/Add.vue'
import Settings from '@/views/Settings.vue'
import EditTag from '@/views/EditTag.vue'
import NotFound from '@/views/NotFound.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
	{
		path: '/',
		redirect: '/add',
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
	{
		path: '/settings/edit/:id',
		component: EditTag,
	},
	{
		path: '*',
		component: NotFound,
	},
]

const router = new VueRouter({
	routes,
})

export default router
