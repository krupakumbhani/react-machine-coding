import data from "./data/data";
import { useState } from "react";
import './App.css';
import Folder from "./Components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";
function App() {
  const [Data, setData] = useState(data)
  const { insertNode, deleteNode } = useTraverseTree()
  const handleInsertNode = (Folderid, value, isFolder) => {
    const finaltree = insertNode(data, Folderid, value, isFolder)
    setData(finaltree)
  }
  const handleDelete = (Folderid) => {
    console.log(Folderid,"appp")
    const filteredData = deleteNode(Folderid)
    setData(filteredData)
  }
  return (
    <>
      <h1>
        File Explorer
        <Folder handleInsertNode={handleInsertNode} data={Data} handleDelete={handleDelete}/>
      </h1>
    </>
  );
}

export default App;
