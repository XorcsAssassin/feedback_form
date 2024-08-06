const express=require('express')
const cors=require ('cors')
const app=express()

const routes=require('./routes/routes')
const notFound=require('./routes/notFound')
const connectDB=require('./db/connect')
require('dotenv').config()

const port=5000

app.use(cors({
  origin: 'http://localhost:3000' // Replace with your frontend's URL
}));

app.use(express.static('./frontend/public'))
app.use(express.json())

app.use('/api',routes)

app.use('*',notFound)

const start=async()=>{
  try{
    await connectDB(process.env.Mongo_URI)
    app.listen(port,()=>console.log(`Server is listening to port ${port}...`))
  }
  catch(error){
    console.log(error)
  }
}
start()