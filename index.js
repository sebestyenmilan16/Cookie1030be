const express = require('express')
const app = express()

app.use(express.json())

app.use((req, res)=>{
    return res.status(404).json({error: 'Not Found'})
})

app.listen(3000)

