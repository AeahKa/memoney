import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Nav from '@/components/Nav.vue'
import Layout from '@/components/Layout.vue'
import Icon from '@/components/Icon.vue'
import tagListModel from './models/tagListModel'
import billListModel from './models/billListModel'

Vue.config.productionTip = false

Vue.component('Nav', Nav)
Vue.component('Layout', Layout)
Vue.component('Icon', Icon)

//bill store
window.billList = billListModel.fetch()
window.newBill = (bill: Bill) => {
	billListModel.new(bill)
}
//tag store
window.tagList = tagListModel.fetch()
window.findTag = (id: string) => {
	return window.tagList.filter((t) => t.id === id)[0]
}
window.newTag = (name: string) => {
	const message = tagListModel.new(name)
	if (message === 'duplicated') {
		window.alert('无法创建重复标签')
	} else if (message === 'succeed') {
		window.alert('添加成功')
	}
}
window.removeTag = (id: string) => {
	if (tagListModel.remove(id)) {
		return true
	} else {
		return false
	}
}
window.updateTag = (id: string, name: string) => {
	return tagListModel.update(id, name)
}

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
