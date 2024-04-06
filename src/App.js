import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route}from"react-router-dom"
import Userlogin from './Components/User/Userlogin';

function App() {
  return (
    <BrowserRouter>
    <div>
     <Routes>
      <Route path='/Userlogin' element={<Userlogin/>}></Route>

     </Routes>
    </div>
    </BrowserRouter>
    );
}

export default App;
