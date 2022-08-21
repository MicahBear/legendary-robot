const express = require('express');
const app = express();
const PORT = 2121
require('dotenv').config()


app.use(express.static(__dirname + '/public'))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    console.log(__dirname)
    console.log(__filename)
})