const express = require('express')
const app = express()

app.use(express.json())

var cs = new Map() 

// GET /cookies

app.get('/cookie', (req, res)=>{
    const list = []
    cs.forEach( (name, obj)=>{
        const {value, expires} = obj
        list.push({name, value, expires})
    } )

    return res.status(200).json(list)

})


// PUT

// DELETE

// POST /cookie
app.post('/cookie', (req, res)=>{
    const {name, value, milliseconds} = req.body
    // TODO - what if name exists?
    const expires = new Date()
    expires.setTime(expires.getTime() + milliseconds)

    const cookie = {name, value, expires}
    cs.set(name, {value, expires})
    return res.status(201).json(cookie)

})

app.use((req, res)=>{
    return res.status(404).json({error: 'Not Found'})
})

app.listen(3000)

