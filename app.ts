declare const require;
const express = require('express');
const app = express();
let port = process.env.PORT || 3000;
let counter:number = 0;

app.get('/',(req,res)=> {
   counter++;
   res.send('Yo! '+counter + ' Viewed this page');
});

app.get('/restart',(req,res)=> {
   counter = 0;
   res.send('Restarted counter')
});
app.listen(port);
console.log('Listening...');
