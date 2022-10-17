const localStorageKeyName = 'tagList'
const tagListModel = {
	data: [] as string[],
	fetch() {
		this.data = JSON.parse(
			window.localStorage.getItem(localStorageKeyName) || '[]'
		)
		return this.data
	},
	new(name: string) {
		if (this.data.indexOf(name) >= 0) {
			throw new Error('duplicated')
			// return 'duplicated'
		} else {
			this.data.push(name)
			this.save()
		}
	},

	save() {
		window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data))
	},
}
export default tagListModel
