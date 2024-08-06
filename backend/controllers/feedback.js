const express = require('express');
const router = express.Router();
const { User, Product, Feedback } = require('../models/model'); // Import User and Product modelsS

// POST route to submit feedback for a product
const feedback=async(req,res)=>{
    const { prod_id } = req.params; // Extract productId from URL params
    const { customerId, name, address, no, rating, review } = req.body; // Extract data from request body

    try {
    // Check if customerId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(customerId)) {
      return res.status(400).json({ error: 'Invalid customerId' });
    }

    // Find the associated product in the database
    const product = await Product.findById(prod_id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    // Create a new feedback object
    const newFeedback = new Feedback({
      productId: prod_id,
      customerId,
      name,
      address,
      no,
      rating,
      review
    });
    
    // Save the feedback to the database
    await newFeedback.save();

    // Respond with success message
    res.status(201).json({ message: 'Feedback submitted successfully' });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = {feedback}
