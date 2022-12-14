import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export class TagHelper extends Vue {
	newTag() {
		const name = window.prompt('请输入标签名') as string
		if (name === '') {
			window.alert('标签名不能为空')
		} else if (name === null) {
			return
		} else {
			this.$store.commit('newTag', name)
		}
	}
}

export default TagHelper
