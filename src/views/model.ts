import Bill from '../custom'
const localStorageKeyName = 'billList'
const model = {
	copy(data: Bill[] | Bill) {
		return JSON.parse(JSON.stringify(data))
	},
	fetch() {
		return JSON.parse(
			window.localStorage.getItem(localStorageKeyName) || '[]'
		) as Bill[]
	},
	save(data: Bill[]) {
		window.localStorage.setItem(localStorageKeyName, JSON.stringify(data))
	},
}
export default model
