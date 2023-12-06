const express = require('express')
const app = express()
const PORT = 8080;
const cors = require('cors')

app.use(cors())

app.get("/palak",(req,res)=>{
    res.json({message: "MSG from server"})
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})