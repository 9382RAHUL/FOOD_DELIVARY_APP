// const mongoose = require("mongoose");
// const mongoURI =
//   "mongodb+srv://rahulmodak492:Rahul@food.bck8s23.mongodb.net/gofoodmern?retryWrites=true&w=majority";

// const mongoDB = async () => {
//   mongoose
//     .connect(mongoURI, {
//       useUnifiedTopology: true,
//     })

//     .then(() => console.log("connected")
    
//     )
//     const fetched_data=await mongoose.connection.db.collection("sample");
//   fetched_data.find({}).toArray(function(err,data){
//     if(err){
//       console.log(err);
//     }
//     else{
//       console.log(data);
//     }
//   })

//     .catch((err) => {
//       console.log(err);
//     }
    
//     );
// };

// module.exports = mongoDB;


const mongoose = require("mongoose");
const mongoURI =
  // "mongodb+srv://rahulmodak492:Rahul@food.bck8s23.mongodb.net/gofoodmern?retryWrites=true&w=majority";
  "mongodb://rahulmodak492:Rahul@ac-jl8ji6j-shard-00-00.bck8s23.mongodb.net:27017,ac-jl8ji6j-shard-00-01.bck8s23.mongodb.net:27017,ac-jl8ji6j-shard-00-02.bck8s23.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-kwrmzo-shard-0&authSource=admin&retryWrites=true&w=majority"

// const mongoDB = async () => {
//   try {
//     await mongoose.connect(mongoURI, {
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB");

//     const fetched_data = await mongoose.connection.db.collection("sample");
//     fetched_data.find({}).toArray(async function (err, data) {
//       if (err) {
//         console.log(err);
//       } else {
//        global.sample=data;
//        console.log(global.sample);
//       }
//     });
//   } catch (err) {
//     console.error("Error connecting to MongoDB:", err);
//   }
// };


async function connectToDB() {
    try {
        await mongoose.connect(mongoURI, {
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
    }
}

async function fetchData() {
    try {
        const fetched_data = await mongoose.connection.db.collection("sample");
        const data = await fetched_data.find({}).toArray();
        const food_category=await mongoose.connection.db.collection("foodcategory");
        let cat_data = await food_category.find({}).toArray();
        global.sample = data;
        global.food_category=cat_data;
        // console.log(global.food_category);
        // console.log(global.sample);
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
}

(async () => {
    await connectToDB();
    await fetchData();
})();

// module.exports = mongoDB;
module.exports = (connectToDB,fetchData);

