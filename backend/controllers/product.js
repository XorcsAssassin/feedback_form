const {Product}=require('../models/model')

const newProduct=async(req,res)=>{
  try{
    const product= Product.create(req.body);
    res.status(201).json({product})
  }
  catch(error){
    res.status(500).json({mssg:error})
  }
}

const getProduct=async(req,res)=>{
  try{
    const product=await Product.findById(req.params.id).select('-password')
    if(!product){
      return res.status(404).json({mssg:`No product with id:${prodID}`})
    }
    res.json(product)
  }
  catch(error){
    res.status(500).send(`Server Error: ${error}`)
  }
}

const updateProduct=async(req,res)=>{
  try{
    const {id: prodID}=req.params

    const product=await Product.findOneAndUpdate({_id:productID},req.body,{new:true, runValidators:true})
    if(!product){
      return res.status(404).json({mssg:`No product with id:${prodID}`});
    }
    res.json(product)
  }
  catch(error){
    res.status(500).send(`Server Error: ${error}`)
  }
}

const deleteProduct=async(req,res)=>{
  try{
    const {id:prodID}=req.params
    const product=await Product.findOneAndDelete({_id:prodID})    //deletes item from database but stores it in the variable assigned 
    if(!product)
      return res.status(404).json({mssg: `No task with id: ${prodID}`})
    //since delete option doesn't in general ask for the deleted value, other options for successful deletion...
    //res.status(200).send()
    res.status(200).json({product})
    // res.status(200).json({task:0, status:'success'})
  }
  catch(error){
    res.status(500).send(`Server Error: ${error}`)
  }
}

const getImgProd=async(req,res)=>{
  try {
    const products = await Product.find({ imageUrl: { $exists: true, $ne: null } })
      .limit(5) // Limit to 5 products
      .select('imageUrl'); // Select only imageUrl field
  
    if (!products) {
      return res.status(404).json({ message: 'No products with images found' });
    }
    console.log(products)
    res.json(products);
  } catch (error) {
    console.error('Error fetching product images:', error);
    res.status(500).json({ message: 'Failed to fetch product images' });
  }
}

const ProdImgs=async(req,res)=>{
  try {
    const products = await Product.find();
    const firstSet = products.slice(0, 4);
    const secondSet = products.slice(4, 8);
    res.json({ firstSet, secondSet });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const getAllProducts=async(req,res)=>{
  try{
    const products=await Product.find()
    res.status(200).json(products)
  }
  catch(error){
    res.status(500).send(`Server Error: ${error}`)
  }
}

module.exports={
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  getImgProd,
  newProduct,
  ProdImgs
}

/* For New Product Use
    const imageUrl = req.file.path; // Assuming storing image path
    { imageUrl: imageUrl },
*/