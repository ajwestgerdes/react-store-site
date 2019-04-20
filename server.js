//Server file that runs our express server

const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const userSignup = require('./routes/api/signup');

const app = express();

//bodyparse middleware
app.use(bodyParser.json());

//mongoDB config (where the uri is held)
const mongodb = require('./config/keys').mongoURI;

//connect to mongodb
mongoose
    .connect(mongodb)
    .then(() => console.log('MongoDB Connected.....'))
    .catch(err => console.log(err));

//use routes
app.use('/api/signup', userSignup);

//serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
