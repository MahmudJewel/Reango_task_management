import React, { useState, useEffect } from 'react'

import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import { Container, Row, Col, Card } from 'react-bootstrap'
import axios from 'axios'

function App() {

  // start list task 
  const [todos, setTodos] = useState([])
  const getTodos = async () => {
		try {
			const response = await axios.get('http://127.0.0.1:8000/api/')
			const { data } = response
			setTodos(data)
		} catch (err) {
			console.log(err)
		}
	}

  useEffect(() => {
		getTodos()
	}, [])
// end list task 

  // start add task 
  const addTodo = async newTodo =>{
    try{
      console.log(newTodo)
      await axios.post('http://127.0.0.1:8000/api/', newTodo)
      getTodos()
    }
    catch(err){
      console.log(err)
    }
  }
  // end add task 

  // start delete task
  const deleteTask = async id =>{
    try{
      // console.log(id)
      await axios.delete(`http://127.0.0.1:8000/api/${id}/`)
      getTodos()
    }catch(err){
      console.log(err)
    }
  }
  // end delete task
  
  // start edit task
  const editTask = async todo =>{
    try{
      await axios.put(`http://127.0.0.1:8000/api/${todo.id}/`, todo)
      getTodos()
    }
    catch(err){
      console.log(err)
    }
  }
  // end edit task 
  return (
		<div className='wrapper'>
		<Container>
		  <Row className='justify-content-center pt-5'>
		    <Col className="col-md-7">
		      <Card className='p-5 '>
					  <h2 className='text-center text-primary'>Task Managements</h2>
					  <AddTodo addTodo={addTodo}/>
            {todos.map((todo, index)=>(
              <Todo key={index} id={todo.id} title={todo.title} desc={todo.desc} deleteTask={deleteTask} editTask={editTask}/>
            ))}  
					</Card>
				</Col>
			</Row>
		</Container>
		</div>
	);
}

export default App;
