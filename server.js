const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.json({ ok: true })
})

app.post('/', (req, res) => {
  const { name } = req.body
  return res.json({ name })
})

app.listen(3333)
