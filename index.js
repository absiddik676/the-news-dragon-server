const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require('cors')
const category = require('./Data/categorys.json')
const newses = require('./Data/news.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/categorys', (req, res) => {
  res.send(category)
})
app.get('/news', (req, res) => {
  res.send(newses)
})
app.get('/news/:id', (req, res) => {
  const id = req.params.id;
  const selectedNewses = newses.find(news => news._id === id);
  res.send(selectedNewses)
})
app.get('/categorys/:id', (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  if (id == 0) {
    res.send(newses)
  } else {
    const categoryNews = newses.filter(news => parseInt(news.category_id) == id);
    res.send(categoryNews)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})