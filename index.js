const express = require('express')
const cors = require('cors')

const app = express();
const port = 5000;

// use cors
app.use(cors())

// chef data
const chefs = require('./chef.json')

// routes
app.get('/', (req, res) => {
    res.send({ helloworld: 'gh550' })
})
app.get('/chefs', (req, res) => {
    res.send(chefs)
})



app.listen(port, () => {
    console.log(`chef master server running on port ${port}`);
})