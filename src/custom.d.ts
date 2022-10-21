declare type Bill = {
	tags: string[] | undefined
	remark: string
	type: string
	amount: number
	createdAt?: Date
}
type Tag = {
	id: string
	name: string
}
interface Window {
	tagList: Tag[]
	findTag: (id: string) => Tag | undefined
	newTag: (name: string) => void
	removeTag: (id: string) => boolean
	updateTag: (
		id: string,
		name: string
	) => 'succeed' | 'not found' | 'duplicated'
	billList: Bill[]
	newBill: (bill: Bill) => void
}
