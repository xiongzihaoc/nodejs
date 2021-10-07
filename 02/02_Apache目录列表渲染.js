const http = require('http')
const fs = require('fs')

const server = http.createServer()

server.on('request', (req, res) => {

    // 请求地址
    const url = req.url
    // basrUrl
    const baseUrl = 'D:/common'
    fs.readdir(baseUrl,(err,files)=>{
        if (err) {
            return res.end('Can not find files')
        }
        console.log(files)
    })
})

server.listen(3000, () => {
    console.log('Server is running')
})