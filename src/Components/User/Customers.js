import React from 'react'
import "../../Components/User/Customer.css"

function Customers() {
  return (
    <div className='customer'>
    <table className="customer-table">
     <thead>
       <tr>
         <th>S.No</th>
         <th>FristName</th>
         <th>LastName</th>
         <th>Email</th>
         <th>Mobile Number</th>
         <th>State</th>
         <th>Address</th>
         <th>Pin Code</th>
         <th>Payment type</th>            
         {/* <th>Card Number</th>            
         <th>Account Holder</th>            
         <th>Cvv</th>            
         <th>Expire Date</th>             */}

       </tr>
     </thead>
     <tbody>
       {/* {data.map((el,i)=>{
         return(
           <tr>
             <td>{i+1}</td>
             <td>{el.firstname}</td>
             <td>{el.lastname}</td>
             <td>{el.email} </td>
             <td>{el.contact} </td>
             <td>{el.state} </td>
             <td>{el.address}</td>                
             <td>{el.shopcode} </td>
             <td>{el.city} </td>
             <td><button type="submit" className="butaccept" >Accept</button></td>
             <td><button type="submit" className="butreject" >Reject</button></td>
           </tr>
         )
       })} */}
       
     </tbody>
   </table> 
    </div>
  )
}

export default Customers