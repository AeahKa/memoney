type Bill = {
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
}
