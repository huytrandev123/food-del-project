import express from 'express'
import cors from 'cors'


// app config
const app = express()
const port = 4000

// middleware
app.use(express.json()) 
app.use(cors()) // dùng để truy cập vào backend khi ở bất kì chỗ nào của frontend

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, () => { 
    console.log(`Listen to http://localhost:${port}`);
})