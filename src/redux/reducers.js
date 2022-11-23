import { createSlice } from "@reduxjs/toolkit";

const initialState=[];

const addtodoreducer=createSlice({
    name:"todos",
    initialState,
    reducers:{
        addtodos: (state,action)=>{
            state.push(action.payload);
            return state

        },
        removetodo:(state,action)=>{
            return state.filter((item)=>item.id!==action.payload)
        },
        edittodo:(state,action)=>{
            return state.map((todo)=>{
                if(todo.id===action.payload.id){
                    return{
                        ...todo,
                        item:action.payload.item,
                    }
                    
                }
                return todo;
        
            })
        },
        completetodo:(state,action)=>{
            return state.map((todo)=>{
                if(todo.id===action.payload){
                    return{
                        ...todo,
                       completed:true,
                    }
                    
                }
                return todo;
        
            })

        }
    }
})

export const {addtodos,removetodo,edittodo,completetodo}=addtodoreducer.actions
export const todoreducer=addtodoreducer.reducer