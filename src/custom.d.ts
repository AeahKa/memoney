declare type Bill = {
	tags: string[] | undefined
	remark: string
	type: string
	amount: number
	createdAt?: string
}
type Tag = {
	id: string
	name: string
}

type RootState = {
	billList: Bill[]
	tagList: Tag[]
	currentTag?: Tag
}
