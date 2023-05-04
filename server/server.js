const express = require("express");
const cors = require("cors");
const fs =require('fs')

const movies  = require('../client1/public/movies.json')

const app = express();
app.use(cors({
	origin : 'http://localhost:3000'
}))



app.get('/api/movies' ,(req ,res) =>{

	res.json(movies)

})
const port = 5000;
app.listen(port, () => console.log(`Listenting on port ${port}...`));