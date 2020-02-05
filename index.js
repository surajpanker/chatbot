//coding for backend app
const express= require('express');
const bodyParser = require('body-parser');//for 
const app= express();

app.use(bodyParser.json());


require('./routes/dialogFlowRoutes')(app);

const PORT =process.env.PORT||5000;
app.listen(PORT);