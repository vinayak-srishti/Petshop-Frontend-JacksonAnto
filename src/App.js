
import './App.css';
import{BrowserRouter,Routes,Route}from"react-router-dom"
import Userlogin from './Components/User/Userlogin';
import Navbar from './Components/User/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
 import Register from './Components/User/Register'
import UserView from './Components/User/UserView';
import Petshoplogin from './Components/Petshop-folder/Petshoplogin';
import Petshopreg from './Components/Admin/Petshopreg';
import Petshophomepage from './Components/User/Petshophomepage';





function App() {
  return (
    <BrowserRouter>
    <div>
     <Routes>
      {/* user */}
       <Route path='/Userlogin' element={[<Userlogin/>]}/>
      {/* <Route path='/Loginnavbar'element={<Navbar/>}/>
      <Route path='/Registerationpage' element={<Register/>}></Route>
      <Route path='/User' element={<UserView/>}></Route>
      <Route path='/homepage' element={<Petshophomepage/>}></Route> */}
      {/* <Route path='/petss' element={<Viewpets/>}/> */}
      {/* <Route path='forgetpassword' element={<Forget/>}/>
      <Route path='userloginnav' element={<Userloginnabbar/>}/>
      <Route path='profileview'element={<Profileview/>}/>
      <Route path='edituser' element={<Edituser/>}/>
      <Route path='buy'element={<Buy/>}/>
      <Route path='purchase'element={<Purchase/>}/>
      <Route path='dogpurchase'element={<Dogpurchase/>}/>  */}


    {/* petshop */}
    <Route path='/petlogin' element={<Petshoplogin/>}></Route>
    {/* <Route path='/login' element={<Loginpet/>}></Route> */}
    <Route path='/petreg' element={<Petshopreg/>}></Route>
    <Route path='/homepage' element={<Petshophomepage/>}></Route>
    <Route path='/REGISTER' element={<Register/>}></Route>
   


   

    

     </Routes>
    </div>
    </BrowserRouter>
    );
}

export default App;
