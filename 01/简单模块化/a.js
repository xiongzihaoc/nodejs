/**
 * 相对路径必须加 ./
 * Node中没有全局作用域 只有模块作用域 
 * a无法访问到b里面的变量和方法  
 * b也无法访问a里面的变量和方法
 */


console.log('a start')
require('./b')
console.log('a end')