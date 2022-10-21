import Bill from '../custom'
const localStorageKeyName = 'billList'
const billListModel = {
	data: [] as Bill[],

	copy(data: Bill[] | Bill) {
		return JSON.parse(JSON.stringify(data))
	},
	fetch() {
		this.data = JSON.parse(
			window.localStorage.getItem(localStorageKeyName) || '[]'
		) as Bill[]
		return this.data
	},
	save() {
		window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
	},
}
export default billListModel
