// require('dotenc').config({path: './.env'});
import dotenv from 'dotenv';
import connectDB from './db/index.js';
// import { connect } from 'mongoose';

dotenv.config({
  path: './.env'
});



connectDB();









/*   // Middleware to parse JSON requests 
;( async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error is ",(error) => {
      console.log("Error : ",error);
      throw error;
    })

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    })

  } catch (error) {
    console.error('Error connecting to MongoDB: ', error);
    throw error;
  }
})();

*/