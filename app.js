const express = require('express');
const app = express();


app.listen(3000, () =>{

console.log('API up and running');

});

//routes
app.get('/api', (req, res) => {

    res.send('API up and running');
});

//send request
app.post('/api/users', (req, res) =>{

    
});


