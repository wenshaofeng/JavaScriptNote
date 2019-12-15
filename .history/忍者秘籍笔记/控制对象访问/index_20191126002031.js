/* 通过控制对象属性的访问，可以实现插入日志，
数据验证和其他副作用等功能 */


// 使用内部方法来设置属性的 get 和 set
import  './01.js' 

/*  在对象字面量中定义getter 和 setter 属性 
 在 ES6的 class 中定义getter 和 setter  */
import  './02.js' 

// 通过Object.defineProperty定义getter和setter
import  './03.js' 

/* 
    通过Proxy构造器创建代理
    对比不使用代理添加日志记录和使用代理后的日志记录

*/

import  './04.js' 