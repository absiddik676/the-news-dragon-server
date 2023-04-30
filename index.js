const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const category = require('./Data/categorys.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/categorys',(req,res)=>{
    res.send(category)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})