const {User} = require('../models/model');
const jwt= require('jsonwebtoken')

const profile = async (req, res) => {
  const token=req.headers.authorization.split(' ')[1]
  try {
    const decode=jwt.verify(token, 'your jwt secret')
    console.log(decode)
    const user = await User.findById(decode.id);
    if (!user) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const updateProfile=async(req, res)=>{
  const token=req.headers.authorization.split(' ')[1]
  try{
    const decode=jwt.verify(token, 'your jwt secret')
    const user=await User.findById(decode.id)
    if(!user){
      return res.status(404).json({message: 'User not found'})
    }
    const {name, email, password, role}=req.body
    if(name) user.name=name
    if(email) user.email=email
    if(password) user.password=password
    if(role) user.role=role

    await user.save()
    res.json({message:'Profile updated successfully', user})
  }
  catch(error){
    res.status(500).json({message:'Server error', error})
  }
}
module.exports = {profile, updateProfile}
