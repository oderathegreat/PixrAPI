const express = require('express');
const app = express();


app.listen(3000, () =>{

console.log('API up and running');

});

//routes
app.get('/api', () => {

    console.log('API up and running');


});



