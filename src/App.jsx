import Login from './pages/login'
import Welcome from './pages/welcome'
import { Route , Routes , BrowserRouter} from 'react-router-dom';

export default function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={ <Login/> }></Route>
        <Route path='/welcome' element={ <Welcome/> }></Route>
      </Routes>
    </BrowserRouter>
  );
}