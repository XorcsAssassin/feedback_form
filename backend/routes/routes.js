const express=require('express')
const router=express.Router()
const {login, register}=require('../controllers/auth')
const {profile, updateProfile}=require('../controllers/profile')
const {getAllProducts,getProduct,updateProduct,deleteProduct,getImgProd,newProduct,ProdImgs}=require("../controllers/product")
const {feedback}=require("../controllers/feedback")
const {}=require("../controllers/product")

router.route('/reg').post(register)
router.route('/login').post(login)

router.route('/imgprod').get(getImgProd)
router.route('/prodImgs').get(ProdImgs)
router.route('/profile').get(profile).patch(updateProfile)

//to be modified
router.route('/getAllProducts').get(getAllProducts)
router.route('/dash_sales').post(newProduct)
router.route('/dash_sales/:prod_id').get(getProduct).patch(updateProduct).delete(deleteProduct)

router.route('./dash_cust/:prod_id').get(getProduct).post(feedback)

module.exports=router