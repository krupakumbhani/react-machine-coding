import { useState } from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';


function App() {
  const [sharedData, setSharedData] = useState(null);
  const updateSharedData = (newData) => {
    setSharedData(newData);
  };
  return (
 <>
 <h1>To-Do using Redux</h1>
 <AddTodo  sharedData={sharedData}/>
 <Todo sharedData={sharedData} updateSharedData={updateSharedData}/>
 </>
  );
}

export default App;
