import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/mainLayout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import ContactSingle from './pages/ContactSingle';
import User from './pages/User';
import UserSingle from './pages/UserSingle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route index element={<Home/>}/>

          <Route path='contact'>
            <Route index element={<Contact/>}/>
            <Route path=':id' element={<ContactSingle/>}/>
          </Route>

          <Route path='user'>
            <Route index element={<User/>}/>
            <Route path=':id' element={<UserSingle/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
