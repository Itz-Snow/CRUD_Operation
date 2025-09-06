import TopNavbar from './components/TopNavBar'
import CreateUser from './pages/CreateUser'
import UsersList from './pages/UsersList'
import UserDetails from './pages/UserDetails'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';


function App() {
    return (
    <>
      <BrowserRouter >
      <header>
        <TopNavbar />
      </header>
        <Routes> 
          <Route path='/' element = {<CreateUser />} />
          <Route path='/users' element = {<UsersList />} />
          <Route path='/view' element = {<UserDetails />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
    </>
)}

export default App
