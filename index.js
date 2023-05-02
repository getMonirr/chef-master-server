const express = require('express')
const cors = require('cors')

const app = express();
const port = 5000;

// use cors
app.use(cors())

// chef data
const chefs = require('./chefs.json')

// routes
app.get('/chefs', (req, res) => {
    res.send(chefs)
})
app.get('/chef/:id', (req, res) => {
    const chef_id = req.params.id;
    const targetChef = chefs.find(c => c.id == chef_id);
    res.send(targetChef);

})



app.listen(port, () => {
    console.log(`chef master server running on port ${port}`);
})