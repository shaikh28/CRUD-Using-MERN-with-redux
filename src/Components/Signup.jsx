import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {signUpUser} from '../redux/features/signUpSlice.js'
const Signup = () => {
    const dispatch = useDispatch()
    const {isLoading,userinfo,error} = useSelector((state)=>state.signup)
    const [formData, setformData] = useState({
        name:"",
        email:"",
        password:""
    })
    const handleOnChange = (e) =>{
       const {name , value} = e.target
       setformData({...formData,[name]:value})
    }
    const handleOnSubmit = (e) =>{
        e.preventDefault()
        dispatch(signUpUser(formData))
        console.log(formData);
    }

  return (
    <>
    <div className="container">
        <form onSubmit={handleOnSubmit}>
            <input type="text" name='name' value={formData.name} onChange={handleOnChange}  />
            <input type="text" name='email' value={formData.email} onChange={handleOnChange} />
            <input type="text" name='password' value={formData.password} onChange={handleOnChange} />
            <button type='button' disabled={isLoading} >{
                isLoading ? 'Signin Up...' :'Signup'
            }</button>
        </form>
        {userinfo && <p>Signup Successful Welcome !</p>}
        {error && <p>Error :{error}</p>}
    </div>
    </>
  )
}

export default Signup