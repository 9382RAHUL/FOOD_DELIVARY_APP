const express = require("express");
const router = express.Router();
const Order=require('../models/Orders')
router.post('/orderData', async (req, res) => {
    let data = req.body.order_data
    await data.splice(0,0,{Order_date:req.body.order_date})
    
    let eId = await Order.findOne({ email: req.body.email })    
    console.log(eId)
    if (eId===null) {
        try {
            console.log(data)
           
            await Order.create({
                email: req.body.email,
                order_data:[data]
            }).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)

        }
    }

    else {
        try {
            await Order.findOneAndUpdate({email:req.body.email},
                { $push:{order_data: data} }).then(() => {
                    res.json({ success: true })
                })
        } catch (error) {
            console.log(error.message)
            res.send("Server Error", error.message)
        }
    }
})

router.post('/myorderData', async (req, res) => {
try {
    let myData=await Order.findOne({email:req.body.email})
    res.json({orderData:myData})
} catch (error) {
    res.send("Server Error", error.message)
}

// try {
//     // Validate the request body
//     if (!req.body.email) {
//         return res.status(400).json({ error: 'Email is required' });
//     }

//     const mydata = await Order.findOne({ email: req.body.email });
    
//     if (!mydata) {
//         return res.status(404).json({ error: 'Order not found for the provided email' });
//     }

//     res.json({ orderData: mydata });
// } catch (error) {
//     console.error('Error fetching order data:', error);
//     res.status(500).json({ error: 'Server Error' });
// }
})

module.exports=router;



// const express = require("express");
// const router = express.Router();
// const Order = require('../models/Orders');

// router.post('/orderData', async (req, res) => {
//     try {
//         let data = req.body.order_data;
//         // let eml=req.body.email;
//        await data.unshift({ Order_date: req.body.order_date });
//         // eml.unshift({ emal: req.body.email });

//         let existingOrder = await Order.findOne({ 'email': 'req.body.email' });

//         if (!existingOrder) {
//             await Order.create({
//                 'email': 'req.body.email',
//                 order_data: [data]
//             });
//         } else {
//             await Order.findOneAndUpdate(
//                 { email: req.body.email },
//                 { $push: { order_data: data } }
//             );
//         }

//         res.json({ success: true, message: "Order data saved successfully" });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ success: false, message: "Server Error", error: error.message });
//     }
// });

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const Order = require('../models/Orders');
// const validator = require('validator');

// router.post('/orderData', async (req, res) => {
//     try {
//         // Validate email
//         if (!validator.isEmail(req.body.email)) {
//             return res.status(400).json({ success: false, message: "Invalid email address" });
//         }

//         let data = req.body.order_data;
//         data.unshift({ Order_date: req.body.order_date });

//         let existingOrder = await Order.findOne({ email: req.body.email });

//         if (!existingOrder) {
//             await Order.create({
//                 email: req.body.email,
//                 order_data: [data]
//             });
//         } else {
//             await Order.findOneAndUpdate(
//                 { email: req.body.email },
//                 { $push: { order_data: data } }
//             );
//         }

//         res.json({ success: true, message: "Order data saved successfully" });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ success: false, message: "Server Error", error: error.message });
//     }
// });

// module.exports = router;
