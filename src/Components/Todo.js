import React, { useState } from 'react'
import { connect } from 'react-redux';
import { addtodos, completetodo, edittodo, removetodo } from '../redux/reducers';
import Todolist from './Todolist';


const mapping = (state) => {
  return {
    todos: state,
  }
}
const dispatchprops = (dispatch) => {
  return {
    addtodo: (obj) => dispatch(addtodos(obj)),
    removetodo: (id) => dispatch(removetodo(id)),
    edittodo: (obj) => dispatch(edittodo(obj)),
    completetodo: (id) => dispatch(completetodo(id))
  }
}

export function Todo(props) {
  const [sort, setSort] = useState("active")

  return (
    <div className='todobox'>
      <div className='todo-buttons'>
        <button aria-label="actvbtn" data-testid="active" onClick={() => setSort("active")} >Active tasks</button>
        <button aria-label="combtn" data-testid="completed" onClick={() => setSort("completed")}>Completed tasks</button>
        <button aria-label="allbtn" data-testid="all" onClick={() => setSort("all")}>All tasks</button>
      </div>
      <div>
        {props.todos.length > 0 && sort === "active"
          ? props.todos.map((item) => {
            return (
              item.completed === false && (
                <Todolist
                  key={item.id}
                  item={item}
                  removetodo={props.removetodo}
                  edittodo={props.edittodo}
                  completetodo={props.completetodo}
                />
              )
            );
          })
          : null}

        {props.todos.length > 0 && sort === "completed"
          ? props.todos.map((item) => {
            return (
              item.completed === true && (
                <Todolist
                  key={item.id}
                  item={item}
                  removetodo={props.removetodo}
                  updatetodo={props.edittodo}
                  completetodo={props.completetodo}
                />
              )
            );
          })
          : null}
        {/* for all items */}
        {props.todos.length > 0 && sort === "all"
          ? props.todos.map((item) => {
            return (
              <Todolist
                key={item.id}
                item={item}
                removetodo={props.removetodo}
                updateTodo={props.edittodo}
                completetodo={props.completetodo}
              />
            );
          })
          : null}


      </div>

    </div>
  )
}

export default connect(mapping, dispatchprops)(Todo)