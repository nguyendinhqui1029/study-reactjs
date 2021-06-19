import './App.css';
import ToDoList from './component/ToDoList/ToDoList';
import { Button } from '@material-ui/core'
import { useState } from 'react';
function App() {
  const [toDoList, setToDoList] = useState([{ id: 1, title: "Title 1", active: false }, { id: 2, title: "Title 2", active: false }, { id: 3, title: "Title 3", active: false }]);
  function itemClick(item) {
    item.active = true;
    setToDoList(toDoList);
    console.log(toDoList)
  }
  return (
    <div className="App">
      <ToDoList clickToItem={itemClick} listToDo={toDoList}></ToDoList>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
}

export default App;
