import axios from 'axios';

const url = 'http://localhost:4000/api/todolist';

export const getActiveTodolist = () => axios.get(`${url}/active`);

export const archiveCompleteTodolist = () => axios.put(`${url}/archive`)
