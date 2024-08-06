import { useNavigate } from "react-router-dom"
import "./Profile.module.css"
import { useState, useEffect } from "react"
import {updateUser, fetchUser} from '../components/api'

function Profile(){
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [role, setRole]=useState('')

  const navigate=useNavigate()

  useEffect(()=>{
    const getUserData = async () => {
      try {
        const token = localStorage.getItem('token')
        if (token) {
          const userData = await fetchUser(token)
          setName(userData.name)
          setEmail(userData.email)
          setRole(userData.role)
        }
      }
      catch (error) {
        console.error('Error fetching user data:', error)
      }
    }
    getUserData()
  })

  const handleSubmit=async(event)=>{
    event.preventDefault()
    try{
      const token = localStorage.getItem('token')
      const userData={name, email, password, role}
      console.log(userData)
      const response=await updateUser(userData, token)
      console.log('User information succesfully updated: ', response)
      navigate('/SignIn')
    }
    catch(error){
      console.error('Update Error: '.error)
    }
  }
  return(
    <div className="container">
      <h2>Profile</h2>
      <form className="profileForm" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <label>
          Role:
          <input type="role" value={role} onChange={(e)=>setRole(e.target.value)}/>
        </label>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  )
}

export default Profile