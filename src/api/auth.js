import axios from './../axios-instance';


//login
export const login =  ( email, password ) => {
    return  axios.post(`/login`, {email, password} )
}