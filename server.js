const express = require('express');
const app = express();

app.get('/api/emailList', (req, res) => {
    const emailList = [
        { id: 1, firstName: 'Ted', lastName: 'Steve', email: 'tedSteve@yahoo.com' }
    ];
    res.json(emailList);
})

const port = 5000;
app.listen(port, () => console.log('Server started at port 5000'));