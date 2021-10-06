/**
 * require两个作用
 * 1.加载文件模块 执行里面的代码
 * 2.拿到被加载文件模块导出接口对象
 */

 const bexports = require('./b')
 console.log(bexports.foo)
 console.log(bexports.add(10,30))