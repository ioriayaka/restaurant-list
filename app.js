//require packages used in the project
const express = require('express')
//將 JSON 檔案載入 Express 中
const restaurants = require('./restaurant.json')
const app = express()
const port = 3000
//require express-handlebars
const exphbs = require('express-handlebars')

//setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// setting static files
app.use(express.static('public'))
//routes setting
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurants.results})
})

//start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})