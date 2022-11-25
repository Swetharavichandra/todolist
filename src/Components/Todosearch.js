import React, { useRef } from 'react'
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import { connect } from 'react-redux';
import { addtodos, completetodo, edittodo, removetodo } from '../redux/reducers';
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import DoneAllTwoToneIcon from '@mui/icons-material/DoneAllTwoTone';
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

function Todosearch(props) {
  const [input, setInput] = useState("");
  const inputarea = useRef(true);
  const changefocus = () => {
    inputarea.current.disabled = false;
    inputarea.current.focus()
  }


  const handleChange = (e) => {
    setInput(e.target.value);
  }
  const addbutton = () => {
    if (input === "") {
      alert("Input is Empty");
    }
    else {
      props.addtodo({
        id: Math.floor(Math.random() * 1000), item: input, completed: false
      })
      setInput(" ")
    }
  }
  const buttonclicked = (e) => {
    alert("press enter")
  }
  const editupdate = (id, value, e) => {


    if (e.which === 13) {
      props.edittodo({ id, item: value })
      inputarea.current.disabled = true;
    }

  }

  // console.log("todo",props)

  return (
    <div>

      <input data-testid="todoinput" onChange={(e) => handleChange(e)} className='input' type="text" value={input} placeholder='add a task' />
      <IconButton data-testid="add" onClick={() => addbutton()} color="primary" aria-label="add to shopping cart">
        <AddCircleSharpIcon />
      </IconButton>



      {/* {
    props.todos.map(item=>{
      return<div key={item.id}>
        <textarea data-testid="textbutton"onKeyPress={(e)=>editupdate(item.id,inputarea.current.value,e)} ref={inputarea} disabled={inputarea} defaultValue={item.item}/>
      


</div>
    })
  } */}




    </div>
  )
}

export default connect(mapping, dispatchprops)(Todosearch)