const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/public')));

app.post("/signup", function (req, res) {
    var firstname = req.body.firstname;
    var lastname = request.body.lastname;
    var email = request.body.email;
    console.log("Post Received: %s %s %s", firstname, lastname, email);
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);