import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import TaskPage from './pages/TaskPage'
import TaskFormPage from './pages/TaskFormPage'
import Navigation from './Components/Navigation'

function App() {


  return (
    <>
       <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path='/' element= {<Navigate to= '/tasks'/>}/>
          <Route path='/tasks' element= {<TaskPage/>}/>
          <Route path='/tasks-create' element= {<TaskFormPage/>}/>
          <Route path='/tasks/:id' element= {<TaskFormPage/>}/>
          
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
