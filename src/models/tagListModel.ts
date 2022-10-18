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
			this.data.push({ id: name, name: name })
			this.save()
		}
	},

	save() {
		window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
	},
}
export default tagListModel
