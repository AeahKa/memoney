import copy from '@/lib/copy'

const localStorageKeyName = 'billList'

const billStore = {
	billList: [] as Bill[],
	fetchBills() {
		this.billList = JSON.parse(
			window.localStorage.getItem(localStorageKeyName) || '[]'
		) as Bill[]
		return this.billList
	},
	saveBill() {
		window.localStorage.setItem(
			localStorageKeyName,
			JSON.stringify(this.billList)
		)
	},
	newBill(bill: Bill) {
		const billCopy: Bill = copy(bill)
		billCopy.createdAt = new Date()
		this.billList && this.billList.push(billCopy)
		billStore.saveBill()
	},
}

billStore.fetchBills()

export default billStore
