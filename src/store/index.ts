import Vue from 'vue'
import Vuex from 'vuex'
import copy from '../lib/copy'
import createId from '../lib/idCreator'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		billList: [],
		tagList: [],
		currentTag: undefined,
	} as RootState,
	mutations: {
		fetchBills(state) {
			state.billList = JSON.parse(
				window.localStorage.getItem('billList') || '[]'
			) as Bill[]
		},
		newBill(state, bill) {
			const billCopy: Bill = copy(bill)
			billCopy.createdAt = new Date().toISOString()
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
			} else {
				const id = createId().toString()
				state.tagList.push({ id: id, name: name })
				store.commit('saveTags')
				window.alert('添加成功')
			}
		},
		saveTags(state) {
			window.localStorage.setItem('tagList', JSON.stringify(state.tagList))
		},
		getCurrentTag(state, id) {
			state.currentTag = state.tagList.filter((t) => t.id === id)[0]
		},
		updateTag(state, payload: { id: string; name: string }) {
			const { id, name } = payload
			const idList = state.tagList.map((item) => item.id)
			if (idList.indexOf(id) >= 0) {
				const names = state.tagList.map((item) => item.name)
				if (names.indexOf(name) >= 0) {
					window.alert('无法创建重复标签')
				} else {
					const tag = state.tagList.filter((item) => item.id === id)[0]
					tag.name = name
					store.commit('saveTags')
				}
			}
		},
		removeTag(state, id) {
			let index = -1
			for (let i = 0; i < state.tagList.length; i++) {
				if (state.tagList[i].id === id) {
					index = i
					break
				}
			}
			if (index >= 0) {
				state.tagList.splice(index, 1)
				store.commit('saveTags')
				alert('删除成功')
			} else {
				alert('删除失败')
			}
		},
	},
})

export default store
