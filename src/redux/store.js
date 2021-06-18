import { combineReducers } from 'redux';
import toDoList from 'redux/reducers/todolist';

export default combineReducers({
	toDoList, //Heto dapat ang nasa useSelector(state => state.toDoList)
});
