import * as c from 'utils/constants';

const todolistReducer = (state = [], action) => {
	switch (action.type) {
		case c.GET_ACTIVE_TODOLIST:
			return action.payload;
		case c.ARCHIVE_COMPLETE_TODOLIST:
			return action.payload;
		default:
			return state;
	}
};

export default todolistReducer;
