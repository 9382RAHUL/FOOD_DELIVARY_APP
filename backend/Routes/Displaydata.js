const express=require("express");
const router=express.Router();

router.post("/fooddata",(req,res)=>{
    try{
        res.send([global.sample,global.food_category])

    }catch(err){
        console.error(err);
        res.send("server error");
    }
})
module.exports=router;