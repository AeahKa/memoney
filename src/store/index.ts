import Vue from 'vue'
import Vuex from 'vuex'
import copy from '../lib/copy'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		billList: [] as Bill[],
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
	},
})

export default store
