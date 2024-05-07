import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route}from"react-router-dom"
import Userlogin from './Components/User/Userlogin';
import Navbar from './Components/User/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Register from './Components/User/Register'
import UserView from './Components/User/UserView';
import Petshophomepage from './Components/User/Petshophomepage';





function App() {
  return (
    <BrowserRouter>
    <div>
     <Routes>
      <Route path='/Userlogin' element={[<Navbar/>,<Userlogin/>]}/>
      <Route path='/Loginnavbar'element={<Navbar/>}/>
      <Route path='/Registerationpage' element={<Register/>}></Route>
      <Route path='/User' element={<UserView/>}></Route>
      <Route path='/homepage' element={<Petshophomepage/>}></Route>



    

     </Routes>
    </div>
    </BrowserRouter>
    );
}

export default App;
