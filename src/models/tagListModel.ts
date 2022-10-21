import createId from '../lib/idCreator'
const localStorageKeyName = 'tagList'
type Tag = {
	id: string
	name: string
}
const tagListModel = {
	data: [] as Tag[],
	fetch() {
		this.data = JSON.parse(
			window.localStorage.getItem(localStorageKeyName) || '[]'
		)
		return this.data
	},
	new(name: string) {
		const tagNames = this.data.map((item) => item.name)
		if (tagNames.indexOf(name) >= 0) {
			throw new Error('duplicated')
		} else {
			const id = createId().toString()
			this.data.push({ id: id, name: name })
			this.save()
		}
	},
	update(id: string, name: string) {
		const idList = this.data.map((item) => item.id)
		if (idList.indexOf(id) >= 0) {
			const names = this.data.map((item) => item.name)
			if (names.indexOf(name) >= 0) {
				return 'duplication'
			} else {
				const tag = this.data.filter((item) => item.id === id)[0]
				tag.id = name
				tag.name = name
				if (name === '') {
					return 'not found'
				} else {
					this.save()
					return 'success'
				}
			}
		} else {
			return 'not found'
		}
	},
	save() {
		window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
	},
	remove(id: string) {
		let index = -1
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i].id === id) {
				index = i
				break
			}
		}
		this.data.splice(index, 1)
		this.save()
		return true
	},
}
export default tagListModel
