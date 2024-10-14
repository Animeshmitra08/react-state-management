import './App.css';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Userdata from './pages/Userdata';
import UserRegistration from './pages/UserRegistration';
import Dashboard from './pages/dashboard';
import Employee from './UserPages/Employee';
import Register from './UserPages/Register';
import Todo from './UserPages/Todo';
import ListProducts from './UserPages/ListProducts';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/userdata' element={<Userdata/>}/>
        <Route path='/userRegistration' element={<UserRegistration/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route index element={<Employee/>}/>
          <Route path='employee' element={<Employee/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='todo' element={<Todo/>}/>
          <Route path='products' element={<ListProducts/>}/>
        </Route>
        <Route path='*' element={<p>Page Not Found</p>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
