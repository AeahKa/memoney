import createId from '../lib/idCreator'

const localStorageKeyName = 'tagList'

const tagStore = {
	tagList: [] as Tag[],
	fetchTags() {
		this.tagList = JSON.parse(
			window.localStorage.getItem(localStorageKeyName) || '[]'
		)
		return this.tagList
	},
	findTag(id: string) {
		return this.tagList.filter((t) => t.id === id)[0]
	},
	newTag(name: string) {
		const tagNames = this.tagList.map((item) => item.name)
		if (tagNames.indexOf(name) >= 0) {
			window.alert('无法创建重复标签')
		} else {
			const id = createId().toString()
			this.tagList.push({ id: id, name: name })
			this.saveTags()
			window.alert('添加成功')
		}
	},
	removeTag(id: string) {
		let index = -1
		for (let i = 0; i < this.tagList.length; i++) {
			if (this.tagList[i].id === id) {
				index = i
				break
			}
		}
		this.tagList.splice(index, 1)
		this.saveTags()
		return true
	},
	updateTag(id: string, name: string) {
		const idList = this.tagList.map((item) => item.id)
		if (idList.indexOf(id) >= 0) {
			const names = this.tagList.map((item) => item.name)
			if (names.indexOf(name) >= 0) {
				return 'duplicated'
			} else {
				const tag = this.tagList.filter((item) => item.id === id)[0]
				tag.name = name
				if (name === '') {
					return 'not found'
				} else {
					this.saveTags()
					return 'succeed'
				}
			}
		} else {
			return 'not found'
		}
	},
	saveTags() {
		window.localStorage.setItem(
			localStorageKeyName,
			JSON.stringify(this.tagList)
		)
	},
}

tagStore.fetchTags()

export default tagStore
