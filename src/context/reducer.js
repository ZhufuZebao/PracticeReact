export const reducer = (state,action) => {
	switch (action.type) {
		case 'enquirie':
		case 'reset':
		case 'delete':
		case 'update':
		case 'insert':
		case 'getData':
			return action.state
		default:
			return state
	}
}