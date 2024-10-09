import express from "express";

//Initialize express inside of a variable.
const app = express()
const PORT = 3000;

//Server static files to be used by template
app.use(express.static('./styles'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const data = {
      title: 'Home Page',
      message: 'Here is your user profile!',
      user: { name: 'John Doe' }
    };
    
    res.render('index', data);
  });

//Listen for server
app.listen(PORT, ()=>{
    console.log(`Server is running on Port: ${PORT}`)
})
