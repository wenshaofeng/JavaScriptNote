### 函数形参的默认值
- ES5 以前的做法
```javascript
function makeRequest(url,timeout,callback){
    timeout = (typeof timeout !== 'undefined')? timeout : 2000 
    callback = (typeof callback !== 'undefined')? callback : function() { }
}
```
如果不显式传值，则其值默认为 `undefined` ,所以需要使用 typeof 检查参数类型，避免传的值如给 timeout 传入0 被视为undefined

- ES6默认参数传值

```javascript
function makeRequest(url,timeout = 2000 , callback = function() {} ){
    // 函数其余部分
}

```
ES6中，如果不显式传值或者传入 undefined，就会使用默认参数

- 默认参数的临时死区

```js
function add(first = second, second){
    return first + second
}

console.log(add(1,2)) // 3
console.log(add(undefined,2)) // 抛出错误
```
在这个示例中，js引擎相当于做了如下事情
```js
// 调用 add(1,2)
let first = 1
let second = 1 


// 调用 add(undefined,2)
let first = second
let second = 1
```

### 箭头函数

##### 箭头函数与传统的JavaScript函数的区别
- 没有 this、super 、 arguments 和 new.target 绑定
- 不能通过 new 关键字调用
- 没有原型
- 不可以改变 this 的指向
- 不支持 argument 对象
- 不支持重复的命名参数

