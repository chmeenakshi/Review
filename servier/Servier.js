const express = require("express");
const mongoose = require("mongoose");
const  ReviewDetails = require("./models/Reviews");
const cors = require("cors");
const Reviewguru = require("./models/Reviews");

const app = express();
const port = 4448|| process.env.PORT



const addReviews = async () => {
    try {
      const reviewDetail = new ReviewDetails({
       
      title:"Pizza hut ",
      category:"Food Sector",
      companyLogoUrl:"https://1000logos.net/wp-content/uploads/2017/05/Pizza-Hut-Logo-1999.j…",
     
           add_review:[
            {
              rating:"4.0",
              time:"15 min ago",
              name:"panvi",
              description:" The taste is ok ok,Salary is good and comes on time and fast home deli",
              review:"The taste is ok ok,Salary is good and comes on time and fast home deli "
            },
            {
                rating:"3.0",
                time:"5 min ago",
                name:"pallivi",
                description:" The taste is ok ok,Salary is good ",
                review:"The taste is ok ok,Salary is good  "
              },
              {
                rating:"4.4",
                time:"25 min ago",
                name:"kasi",
                description:" The taste is ok .",
                review:"The taste is ok  "
              }
      ],
      reviewcount:"35.0k",
      comment:" good food sector",
        
       
      });
  
      const savedRevieswDetail = await  reviewDetail.save(); // saceJobDetails._id
      // Create and save a Job document that uses the same _id as the JobDetail
  
     
  
  
      await reviewDetail.save();
      await mongoose.disconnect();
    } catch (e) {
      console.log(e);
    }
  };
  
                   // addReviews()

 app.use(cors())//middle ware to acces node environment in any origin
 app.use(express.json());//add middleware to parse the json d               

mongoose.connect('mongodb+srv://pavankalyan0571:pavankalyan@cluster0.zf0c6wi.mongodb.net/reviewguru?retryWrites=true&w=majority')
.then(()=>console.log('DB Connected'))
.catch((error)=>console.log(error))



//app.use("/auth", require("./routes/authRouters"));
app.use("/api", require("./routes/apiRoutes"));
app.listen(port,()=>console.log(`server running at ${port}`));