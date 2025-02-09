const mongoose = require('mongoose');
// const mongoURI = "mongoURL";
const mongoURI ="mongodb://mongo_atlas_url" 
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Connected to MongoDB');
    const db = mongoose.connection.db;
    const fetched_data = db.collection("fooditems");
    const data = await fetched_data.find({}).toArray();
    global.fooditems=data;
    const fetched_data_2=db.collection("foodcategory");
     const data2=await fetched_data_2.find({}).toArray();
     global.foodcategory=data2;
   
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

module.exports = mongoDB; 