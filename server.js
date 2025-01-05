const express = require('express');
const errorHndler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config() // Assuming you have a .env file with environment variables

connectDb();
const app = express();
const port = process.env.PORT || 5000;

// Routes are defined in a separate file (./routes/todoRoutes) for better organization
app.use(express.json());
app.use("/api/tasks", require("./routes/todoRoutes"));
//app.get('/api/tasks', (req, res) => {
  //  console.log('Received a GET request for /api/tasks'); // Log the request
   // res.json({ message: 'Hello from server!' }); 
  //});
app.use(errorHndler);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});