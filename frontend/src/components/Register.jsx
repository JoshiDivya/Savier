import { Box, Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import Login from './Login'

const Register = () => {
  const [uName, setUserName] = useState("");
  const [email, setEmailId] = useState("");
  const [pwd, setPassword] = useState("");
  const [cPwd, setCPwd] = useState("");
  const [status,setStatus] = useState(false);

  const handleSubmit = () => {
   
    Axios.post("http://localhost:3002/signup", {
      userName: uName,
      emailId: email,
      password: pwd,
    }).then((res)=>{if(res.status=== 200){
        window.alert("signup successfully");
        setStatus(true);
    }});
  };

  return (
    <>
     {status ? <Login/> : 
    <div className="login-div">
      <div className="login-form">
        <Box
          style={{ margin: "20px", "&:hover": { backgroundColor: "grey" } }}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          autoComplete="off"
        >
          <h3>Signup</h3>
          <FormControl>
            <TextField
              onChange={(e) => setUserName(e.target.value)}
              required
              value={uName}
              id="outlined-basic"
              label="username"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setEmailId(e.target.value)}
              required
              value={email}
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />

            <TextField
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              value={pwd}
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
            <TextField
              required
              onChange={(e)=>setCPwd(e.target.value)}
              type="password"
              id="outlined-basic"
              value={cPwd}
              label="Confirm Password"
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
              Signup
            </Button>
            <p
              style={{
                fontSize: "0.8rem",
                justifySelf: "right",
                color: "black",
              }}
            >
              Already User?
              <Link to="/login">Login Here</Link>
            </p>
          </FormControl>
        </Box>
      
      </div>
    </div>
     }
    </>
  );
            
};

export default Register;
