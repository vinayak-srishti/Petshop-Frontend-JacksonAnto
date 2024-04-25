import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route}from"react-router-dom"
import Userlogin from './Components/User/Userlogin';
import Navbar from './Components/User/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Register from './Components/User/Register'





function App() {
  return (
    <BrowserRouter>
    <div>
     <Routes>
      <Route path='/Userlogin' element={[<Navbar/>,<Userlogin/>]}/>
      <Route path='/Loginnavbar'element={<Navbar/>}/>
      <Route path='/Registerationpage' element={<Register/>}></Route>

    

     </Routes>
    </div>
    </BrowserRouter>
    );
}

export default App;
