const express = require('express');
const cors = require('cors');
const Users = require('./routes/Users');

//Essa config serve para restriguir o endpoint que pode acessar essa API.
//const cors_config = { origin: process.env.API_URL}
const app = express();
//app.use(cors(cors_config));
app.use(cors());
app.use(express.json());

app.use('/user',Users);


app.listen(process.env.PORT, () => {
    console.log(`Server running in port: ${process.env.PORT}`);
});
