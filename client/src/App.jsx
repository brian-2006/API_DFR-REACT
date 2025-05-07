import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import TaskPage from './pages/TaskPage'
import TaskFormPage from './pages/TaskFormPage'

function App() {


  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path='/' element= {<Navigate to= '/tasks'/>}/>
          <Route path='/tasks' element= {<TaskPage/>}/>
          <Route path='/tasks-create' element= {<TaskFormPage/>}/>
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
