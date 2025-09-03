import TopNavbar from './components/TopNavBar'
import CreateUser from './pages/CreateUser'
import UsersList from './pages/UsersList'
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
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
    </>
)}

export default App
