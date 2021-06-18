// import Counter from 'components/Counter';
import React, { Fragment } from 'react';
import TodoPage from 'pages/TodoPage';

// import { useDispatch } from 'react-redux';
// import { getActiveTodoList } from 'redux/actions/todolist';

const App = () => {
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(getActiveTodoList());
	// }, [dispatch]);

	return (
		<Fragment>
			{/* <Counter /> */}
			<TodoPage />
		</Fragment>
	);
};

export default App;
