import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import RequireAuth from './Pages/Login/RequireAuth'
import RequireAdmin from './Pages/Login/RequireAdmin'
import Parches from './Pages/Parches/Parches';
import Users from './Pages/Dashboard/Users';
import Dashboard from './Pages/Dashboard/Dashboard';


function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/parses/:id' element={
          <RequireAuth><Parches /></RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          {/* <Route path='/dashboard/appointment' element={<MyAppoinment />}></Route>
          <Route path='myReview' element={<MyReview />}></Route> */}
          <Route path='users' element={<RequireAdmin><Users /></RequireAdmin>}></Route>
          {/* <Route path='doctors' element={<RequireAdmin><AddDoctors /></RequireAdmin>}></Route>
          <Route path='managedoctor' element={<RequireAdmin><ManageDoctor /></RequireAdmin>}></Route> */}
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
