import React, {useState, useEffect, useContext} from 'react';
import {Link, useHistory } from 'react-router-dom'
import Axios from "axios"

import {AuthContext} from "../../auth"
import "./Login.scss"


function Login(props) {

    let authContext = useContext(AuthContext)
    const [data, setData] = useState({role : "student"})
    const [isSend, setIssent] = useState(false)
    let history = useHistory()
    useEffect(() => {
        console.log(data)
        authContext.login({role : "manager", token : "jghjkghjhgkjhgkghjkjghk"})
        console.log(authContext.isAuthenticated)
        // Axios.post("localhost:8080/login", data)
        // .then(res => {
        //     const resData = res.data
        //     if(resData.role == ""){ //dang nhap that bai
        //         console.log("login fail")

        //     } else { // thanh cong, luu Token vao cookie
        //         console.log("login success")
        //         // auth
                //set lai auth trong context
                //set lai role trong context
                //set lai token nua
        //     }
            
        // })
        // .catch(rej => {
        //     console.log("something wrong went login")
        //     //redirect
        // })
    }, [isSend])

    return (
        <div className="main">
            <h1>Login</h1>
            
            <div className="container">
                <div className="form">

                    <input 
                        type="text" 
                        placeholder="account"
                        onChange={e => setData({...data, account : e.target.value})}
                    ></input>
                    <br></br>
                    <input 
                        type="password" 
                        placeholder="password"
                        onChange={e => setData({...data, password : e.target.value})}
                    ></input>
                    <br></br>
                    <label>
                        Login as? {"  "}
                        <select
                            onChange={e => setData({...data, role : e.target.value})}
                        >
                            <option defaultValue={data.role} value="student">student</option>
                            <option value="teacher">teacher</option>
                            <option value="manager">manager</option>
                        </select>
                    </label>
                    <br></br>
                    <button onClick={() => setIssent(prev => !prev)}>Login</button>
                    <br></br>
                    <label>
                        Have no account? <Link to="/sign-up">Sign up here</Link>
                    </label>
                    <br></br>
                    <button onClick={() => history.push("/home")} >home</button>

                </div>
            </div>
        </div>
    );
}

export default Login;