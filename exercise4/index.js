const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 4000;
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');
const productData = require('./data.json');

app.use(bodyParser.json());

app.use(cors());


//products table

let products = [{
    id: uuidv4(), 
    name: 'Lassi', 
    manufacturer: 'China',
    category: 'Toy',
    description: 'Animal',
    price: 29.99
}];

//user table

let user = [{
  id: uuidv4(), 
  firstname: 'Tuomas', 
  lastname: 'Lammassaari',
  address: 'Oulu',
  phone: '0407289909'
},];

//Invoice table

let invoices = [];


app.get('/', (req, res) => {
  res.send('Hello Product')
});


// GET all product

app.get('/products', (req, res) => {
    res.json(products);
});

//GET by id

app.get('/products/:id', (req,res) => {

    const result = products.find(product => product.id === req.params.id);

     res.json(result);

 });

 //GET by name

app.get('/name/:name/', (req,res) => {

    const resultName = products.find(n => n.name === req.params.name); 
    
     res.json(resultName);
     

 });


//GET by manufacturer

 app.get('/manufacturer/:manufacturer/', (req,res) => {

  const resultManufacturer = products.find(m => m.manufacturer === req.params.manufacturer); 
  
   res.json(resultManufacturer);
   

});


//GET by category

app.get('/category/:category/', (req,res) => {

  const resultCategory = products.find(c => c.category === req.params.category); 
  
   res.json(resultCategory);
   

});



 //POST new product

 app.post('/products', (req, res) =>{
     console.log('Creating new product');
     console.log(req.body);

     products.push({
        id: uuidv4(),
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        category: req.body.category,
        description: req.body.description,
        price: req.body.price 

    })

     console.log('product name: ' +req.body.name);
     res.send('product Created');
 });

 //DELETE product by id

 app.delete('/products/:id', (req, res) => {

    const result = products.findIndex(product => product.id === req.params.id);
    if(result !== -1){
    products.splice(result, 1);
    res.send('Delete success');
    }
    else{
     res.send('No such product found');
    }
 })


 //DELETE all products
 
 app.delete('/products', (req, res) =>{
    res.send('Delete all products');
});

//Update products
app.put('/products/:id', (req, res) => { 
  const id = req.params.id;
  const updatedproducts = {'id': id, ...req.body};
  const index = products.findIndex(product => product.id === req.params.id);
  products.splice(index, 1, updatedproducts); 

  res.send('Update success');
});


//============================================================
//=================  USER     ==================================


//Get user by id

app.get('/users/:id', (req,res) => {

  const result = user.find(user => user.id === req.params.id);

   res.json(result);

})


// GET all users

app.get('/users', (req, res) => {
  res.json(user);
});


 //POST new User

 app.post('/users', (req, res) =>{
  console.log('Creating new user');
  console.log(req.body);

  user.push({
    id: uuidv4(), 
    firstname: req.body.firstname, 
    lastname: req.body.lastname, 
    address: req.body.address, 
    phone: req.body.phone 
 })
  console.log('user name: ' +req.body.firstname);
  res.send('User Created');
});


//=========================================================================
//=========================Purchase========================================



//=========================invoice=========================================


// GET ALL
app.get('/invoices', (req, res) => {
  res.json(invoices);
});

//Get a single invoice of a user
app.get('/invoice/:invoiceId', (req,res) => {

  const result = invoices.find(invoice => invoice.invoiceId === req.params.invoiceId);

   res.json(result);
});


//* Get invoices by user
app.get('/invoices/:Id', (req,res) => {

  const result = invoices.filter(userId => userId.userId === req.params.Id);

   res.json(result);
});


//* Get single invoice by user
app.get('/invoices/:Id', (req,res) => {

  const result = invoices.find(userId => userId.userId === req.params.Id);

   res.json(result);
});


//* Delete invoice of a user

app.delete('/invoices/:id', (req, res) => {

  const result = invoices.findIndex(invoice => invoice.invoiceId === req.params.id);
  if(result !== -1){
  invoices.splice(result, 1);
  res.send('Delete success');
  }
  else{
   res.send('No such invoice found');
  }
})

//ADD invoice

app.post('/invoices/:id/', (req, res) => {
  const userId = user.find(d => d.id === req.params.id);

  if (userId !== undefined){
    console.log('Creating new invoice');
    console.log(req.body);
    invoices.push({
      userId: userId.id,
      invoiceId: uuidv4(),
      i1:  req.body.i1,
      i1p: req.body.i1p,
      i2: req.body.i2,
      i2p: req.body.i2p,
      i3: req.body.i3,
      i3p: req.body.i3p,
      total: req.body.i1p + req.body.i2p + req.body.i3p
    })
    res.send('invoice Created');
  }
  else
  {
    res.send('Not working, Error')
  }
})   


//=======Exercise5=========

app.use(cors());

app.get('/ex5', (req, res) => {
    res.json(productData);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})