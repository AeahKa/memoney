import tagListModel from '../models/tagListModel'
import billListModel from '../models/billListModel'
const store = {
	//bill store
	billList: billListModel.fetch(),
	newBill: (bill: Bill) => {
		billListModel.new(bill)
	},
	tagList: tagListModel.fetch(),
	findTag(id: string) {
		return this.tagList.filter((t) => t.id === id)[0]
	},
	newTag: (name: string) => {
		const message = tagListModel.new(name)
		if (message === 'duplicated') {
			window.alert('无法创建重复标签')
		} else if (message === 'succeed') {
			window.alert('添加成功')
		}
	},
	removeTag: (id: string) => {
		if (tagListModel.remove(id)) {
			return true
		} else {
			return false
		}
	},
	updateTag: (id: string, name: string) => {
		return tagListModel.update(id, name)
	},
}
export default store
