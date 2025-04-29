//Lakalaka Laka
//Information Technology, Arizona State University
//IFT 458: Middleware Prog & Database Sec
//Professor: Dinesh Sthapit
//Due Date: May 2, 2025
//Lakalaka_9231-403_Module8 Final Project: Git with VScode

// Required for Node to read .env file
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

// required for communicating and connecting to the database
// and perform CRUD operations
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const bookRoutes = require('./routes/bookRoutes');

// required for the application to run
const app = require('./app');
// Connect to the database and replace the password
const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

// Connect to the database
//console.log(DB); // check the database connection string
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    //useCreateIndex: true,
    //useFindAndModify: false
  })
  .then(() => {
    console.log('✅ DB connection successful!🚀')
  })
  .catch(err => {
    console.log('❌ DB connection failed!🚨!');
    console.log(err); 
  });

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
  console.log(`To test the IFT 458 REST App Click Or Type: http://localhost:${port}...`);
});

