const express = require("express");
const  ReviewDetails = require("../models/Reviews");
//const { JsonWebTokenError } = require("jsonwebtoken");
//const jwtAuth = require("../middleware/jwtAuth")

const router = express.Router(); // to handle the routes in node js

router.get("/", (req,res)=>{
    res.send("This is  API Routes Page")
})


// all reviews
router.get("/Reviews", async (req, res) => {
    try{
    const allReviews = await ReviewDetails.find({});
    res.json({ Reviewguru: allReviews });
}catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

//review details
router.post("/ReviewDetails", async (req, res) => {
    try {
      const {
        title,
        email,
        category,
        company_logo_url,
        add_review: [{ rating, time, name, description, review }],
        review_count,
        comment,
      } = req.body;
  
      const newUser = new ReviewDetails({
        title,
        email,
        category,
        company_logo_url,
        add_review: [{ rating, time, name, description, review }],
        review_count,
        comment,
      });
  
      await newUser.save(); // Save to MongoDB collections
      const isUserExist = await ReviewDetails.findOne({ time: time });
      if (isUserExist) {
         return res.status(400).send({message:"User already reviewd"});
       }
  
      newUser.save(); //saving to mongodb collections
      return res.status(201).send({ message:"Review added successfully"});
    }
    catch (e) {
      console.log(e.message);
      res.send("internal server error");
    }
  });

//indivudual reviews api

router.get("/Reviews/:id",async(req,res)=>{
    const {id} = req.params;
    console.log(id)
    const Reviews = await ReviewDetails. findOne({_id:id});
    res.json({Reviewguru:Reviews})

   
})

// category reviews api
router.get("/categories/:category", async (req, res) => {
    const { category } = req.params;

    try {
        const reviewsInCategory = await ReviewDetails.find({ category });
        
        if (!reviewsInCategory || reviewsInCategory.length === 0) {
            return res.json({ message: "No reviews found in the specified category" });
        }

        res.json({ reviewsInCategory });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
// Get all categories
router.get("/categories", async (req, res) => {
    try {
        const categories = await ReviewDetails.distinct("category");
        res.json({ categories });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


module.exports = router;