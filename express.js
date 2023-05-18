const express = require('express')
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('**', (req, res) => {
  res.send(`
x-forwarded-for:   ${req.headers["x-forwarded-for"]}
x-forwarded-port:  ${req.headers["x-forwarded-port"]}
x-forwarded-proto: ${req.headers["x-forwarded-proto"]}
`.trimStart())
})

app.listen(3001, undefined, () => {
    console.log("listening on :3001")
})
