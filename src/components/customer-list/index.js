import React,{useState}  from "react";
import "./index.css";
const customers=[{
    id:1,
    name:"Avii",
    isActive:true
  }]
function CustomerList() {
  const [CustomerList, setCustomerList]=useState(customers);
  const [name, setName]=useState("");
  const HandleChange=(e)=>{
    setName(e.target.value);
  }
const AddCustomers=()=>{
let input=name;
if(input && input !==""){
  setCustomerList(CustomerList.concat({
    id:CustomerList.length +1,
    name:input,
    isActive:true
  }))
}else{
  alert("Please Provide Proper Data....");
}
    alert("submit");
  }
  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" className="large" placeholder="Name" data-testid="app-input" onChange={HandleChange} value={name}/>
        <button type="submit" className="ml-30" data-testid="submit-button" onClick={AddCustomers}>Add Customer</button>
      </section>

      <ul className="styled mt-50" data-testid="customer-list">
          {
  CustomerList && CustomerList.length>0 && CustomerList.map((x,index)=>{
    return <li className="slide-up-fade-in" data-testid="list-item1" key={x.id} >{x.name}</li>
  })
}
      </ul>
    </div>
  );
}

export default CustomerList