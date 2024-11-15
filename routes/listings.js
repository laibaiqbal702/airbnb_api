const express = require('express');
const Listing = require('../models/Listing.js');
const router = express.Router();

// GET /api/listing - Fetch all listings
router.get('/listing', async (req, res) => {
    console.log("i ma in ")
  try {
    const listings = await Listing.find();  // Fetch all listings from the database
    console.log(listings)
    res.json(listings);  // Send the listings as JSON
  } catch (error) {
    console.error("Error fetching listings:", error);
    res.status(500).json({ error: 'An error occurred while fetching listings' });
  }
});

module.exports = router;