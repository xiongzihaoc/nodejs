const fs = require('fs')

fs.readdir('D:/common',(err,files)=>{
    if (err) {
        return console.log('读取目录失败')
    }
    console.log(files)
})