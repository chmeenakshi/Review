

const mongoose = require("mongoose");

const {schema} = mongoose;

  const add_reviewSchema = new mongoose.Schema({
    rating : Number,
    time:String,
    name:String,
    description:String,
    review:String
    
  })

 const reviewDetails = new mongoose.Schema({
    title: String,
    companyLogoUrl: String,
     rating: Number,
    location:String,
    category:String,
    reviewcount:String,
    comment:String,
    add_review:[add_reviewSchema],
    

   });

   const ReviewDetails = mongoose.model("ReviewGuru", reviewDetails);

   module.exports = ReviewDetails;