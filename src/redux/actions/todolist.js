import * as api from 'redux/api/todolist';
import * as c from 'utils/constants';
// import data from 'data/todo.json';

export const getActiveTodoList = () => async dispatch => {
	try {
		const { data } = await api.getActiveTodolist();
		dispatch({ type: c.GET_ACTIVE_TODOLIST, payload: data });
		// console.log('Line 9 data from getActiveTodolist response: ', data);
	} catch (err) {
		console.log(err);
	}
};

export const archiveCompleteTodolist = () => async dispatch => {
	try {
		const { data } = await api.archiveCompleteTodolist();
		dispatch({ type: c.ARCHIVE_COMPLETE_TODOLIST, payload: data });
		console.log('Line 19 data from archiveCompleteTodolist response: ', data);
	} catch (err) {
		console.log(err);
	}
};