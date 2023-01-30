import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


import { axiosClient } from '../../axiosClient'
import Button from '../UiNeeded/Button/Button'
import Input from '../UiNeeded/Input/Input'
import './Login.css'



const Login = () => {
  const navigate = useNavigate();
  const [authEmail, setauthEmail] = useState("")

  const [authPassWord, setauthPassWord] = useState("")

  // const [authname, setauthname] = useState("")
  // const [authConPassWord, setauthConPassWord] = useState("")

  const handleLogin = () => {
    const body = {
      email: authEmail,
      password: authPassWord,
    }
    axiosClient.post("login", body).then((res) => {
      if (res?.data?.token) {
        window.localStorage.setItem("token", res?.data?.token);
        navigate('users')
      }
    })


  }
  const handleInputhange = (e) => {

    const { name, value } = e.target;
    name==='auth-email'?setauthEmail(value):setauthPassWord(value);
  //  if( name === 'auth-email') 
  //        setauthEmail(value) 
  //        else if(name='auth-name')
  //        setauthname(value)
  //        else if(name==="auth-password")
  //         setauthPassWord(value);
  //         else{
  //           setauthConPassWord(value)
  //         }


  }

  return (
    <div className='Login-Container'>
      <div className='Login_body'>
        {/* <Input name='auth-name' label='Enter Name' value={authname} onChange={handleInputhange} /> */}
        <Input name='auth-email' label='Enter Email' value={authEmail} onChange={handleInputhange} />
        <Input name='auth-password' label='Enter Password' value={authPassWord} onChange={handleInputhange} />

        {/* <Input name='auth-Conpassword' label='Confirm Password' value={authConPassWord} onChange={handleInputhange} /> */}
        <Button disabled={!authEmail || !authPassWord} onClick={handleLogin} label='Login' />


      </div>
    </div>
  )
}

export default Login