const http = require('http')
const fs = require('fs')

const server = http.createServer()

// 客户端发送request 自动触发服务器request事件
server.on('request', (req, res) => {

    const url = req.url

    if (url === '/') {
        fs.readFile('./common/index.html', (err, data) => {
            if (err) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8')
                res.end('读取文件失败')
            } else {
                res.setHeader('Content-Type', 'text/html;charset=utf-8')
                res.end(data)

            }
        })
    } else if (url === '/img') {
        fs.readFile('./common/index.png', (err, data) => {
            if (err) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8')
                res.end('读取文件失败')
            } else {
                res.setHeader('Content-Type', 'image/png;charset=utf-8')
                res.end(data)
            }
        })
    }

})
// 绑定端口号 启动服务器
server.listen(5000, () => {
    console.log('服务器启动成功')
})