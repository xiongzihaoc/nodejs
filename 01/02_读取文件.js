const fs = require('fs')

fs.readFile('./assets/读取文件.txt',(err,data)=>{
    console.log(data.toString())
})