import React from 'react'
import {BrowserRouter, Routes,Route} from "react-router-dom"
import Login from "./pages/auth/Login"
import SignUp from "./pages/auth/SignUp"
import Dashboard from './pages/admin/Dashboard'
import ManageTask from './pages/admin/ManageTask'
import ManageUser from './pages/admin/ManageUser'
import CreateTask from './pages/admin/CreateTask'
import PrivateRoute from './routes/PrivateRoute'
import UserDashboard from './pages/user/UserDashboard'
import MyTasks from './pages/user/MyTasks'
import TaskDetails from './pages/user/taskDetails'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Sign-Up' element={<SignUp />} />

        {/* admin routes */}
        <Route element ={<PrivateRoute allowedRoles = {["admin"]} />}>
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/task' element={<ManageTask />} />
        <Route path='/admin/users' element={<ManageUser />} />
        <Route path='/admin/create-task' element={<CreateTask />} />
        </Route>

        {/* user routes */}
        <Route element ={<PrivateRoute allowedRoles = {["user"]} />}>
        <Route path='/user/dashboard' element={<UserDashboard />} />
        <Route path='/user/task' element={<MyTasks />} />
        <Route path='/user/task-details/:id' element={<TaskDetails />} />
        
        </Route>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App