const fs = require('fs')
const static = fs.readFileSync('@architect/shared/static.json','utf-8')

// src/http/get-index/index.js
let body = `
<!doctype html>
<html lang=en>
  <body>
    <h1>Hello world!</h1>
  <pre>${static}</pre>
  </body>
</html>
`

exports.handler = async function http (request) {
  return {
    statusCode: 200,
    headers: { 'content-type': 'text/html; charset=utf8' },
    body
  }
}