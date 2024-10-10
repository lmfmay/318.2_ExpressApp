import express from "express";

//Initialize express inside of a variable.
const app = express()
const PORT = 3000;

//Server static files to be used by template
app.use(express.static('./styles'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

//extract form data
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const data = {
      title: 'Login Page',
      message: 'Please type your name and click the Login button to login'
    };
    res.render('index', data);
  });

//route parameter that modifies what is rendered to the client.
app.post('/user', (req, res) => {
    const userName = req.body.name;
    const data = {
      title: 'User Page',
      message: 'Here is your user profile!',
      user: `${userName}`
    };    
    res.render('user', data);
  });

app.get('/info', (req, res) => {
const data = {
    title: 'Info Page',
    message: 'Here is some information about what you can do!'
};

res.render('info', data);
});

//Listen for server
app.listen(PORT, ()=>{
    console.log(`Server is running on Port: ${PORT}`)
})
