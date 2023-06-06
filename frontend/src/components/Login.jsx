import React, { useContext, useState } from "react";
import FormControl from "@mui/material/FormControl";
import Home from "./Home";
import { Box, Button, Input, TextField } from "@mui/material";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import { UserContext } from "../contexts/UserContext";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);
  const [user, setUser] = useState("");
  const navigate = useNavigate();
  const { setLoggedInUsername } = useContext(UserContext);

  const url = "http://localhost:3002/signin";

  const params = {
    emailId: email,
    password: password,
  };
  const config = {
    params: params,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  const handleSubmit = () => {
    Axios.post(url, null, config)
      .then((response) => {
        // Handle response
        let name = response.data.userName;
        setStatus(true);
        setLoggedInUsername(name);
        navigate("/home");
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    //  <>{status ? <UserContext.Provider value={{userName: user}}><Home/></UserContext.Provider>  :

    <div className="login-div">
      <div className="login-form">
        <Box
          style={{ margin: "20px", "&:hover": { backgroundColor: "grey" } }}
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          autoComplete="off"
        >
          <h3>Login</h3>
          <FormControl>
            <TextField
              required
              onChange={(e) => setEmail(e.target.value)}
              id="uEmail"
              value={email}
              label="Email"
              variant="outlined"
            />

            <TextField
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              id="uPassword"
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
            <p
              style={{
                fontSize: "0.8rem",
                justifySelf: "right",
                color: "black",
              }}
            >
              Not registered yet? <Link to="/signup">Create account</Link>
            </p>
          </FormControl>
        </Box>
      </div>
    </div>
    // }
    //     </>
  );
};

export default Login;
