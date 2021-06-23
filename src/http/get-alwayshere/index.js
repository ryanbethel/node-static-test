const arc = require('@architect/functions')

// src/http/get-index/index.js
let body = `
<!doctype html>
<html lang=en>
  <body>
    <h1>Hello world!</h1>
  <pre>${arc.static('always-here.txt')}</pre>src/
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