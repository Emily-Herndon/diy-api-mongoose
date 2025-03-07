// required packages
const express = require('express')
const cors = require('cors')

// connect to mongo
require('./models')

// app config/middlewares
const app = express()
const PORT = 8000

app.use(express.json())
app.use(cors())

// routes/controllers
app.get('/', (req, res) => {
    res.json({msg: "Welcome to the Blog"})
})

app.use('/blogs', require('./controllers/blogs'))
app.use('/comment', require('./controllers/comment'))

// listening on PORT
app.listen(PORT, () => console.log(`Why don't you blog about it....on PORT: ${PORT}`))