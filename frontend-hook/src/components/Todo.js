import React, { useState } from 'react'
import { Row, Col, Form, Button, Modal } from 'react-bootstrap'
// icon 
import edit from "../static/edit.png"
import trash from "../static/trash.png"
const Todo =({id, title, desc, deleteTask, editTask}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [ newTitle, setNewTitle ] = useState(title);
    const [ newDesc, setDesc ] = useState(desc);

    const updateTask = (title, desc) =>{
      handleClose()
      const todo = {
        id,
        title,
        desc,
        complete: false,
      }
      editTask(todo)
    }
    return (
      <div className="container">
        <div className="row border-bottom pt-3">
          <div className="col-md-1">
            <input type="checkbox" />
          </div>
          <div className="col-md-8">
            <h5>{title}</h5>
            <p>{desc}</p>
          </div>
          <div className="col-md-2">
            <img onClick={() => handleShow()} className="m-1" src={edit}  style={{width: "20px", height: "20px"}} />
            <img onClick={() => deleteTask(id)} className="m-1" src={trash}  style={{width: "20px", height: "20px"}} />
          </div>
        </div>

        {/* for click and show page  */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Task</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form-group m-2">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  value = {newTitle}
                  onChange = {(e)=> setNewTitle(e.target.value)} 
                />
              </div>

              <div className="form-group m-2">
                <label className="form-label">Description</label>
                <input
                  type="text"
                  className="form-control"
                  value = {newDesc}
                  onChange= {(e)=> setDesc(e.target.value)}
                />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => updateTask(newTitle, newDesc)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
}
export default Todo