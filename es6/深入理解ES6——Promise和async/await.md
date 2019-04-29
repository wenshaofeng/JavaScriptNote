### async/await介绍
async函数返回一个Promise对象，可以使用then方法添加回调函数。

```javascript
async function  f() {
    return 'hello world'
};
f().then( (v) => console.log(v)) // hello world

```

如果 async 函数内部抛出异常，则会导致返回的 Promise 对象状态变为 reject 状态。抛出的错误而会被 catch 方法回调函数接收到。

```javascript
async function e(){
    throw new Error('error');
}
e().then(v => console.log(v))
.catch( e => console.log(e));
```


当函数执行的时候，一旦遇到await就会先返回，等到**异步操作完成**(内部所有的 await 命令的 Promise 对象执行完)，再接着执行函数体内后面的语句。

也就是说，只有当 async 函数内部的异步操作都执行完，才会执行 then 方法的回调。


```javascript
const delay = timeout => new Promise(resolve=> setTimeout(resolve, timeout));
async function f(){
    await delay(1000);
    await delay(2000);
    await delay(3000);
    return 'done';
}

f().then(v => console.log(v)); // 等待6s后才输出 'done'
```
串行和并行

```javascript
function sleep(second) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(Math.random());
            resolve();
        }, second);
    });
}

async function chuanXingDemo() {
    await sleep(1000);
    await sleep(1000);
    await sleep(1000);
}


async function bingXingDemo() {
    var tasks = [];
    for (let i = 0; i < 3; ++i) {
        tasks.push(sleep(1000));
    }

    await Promise.all(tasks);
}

chuanXingDemo()
bingXingDemo()

```



正常情况下，await 命令后面跟着的是 Promise ，如果不是的话，也会被转换成一个 立即 resolve 的 Promise

```javascript

async function  f() {
    return await 1
};
f().then( (v) => console.log(v)) // 1
```

