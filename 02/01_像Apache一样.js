const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request', (req, res) => {

    // 请求地址
    const url = req.url
    // basrUrl
    const baseUrl = 'D:/common'
    // 文件初始化地址
    let filePath = '/index.html'

    if (url !== '/') {
        filePath = url
    }
    fs.readFile(baseUrl + filePath, (err, data) => {
        if (err) {
            return res.end('404 Not Found.')
        }
        res.end(data)
    })
})

server.listen(3000, () => {
    console.log('Server is running')
})