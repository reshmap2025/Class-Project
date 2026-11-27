import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  // const[email, setEmail] = useState("");
  // const[password, setPassword] = useState("");
  const location = useLocation();
  const [logindata, setLogindata] = useState({
    username:" ",
    password:" "
  })
  const navigate = useNavigate();
  function handlechange(e){
    e.preventDefault();
    setLogindata({
      ...logindata,
      [e.target.name]:e.target.value
  })
  }
  const formsubmit = (e) => {
    const registerdata = location.state
    e.preventDefault();
    console.log("Login data", logindata)
    console.log("Register data", registerdata)
    if(logindata.username===registerdata.name && logindata.password===registerdata.password){
      console.log("if success")
      navigate("/dashboard", {
        state: logindata
      })
    }else{
      console.log("Inavalid crendentials")
    }
  }
  return (
    <>
    {/* <input type="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
    <input type="password" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)} />
    <button type="submit" onClick={ console.log({ email, password })}>Submit</button>
    <button type="submit" onClick={() => print()}>Submit</button>
    */}
    <form onSubmit={formsubmit}>
      <input type="text" placeholder="Enter your username" required name="username" onChange={handlechange} />
      <input type="password" placeholder="Enter your password" required name="password" onChange={handlechange} />
      <button type="submit">Submit</button> 
    </form>
    </>
    );
}

export default Login;