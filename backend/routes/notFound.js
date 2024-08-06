const express=require('express')
const router=express.Router()
const notFound=require('../controllers/notfound')

router.route('/').get(notFound)

module.exports=router