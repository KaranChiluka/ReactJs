import { useState } from 'react';
import './App.css';
import List from './components/List';

function App() {

  const [checked, setChecked] = useState(false);
  const array = ["mango","apple","banana"];
  const x = () =>{
    setChecked(!checked);
  }
  const [first,setFirst] = useState("enter the firstname");
  let y = (e) =>{
    setFirst(e.target.value);
  } 
  const [second,setSecond] = useState("enter the secondname");
  let z = (e) =>{
    setSecond(e.target.value);
  }
  const[email,setEmail] = useState("enter the email");
  let Email = (e) =>{
    setEmail(e.target.value);
  }

  
  
  
  return (
    <>
      <div className="App">
        <form className="Form">
          <p>
          <label>firstname: <input type = "text" onChange={y} value={first}/></label>
          {first}</p>
          <br/>
          <p>
          <label>lastname: <input type = "text" onChange={z} value ={second} /></label>
          {second}</p>
          <br/>
          <span className='check'><input type = "checkbox" value = {checked} onClick = {x}/><br/></span>
         
          {
            checked && (<p><label>Email: <input type = "email" onChange={Email} value = {email}/>{email}</label></p>)
          }
          
        </form>
      </div>
      <List arr ={array}/>
    </>
  );
}

export default App;
