import React, { useEffect } from 'react';
import { Container, Button, Card, Col, Row } from 'react-bootstrap';

import Header from 'components/Todo/Header';
import ToDoList from 'components/Todo/ToDoList';
import ToDoForm from 'components/Todo/ToDoForm';

import { useDispatch, useSelector } from 'react-redux';
import { getActiveTodoList } from 'redux/actions/todolist';

const TodoPage = () => {
	const toDoList = useSelector(state => state.toDoList);

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getActiveTodoList());
	}, [dispatch, toDoList]);

	const archiveCompleteTodolist = () => {
		fetch('http://localhost:4000/api/todolist/archive', {
			method: 'PUT',
		})
			.then(res => res.json())
			.then(data => {
				console.log(`archiveCompleteTodolist request's response: `, data);
			})
			.catch(err => console.log(err));
	};

	const handleFilter = () => {
		archiveCompleteTodolist();
	};

	return (
		<Container className='text-center'>
			<Row>
				<Col className='m-auto mt-3 mb-5' xs={12} md={4}>
					<Header />
					<Card className='mb-3'>
						<Card.Body>
							<ToDoList />
						</Card.Body>
					</Card>

					<Button
						style={{ width: '100%' }}
						className='mb-3'
						variant='primary'
						onClick={handleFilter}
					>
						Clear completed
					</Button>
					<ToDoForm />
				</Col>
			</Row>
		</Container>
	);
};

export default TodoPage;
