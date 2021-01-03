import express from 'express'

const app = express()
const PORT = 8000

app.get('/', (req, res) => {
    res.send('Express Application')
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})