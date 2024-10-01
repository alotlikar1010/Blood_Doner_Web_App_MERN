const mongoose = require("mongoose")




const connectDB = async() =>{
    try{

        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to Mongodb Database`)

    }
    catch(err){
        console.log(`Mongo db Error`)
    }
}

module.exports = connectDB;