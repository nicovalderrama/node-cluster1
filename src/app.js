const express = require('express')
const app = express()
const {initializeDB} = require('./config/db.config')

//mdw
app.use(express.json())




//server
const PORT = process.env.PORT || 3000

app.listen(PORT, async () => {
  await initializeDB()
  console.log(`server running at port ${PORT}`)
})