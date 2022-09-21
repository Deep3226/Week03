const exp = require("express");
const app = exp();
const path = require("path");
const bodyparser = require("body-parser");




app.listen(3000);


app.use(bodyparser.urlencoded({extended:true}));

app.get('/home', (req, res) => {
  console.log(__dirname);
    res.sendFile(path.join(__dirname, "home.html"));
  })



app.get('/', (req,res)=>{
  res.sendFile(path.join(__dirname, "login.html"));

  

})

app.use('/about_us', (req,res)=>{
  res.sendFile(path.join(__dirname, "AboutUs.html"));

})

app.get('/admin_dash', (req,res)=>{
  //res.sendFile(path.join(__dirname, "AboutUs.html"));

  var object = {username : "deep3226", password : "23456"}
  req.json(object);

  });


app.post('/user_login', (req,res)=>{

  var username = req.body.username;
  var password = req.body.password;
  res.send("Username:" + username +  " " + "Password:" + password);
  

})



app.get('/product/:id', (req,res) => {
  
  var product_id = req.params.id;

  res.send("Product ID: " + product_id);

});






