import billStore from './billStore'
import tagStore from './tagStore'

const store = {
	...billStore,
	...tagStore,
}

export default store
