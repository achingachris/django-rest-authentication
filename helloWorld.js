import http from 'http'

const hostname = '127.0.0.1'
const port = 8000

// http server
const server = http.createServer((req, res) => {
  // response header & content type
  res.writeHead(200, { 'Content-Type': 'text/plain' })

  // sending response body
  res.end('Hello World\n')
})

// message on console
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
