const express = require('express');
const app = express();
var cors = require('cors')
const port = process.env.PORT || 5000;
const datas = require('./data/datas.json');

app.use(cors());
app.get('/', (req, res) => {
    res.send('Server is running........')
});



app.get('/datas', (req, res) => {
    res.send(datas);
})



app.get('/datas/:id', (req, res) => {
    const id = (req.params.id);
    const selectedData = datas.find(n => n._id === id) || {} ;
    res.send(selectedData);
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})