import React from 'react';
import ToDo from 'components/Todo/ToDoList/ToDo';
import { useSelector } from 'react-redux';

const ToDoList = () => {
	const toDoList = useSelector(state => state.toDoList);

	return toDoList.map(todo => {
		return <ToDo key={todo._id} todo={todo} />;
	});
};

export default ToDoList;
