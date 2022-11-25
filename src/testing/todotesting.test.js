  import React from "react";
  import { todoreducer } from "../redux/reducers";
import { getByTestId, waitFor } from "@testing-library/react";
import { IconButton } from "@mui/material";
import { Todo } from "../Components/Todo";
import {screen,render} from "@testing-library/react"






test('reducer initial state', () => {
  let state;
  state = todoreducer(undefined, {});
  
  expect(state).toEqual([]);
  console.log(state)
});

test('tasks is getting added', () => {
  let state;
  state = todoreducer([], {type:'todos/addtodos',payload:{id:1,item:' task1',completed:false}});
  expect(state).toEqual([{id:1,item:' task1',completed:false}]);
});
test('when data updated on clicking edit', () => {
  let state;
  state = todoreducer([{id:1,item:'add',completed:false}], {type:'todos/edittodo',payload:{id:1,item:'add1'}});
  expect(state).toEqual([{id:1,item:'add1',completed:false}]);
});
test('testing delete functionality', () => {
  let state;
  state = todoreducer([{id:1,item:'add1',completed:true}], {type:'todos/removetodo',payload:1});
  expect(state).toEqual([]);
});
test('testing complete functionality', () => {
  let state;
  state = todoreducer([{id:1,item:'add1',completed:false}], {type:'todos/completetodo',payload:1});
  expect(state).toEqual([{id:1,item:'add1',completed:true}]);
});

test('active data', () => {
  let state;
  state = todoreducer([{id:1,item:'add1',completed:true}], {type:'todos/removetodo',payload:1});
  expect(state).toEqual([]);
});

test('all  iconbuttons', () => {
  expect(IconButton).toBeInTheDocument
 
  
});
test('input', () => {
  expect(<input/>).toBeInTheDocument
  expect(<input/>).toHaveLength>0
  
  
});
test('textarea', () => {
  expect(<textarea/>).toBeInTheDocument
 
  
});
// test('active buttons', () => {
//    <Todo/>
//   const active = screen.getByTestId("active");
//   fireEvent.click(active);
//   expect(active).toHaveTextContent("");

// });
test('Renders the button component without crashing', () => {
  render(<button/>);
});
// test('Renders active button correctly', () => {
//   render(<button/>);
//  let actvbutton=screen.queryByTestId("active")
//  expect(actvbutton).toHaveTextContent(/active tasks$/i)
// })
// test('Matches snapshot', () => {
//   const tree = render(<button/>).toJSON();
//   expect(tree).toMatchSnapshot();
// })


