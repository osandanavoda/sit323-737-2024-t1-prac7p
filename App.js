//SIT323, Task 4.2C, (S223312715), Osanda Navoda Dharmasiri

const express = require('express');   //import the Express.js framework into Node.js application 
const app = express();   //creating new Express Application


const PORT = process.env.PORT || 3040;    //Define Port
app.listen(PORT, () => {                               //Start Sever 
  console.log(`Server is running on port ${PORT}`);
});

app.get('', (req,res)=>{       //Defines a route
  res.sendFile(__dirname+"/index.html")     //Connecting the HTML file
})




// Endpoint for addition
app.get('/add', (req, res) => {

  //retrieves the query parameters from the request object
  const numb1 = parseFloat(req.query.numb1);
  const numb2 = parseFloat(req.query.numb2);

  //Input Validation
  if (isNaN(numb1) || isNaN(numb2)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers' }); //this error displays when If user provides non-numeric values
  }

  //Calculation 
  const result = numb1 + numb2;
  res.json({ result });
});




// Endpoint for subtraction
app.get('/subtract', (req, res) => {

  //retrieves the query parameters from the request object
  const numb1 = parseFloat(req.query.numb1);
  const numb2 = parseFloat(req.query.numb2);

   //Input Validation
  if (isNaN(numb1) || isNaN(numb2)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers' });   //this error displays when If user provides non-numeric values
  }

  //Calculation
  const result = numb1 - numb2;
  res.json({ result });
});




// Endpoint for multiplication
app.get('/multiply', (req, res) => {

  //retrieves the query parameters from the request object
  const numb1 = parseFloat(req.query.numb1);
  const numb2 = parseFloat(req.query.numb2);

  //Input Validation
  if (isNaN(numb1) || isNaN(numb2)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers' });  //this error displays when If user provides non-numeric values
  }

  //Calculation
  const result = numb1 * numb2;
  res.json({ result });
});





// Endpoint for division
app.get('/divide', (req, res) => {

  //retrieves the query parameters from the request object
  const numb1 = parseFloat(req.query.numb1);
  const numb2 = parseFloat(req.query.numb2);

  //Input validation 
  if (isNaN(numb1) || isNaN(numb2)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers' });  //this error displays when user provides non-numeric values
  }


  if (numb2 === 0) {
    return res.status(400).json({ error: 'Cannot divide by zero' });  //this error displays when user try to divide some value by zero
  }

  //Calculation 
  const result = numb1 / numb2;
  res.json({ result });
});




// Endpoint for modulo 
app.get('/modulo', (req, res) => {
  const numb1 = parseFloat(req.query.numb1);
  const numb2 = parseFloat(req.query.numb2);

  //Input validation 
  if (isNaN(numb1) || isNaN(numb2)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers' });    //this error displays when user provides non-numeric values
  }

  if (numb2 === 0) {
    return res.status(400).json({ error: 'Cannot perform by zero' });    //this error displays when user try to perform some value by zero
  }


  //Calculation
  const result = numb1 % numb2;
  res.json({ result });
});




// Endpoint for exponentiation
app.get('/exponentiate', (req, res) => {
  const numb1 = parseFloat(req.query.numb1);
  const numb2 = parseFloat(req.query.numb2);

  //Input Validation 
  if (isNaN(numb1) || isNaN(numb2)) {
    return res.status(400).json({ error: 'Parameters must be valid numbers' });    //this error displays when user provides non-numeric values
  }

  //Calculation 
  const result = Math.pow(numb1, numb2);
  res.json({ result });
});




// Error handling middleware function
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});


