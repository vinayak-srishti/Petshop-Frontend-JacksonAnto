
import './App.css';
import{BrowserRouter,Routes,Route}from"react-router-dom"
import Userlogin from './Components/User/Userlogin';
import Navbar from './Components/User/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
 import Register from './Components/User/Register'
import Petshoplogin from './Components/Petshop-folder/Petshoplogin';
import Petshopreg from './Components/Admin/Petshopreg';
import Petshophomepage from './Components/User/Petshophomepage';
// import Userloginnabbar from './Components/User/Userloginnabbar'
import PetShopAdminLogin from './Components/User/PetshopAdminlogin';
import DashBoard from './Components/User/DashBoard';
import   Petshopreq  from './Components/User/Petshopreq';
import PetshopUserHompePage from './Components/Petshop-folder/PetshopUserHompePage';
import PetShopNavBar from './Components/User/PetShopNavBar';
import About from './Components/User/About';




function App() {
  return (
    <BrowserRouter>
    <div>
     <Routes>
      {/* user */}
      <Route path='/Userlogin' element={[<Userlogin/>]}/>
      <Route path='/Loginnavbar'element={<Navbar/>}/>
      <Route path='/Registerationpage' element={<Register/>}></Route>
      <Route path='/petshophomepage' element={<Petshophomepage/>}></Route>
      <Route path='adminlogin' element={<PetShopAdminLogin/>}></Route>
      <Route path='admindash' element={<DashBoard/>}></Route>
      <Route path='petshopuserhomepage' element={<PetshopUserHompePage/>}></Route>
      <Route path='petshopnavbar' element={<PetShopNavBar/>}></Route>
      <Route path='about' element={<About/>}></Route>

      {/* <Route path='/petss' element={<Viewpets/>}/> */}
      {/* <Route path='forgetpassword' element={<Forget/>}/>
      <Route path='userloginnav' element={<Userloginnabbar/>}/>
      <Route path='profileview'element={<Profileview/>}/>
      <Route path='edituser' element={<Edituser/>}/>
      <Route path='buy'element={<Buy/>}/>
      <Route path='purchase'element={<Purchase/>}/>
      <Route path='dogpurchase'element={<Dogpurchase/>}/> 



    
    <Route path='/petlogin' element={<Petshoplogin/>}></Route>
    {/* {/ <Route path='/login' element={<Loginpet/>}></Route> */} 
    <Route path='/petregi' element={<Petshopreg/>}></Route>
    {/* <Route path='/homepage' element={<Petshophomepage/>}></Route> */}
    <Route path='/REGISTER' element={<Register/>}></Route>
    <Route path='/petshopreq' element={<Petshopreq/>}/><Route/>
    <Route path='/' element={<Petshoplogin/>}/><Route/>

   


   

   

     </Routes>
    </div>
    </BrowserRouter>
    );
}

export default App;
