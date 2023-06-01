import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Home from './Home'
import { Box, Button, Input, TextField } from "@mui/material";
import "./login.css";
import { Link } from "react-router-dom";
import Axios from 'axios'

const Login = () => {
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [status,setStatus] = useState(false);

  const handleSubmit = () => {
    Axios.post("http://localhost:3002/signin", { 
      emailId: email,
      password: password,
    }).then((res)=>{if(res.status=== 200){
        window.alert(res.data);
        setStatus(true);
    }});
  };

  return (
<>{status ? <Home/> : 

    <div className="login-div">
      <div className="login-form">
      <Box
      style={{ margin: "20px", "&:hover": { backgroundColor: "grey" } }}         
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          autoComplete="off"
        >
        <h3 >Login</h3>
          <FormControl>
            <TextField
              required
              onChange={(e)=>setEmail(e.target.value)}
              id="outlined-basic"
              value={email}
              label="Email"
              variant="outlined"
            />

            <TextField
              required
              type="password"
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
            <Button
              style={{
                backgroundColor: "yellowgreen",
                "&:hover": { backgroundColor: "#7EB119" },
              }}
              onClick={handleSubmit}
              type="button"
              variant="contained"
              color="primary"
            >
              login
            </Button>
            <p style={{fontSize:'0.8rem',justifySelf:'right',color:'black'}}>Not registered yet? <Link to="/signup">Create account</Link></p>
          </FormControl>
        </Box>
      </div>
    </div>
}
    </>
  );
};

export default Login;
