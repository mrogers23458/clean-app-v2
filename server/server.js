const express = require('express')

const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.send('Successful Response')
})

app.listen(port, () => console.log(`test app listening on ${port}`))