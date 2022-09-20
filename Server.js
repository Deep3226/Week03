const exp = require("express");
const app = exp();

app.listen(3000);

app.get('/home', (req, res) => {
    res.send('GET request to the homepage')
  })

