declare type Bill = {
	tags: string[] | undefined
	remark: string
	type: string
	amount: number
	createdAt?: Date
}

export default Bill
