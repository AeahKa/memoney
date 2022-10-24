import Vue from 'vue'
import Vuex from 'vuex'
import copy from '../lib/copy'
import createId from '../lib/idCreator'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		billList: [] as Bill[],
		tagList: [] as Tag[],
	},
	mutations: {
		fetchBills(state) {
			state.billList = JSON.parse(
				window.localStorage.getItem('billList') || '[]'
			) as Bill[]
		},
		newBill(state, bill) {
			const billCopy: Bill = copy(bill)
			billCopy.createdAt = new Date()
			state.billList.push(billCopy)
			store.commit('saveBills')
		},
		saveBills(state) {
			window.localStorage.setItem('billList', JSON.stringify(state.billList))
		},
		fetchTags(state) {
			return (state.tagList = JSON.parse(
				window.localStorage.getItem('tagList') || '[]'
			))
		},
		newTag(state, name) {
			const tagNames = state.tagList.map((item) => item.name)
			if (tagNames.indexOf(name) >= 0) {
				window.alert('无法创建重复标签')
				return 'duplicated'
			} else {
				const id = createId().toString()
				state.tagList.push({ id: id, name: name })
				store.commit('saveTags')
				window.alert('添加成功')
				return 'succeed'
			}
		},
		saveTags(state) {
			window.localStorage.setItem('tagList', JSON.stringify(state.tagList))
		},
	},
})

export default store
