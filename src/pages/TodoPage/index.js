import React, { useState, useEffect } from "react";
import { Container, Button, Card, Col, Row } from "react-bootstrap";

import Header from "components/Todo/Header";
import ToDoList from "components/Todo/ToDoList";
import ToDoForm from "components/Todo/ToDoForm";

import { TodolistProvider } from "context/todolist";

const TodoPage = () => {
	const [toDoList, setToDoList] = useState([]);

	useEffect(() => {
		getActiveTodolist();
	}, [toDoList]);

	const getActiveTodolist = () => {
		fetch("http://localhost:4000/api/todolist/active")
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setToDoList(data);
			});
	};

	const archiveCompleteTodolist = () => {
		fetch("http://localhost:4000/api/todolist/archive", {
			method: 'PUT'
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
			});
	};

	const handleFilter = () => {
		archiveCompleteTodolist()
	};

	const todolistProviderValues = {
		toDoList,
		setToDoList,
	};

	return (
		<TodolistProvider value={todolistProviderValues}>
			<Container className="text-center">
				<Row>
					<Col className="m-auto mt-3 mb-5" xs={12} md={4}>
						<Header />
						<Card className="mb-3">
							<Card.Body>
								<ToDoList />
							</Card.Body>
						</Card>

						<Button
							style={{ width: "100%" }}
							className="mb-3"
							variant="primary"
							onClick={handleFilter}
						>
							Clear completed
						</Button>
						<ToDoForm />
					</Col>
				</Row>
			</Container>
		</TodolistProvider>
	);
};

export default TodoPage;