
import {BrowserRouter, Routes, Route} from "react-router-dom";
import TaskList from "./components/TaskList";

export default function App(){
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<TaskList />} />
      </Routes>
    </BrowserRouter>
  );
}