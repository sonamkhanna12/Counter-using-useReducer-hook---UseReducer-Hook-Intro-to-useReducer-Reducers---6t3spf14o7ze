import React,{useReducer} from 'react'
import '../styles/App.css';
const initialState = { count: 0 };
// string constatnts
const ACTIONS = {
  DECREMENT: "decrement",
  INCREMENT: "increment",
};
// (currentState,actionObject)=> newState
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { count: state.count + 1 };
    case "delete":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div id="main">
      <h2>Task Counter</h2>
      <button onClick={() => dispatch({type: 'add'})} id="addTaskBtn">Add a task</button>
      <button onClick={() => dispatch({type: 'delete'})}  id="delTaskBtn">Delete a task</button>
      <button onClick={() => dispatch({type: 'deleteAll'})}  id="delAllTaskBtn">Delete all tasks</button>
      <h3 className="counter">Number of Tasks : {taskState.count}</h3>
    </div>
  )
}


export default App;
