// 加载http核心模块
const http = require('http')
// 使用createServer创建web服务器
const server = http.createServer()

// 客户端发送request 自动触发服务器request事件
server.on('request', (req, res) => {
    console.log('收到客户端请求了' + req.url)
    // write可以使用多次 收到请求 给出响应并且结束
    // res.write('nevergiveup')
    // res.write('-----')
    // res.write('xzh')

    /**
     * 根据不同url响应不同的res
     * 例如 /index 首页
     *      /login 登录
     *      /register 注册
     *      /haha 哈哈
     */
    switch (req.url) {
        case '/':
            res.write('login')
            break;
        case '/index':
            res.write('index')
            break;
        case '/register':
            res.write('register')
            break;
        case '/haha':
            res.write('haha')
            break;
        default:
            res.write('404 Not Found')
            break;
    }
    res.end()
})
// 绑定端口号 启动服务器
server.listen(3000, () => {
    console.log('服务器启动成功')
})