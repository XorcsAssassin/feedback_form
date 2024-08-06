import axios from 'axios';

const backendUrl = 'http://localhost:5000';

const axiosInstance = axios.create({
  baseURL: `${backendUrl}/api`,
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const registerUser = async (userData) => {
  try {
    console.log("Sending registration request with:", userData);
    const response = await axiosInstance.post('/reg', userData);
    console.log("Received registration response:", response);
    return response.data;
  } catch (error) {
    console.error("Error during registration request:", error);
    throw error;
  }
};


export const loginUser=async(userData)=>{
  try{
    const response=await axiosInstance.post('/login',userData)
    return response.data
  }
  catch(error){
    throw error
  }
}

export const fetchUser=async(token)=>{
  try{
    const response= await axiosInstance.get('/profile',{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  }
  catch(error){
    throw error
  }
}

export const updateUser=async(userData, token)=>{
  try{
    const response=await axiosInstance.patch('/profile',userData,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    return response.data
  }
  catch(error){
    throw error
  }
}


export const fetchProduct=async()=>{
  try{
    const response=await axiosInstance.get('/getAllProducts')
    return response.data
  }
  catch(error){
    throw error
  }
}