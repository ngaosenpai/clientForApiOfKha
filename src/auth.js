import React from "react"
import Axios from "axios"
class Auth{
    constructor(){
        this.isAuthenticated = false
        this.role = ""
        this.authAxios = Axios
    }
    login({role, token}){
        this.isAuthenticated = true;
        this.role = role
        this.authAxios = Axios.create({
            baseURL : "http://localhost:8080",
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
    }
    logout(){
        this.isAuthenticated = false;
        this.role = ""
        this.authAxios = Axios
    }
   
}
const auth = new Auth()

const AuthContext = React.createContext()

export { auth, AuthContext }
