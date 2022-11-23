import React from 'react'
import { useState ,useRef} from 'react'
import Todosearch from './Todosearch'
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import DoneAllTwoToneIcon from '@mui/icons-material/DoneAllTwoTone';
import IconButton from '@mui/material/IconButton';
import { addtodos, completetodo, edittodo, removetodo } from '../redux/reducers';



function Todolist(props) {
  const buttonclicked=(e)=>{
    alert("press enter")
  }

  const{item,edittodo,removetodo,completetodo}=props;

  const inputarea=useRef(true);

    const changefocus=()=>{
      inputarea.current.disabled=false;
      inputarea.current.focus()
    }
    
    const editupdate=(id,value,e)=>{
     if(e.which===13){
        props.edittodo({id,item:value})
        inputarea.current.disabled=true;
      }

    }
    return (
      
    <div>
      <div key={item.id}>
        <textarea onKeyPress={(e)=>editupdate(item.id,inputarea.current.value,e)} ref={inputarea}  defaultValue={item.item}/>
      <IconButton data-testid="edit" onClick={()=>changefocus()} color="primary"  aria-label="add to shopping cart">
  <EditTwoToneIcon/>
</IconButton>
<IconButton data-testid="save"  onClick={()=>buttonclicked()} color="primary"  aria-label="add to shopping cart">
  <SaveAltIcon/>
</IconButton>
<IconButton  data-testid="done"onClick={()=>props.completetodo(item.id)} color="primary"  aria-label="add to shopping cart">
  <DoneAllTwoToneIcon/>
</IconButton>
      <IconButton data-testid="delete" onClick={()=>props.removetodo(item.id)} color="warning"  aria-label="add to shopping cart">
  <DeleteForeverTwoToneIcon/>
</IconButton>
</div>

    </div>
  )
}

export default Todolist