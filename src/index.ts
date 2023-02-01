import express from 'express'

const app = express()

const PORT = process.env.PORT || 8080

app.use(express.json())

app.get('/', (_, res) => {
  res.send('Hello world!')
})

app.listen(PORT, () => {
  console.log(`The server is running on port http://localhost:${PORT}`)
})
