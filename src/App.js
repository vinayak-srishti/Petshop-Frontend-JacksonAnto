import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Userlogin from "./Components/User/Userlogin";
import Navbar from "./Components/User/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Register from "./Components/User/Register";
import Profileview from "./Components/User/Profileview";
import Petshoplogin from "./Components/Petshop-folder/Petshoplogin";
import Petshopreg from "./Components/Admin/Petshopreg";
import Petshophomepage from "./Components/User/Petshophomepage";
// import Userloginnabbar from './Components/User/Userloginnabbar'
import PetShopAdminLogin from "./Components/User/PetshopAdminlogin";
import Forget from "./Components/User/Forget";
import DashBoard from "./Components/User/DashBoard";
import Petshopreq from "./Components/User/Petshopreq";
import PetshopUserHompePage from "./Components/Petshop-folder/PetshopUserHompePage";
import PetShopNavBar from "./Components/User/PetShopNavBar";
import About from "./Components/User/About";
import Addpets from "./Components/Petshop-folder/Addpets";
import Dogview from "./Components/Petshop-folder/Dogview";
import Mainhomepage from "./Components/Mainhomepage";
import Nopage from "./Components/Nopage";
import Navbar2 from "./Components/Navbar2";
import MainNavbar from "./Components/MainNavbar";
import AddCart from "./Components/Petshop-folder/AddCart";
import "remixicon/fonts/remixicon.css";
import Buy from "./Components/User/Buy";
import Order from "./Components/Order";

import Edituser from "././Components/User/Edituser";

import Vieworder from "./Components/User/Vieworder";
import Customers from "./Components/User/Customers";
import Viewalluser from "./Components/Admin/Viewalluser";
import Viewallproducts from "./Components/Admin/Viewallproducts";
import Purchase from "./Components/User/Purchase";
import Dashboard from "./Components/User/DashBoard";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Dashboard /> */}
        <Routes>
          {/* user */}
          <Route path="/" element={<Mainhomepage />} />
          <Route />

          <Route path="/*" element={<Nopage />} />
          <Route path="/Userlogin" element={[<Userlogin />]} />
          <Route path="/Loginnavbar" element={<Navbar />} />
          <Route path="/Registerationpage" element={<Register />}></Route>
          <Route path="/petshophomepage" element={<Petshophomepage />}></Route>
          <Route path="adminlogin" element={<PetShopAdminLogin />}></Route>
          <Route path="admindash" element={<DashBoard />}></Route>

          <Route path="petshopnavbar" element={<PetShopNavBar />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="addpet" element={<Addpets />}></Route>
          <Route path="/dogview/:id" element={<Dogview />}></Route>
          <Route path="/addcart" element={<AddCart />}></Route>

          {/* <Route path='purchase'element={<Purchase/>}/> */}
          {/* <Route
            path="/petshopuserhomepage"
            element={<PetshopUserHompePage />}
          ></Route> */}
          {/* <Route path='dogpurchase'element={<Dogpurchase/>}/>  */}
          {/* <Route path='/petss' element={<Viewpets/>}/> */}
          {/* />
      <Route path='userloginnav' element={<Userloginnabbar/>}
    <Route path='/petlogin' element={<Petshoplogin/>}></Route>
    {/* {/ <Route path='/login' element={<Loginpet/>}></Route> */}
          {/* <Route path='/homepage' element={<Petshophomepage/>}></Route> */}

          <Route path="/petregi" element={<Petshopreg />}></Route>
          <Route path="/REGISTER" element={<Register />}></Route>
          <Route path="/petshopreq" element={<Petshopreq />} />
          <Route />
          <Route path="profileview" element={<Profileview />} />
          <Route path="navbar2" element={<Navbar2 />} />
          <Route path="petshoplogin" element={<Petshoplogin />} />
          <Route path="mainnavbar" element={<MainNavbar />} />
          <Route path="/purchaseproduct/:id" element={<Buy />} />
          <Route path="order" element={<Order />} />
          <Route path="forgetpassword" element={<Forget />} />

          <Route path="edituser" element={<Edituser />} />

          <Route path="vieworder" element={<Vieworder />} />
          <Route path="customer" element={<Customers />} />
          <Route path="viewalluser" element={<Viewalluser />} />
          <Route path="viewallproduct" element={<Viewallproducts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
