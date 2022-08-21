const express = require('express');
const app = express();
const PORT = 2121
require('dotenv').config()


app.use(express.static('public'))

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})