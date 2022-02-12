import React, { Component } from "react";
import "./App.css";
import axios from 'axios';
// image 
import edit from "./static/edit.png"
import trash from "./static/trash.png"

// csrf 
// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "XCSRF-TOKEN";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: {
        id : null,
        title: "",
        description: "",
        completed: false,
      },
      taskList: [],
    };
    this.fetchTasks = this.fetchTasks.bind(this);
    this.deleteTasks = this.deleteTasks.bind(this);
  }

//   getCookie(name) {
//     var cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         var cookies = document.cookie.split(';');
//         for (var i = 0; i < cookies.length; i++) {
//             var cookie = jQuery.trim(cookies[i]);
//             if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     return cookieValue;
// }


  // task list 
  fetchTasks= () => {
    console.log("Fetching...");
    axios   //Axios to send and receive HTTP requests
      .get("http://127.0.0.1:8000/api/")
      .then(res => this.setState({ taskList: res.data }))
      .catch(err => console.log(err));
  };

  deleteTasks = (task) => {
    console.log("deleting...");
    // var csrftoken = this.getCookie('csrftoken')

    axios   //Axios to send and receive HTTP requests
      .delete(`http://127.0.0.1:8000/api/${task.id}/`)
      .then(res => 
        this.fetchTasks())
      .catch(err => console.log('error'));
  };

  // handleDelete = item => {
  //   axios
  //     .delete(`http://localhost:8000/api/tasks/${item.id}/`)
  //     .then(res => this.refreshList());
  // };

  componentWillMount() {
    this.fetchTasks();
  }

  render() {
    let tasks = this.state.taskList
    return (
      <div className="container" style={{background: "green"}} >
        <h1 className="text-primary text-uppercase text-center my-4">
          Task Manager
        </h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="">
                <button onClick={this.createItem} className="btn btn-primary">
                  Add task
                </button>
              </div>

              <div>
                <table className="table">
                  <thead>
                    <tr>
                      <th>serial</th>
                      <th>Task</th>
                      <th>Desc</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks.map(function (task) {
                      return (
                        <tr key={task.id}>
                          <td>1</td>
                          <td>{task.title}</td>
                          <td>{task.desc}</td>
                          <td>
                            <img  className="m-1" src={edit}  style={{width: "20px", height: "20px"}} /> 
                            <button onClick={() => this.deleteTasks(task)}> D </button><img className="m-1" src={trash}  style={{width: "20px", height: "20px"}} /> 
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


