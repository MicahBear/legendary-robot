const express = require('express');
const app = express()
const PORT = 3005

app.use(express.static('public'))

app.listen(PORT, () => {
    console.log('server is running')
})