import TopNavbar from './components/TopNavBar'
import CreateUser from './pages/CreateUser'
import UsersList from './pages/UsersList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
    return (
    <BrowserRouter >
    <header>
      <TopNavbar />
    </header>
      <Routes> 
        <Route path='/' element = {<CreateUser />} />
        <Route path='/users' element = {<UsersList />} />
      </Routes>
    </BrowserRouter>
)}

export default App
