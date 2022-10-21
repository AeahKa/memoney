import copy from '@/lib/copy'
const localStorageKeyName = 'billList'
const billListModel = {
	data: [] as Bill[],
	new(bill: Bill) {
		const billCopy: Bill = copy(bill)
		billCopy.createdAt = new Date()
		this.data.push(billCopy)
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
