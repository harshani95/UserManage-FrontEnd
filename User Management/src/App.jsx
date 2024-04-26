
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import UserOnboarding from './components/UserOnboarding';
import UserList from './components/UserList';

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/useronboarding' element={<UserOnboarding/>}></Route>
        <Route path='/userlist' element={<UserList/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
