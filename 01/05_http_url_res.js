// 加载http核心模块
const http = require('http')
// 使用createServer创建web服务器
const server = http.createServer()

// 客户端发送request 自动触发服务器request事件
server.on('request', (req, res) => {
    switch (req.url) {
        case '/':
            const arr = [
                {id:1,name:"honor"},
                {id:2,name:"huawei"},
                {id:1,name:"iphone"},
            ]
            res.end(JSON.stringify(arr))
            break;
        case '/index':
            res.end()
            break;
        case '/register':
            res.end()
            break;
        case '/haha':
            res.end()
            break;
        default:
            res.end('404 Not Found')
            break;
    }

})
// 绑定端口号 启动服务器
server.listen(3000, () => {
    console.log('服务器启动成功')
})