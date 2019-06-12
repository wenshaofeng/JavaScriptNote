## Promise

### 红绿灯问题
题目：红灯亮3秒，绿灯亮1秒，黄灯亮2秒；如何让三个灯不断交替重复亮灯？（用 Promise 实现）

三个亮灯函数

```js
function red(){
    console.log('red');
}
function green(){
    console.log('green');
}
function yellow(){
    console.log('yellow');
}

```
具体实现

```js
function red(){
    console.log('red');
}
function green(){
    console.log('green');
}
function yellow(){
    console.log('yellow');
}

var light = function(timmer, cb){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            cb();
            resolve();
        }, timmer);
    });
};

var step = function() {
    Promise.resolve().then(function(){
        return light(3000, red);
    }).then(function(){
        return light(1000, green);
    }).then(function(){
        return light(2000, yellow);
    }).then(function(){
        step();
    });
}

step();

```
async、await实现
```js
function red(){
    console.log('red');
}
function green(){
    console.log('green');
}
function yellow(){
    console.log('yellow');
}

var light = function(timmer, cb){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            cb();
            resolve();
        }, timmer);
    });
};

async function step() {
	while(1) {
		await light(3000,red)
		await light(1000,green)
		await light(2000,yellow)	
	}
}

step()
```

### 局限性

#### 1、异常被忽略
```js
throw new Error('error');
console.log(233333);
```
在这种情况下，因为 throw error 的缘故，代码被阻断执行，并不会打印 233333，再举个例子：
```js
const promise = new Promise(null);
console.log(233333);
```
复制代码以上代码依然会被阻断执行，这是因为如果通过无效的方式使用 Promise，并且出现了一个错误阻碍了正常 Promise 的构造，结果会得到一个立刻跑出的异常，而不是一个被拒绝的 Promise。
![](https://upload-images.jianshu.io/upload_images/9249356-c5ec223d49738921.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
然而再举个例子：
```js
let promise = new Promise(() => {
    throw new Error('error')
});
console.log(2333333);
```
复制代码这次会正常的打印 233333，说明 Promise 内部的错误不会影响到 Promise 外部的代码，而这种情况我们就通常称为 “吃掉错误”。
其实这并不是 Promise 独有的局限性，try..catch 也是这样，同样会捕获一个异常并简单的吃掉错误。
而正是因为错误被吃掉，Promise 链中的错误很容易被忽略掉，这也是为什么会一般推荐在 Promise 链的最后添加一个 catch 函数，因为对于一个没有错误处理函数的 Promise 链，任何错误都会在链中被传播下去，直到你注册了错误处理函数。

#### 2. 单一值
Promise 只能有一个完成值或一个拒绝原因，然而在真实使用的时候，往往需要传递多个值，一般做法都是构造一个对象或数组，然后再传递，then 中获得这个值后，又会进行取值赋值的操作，每次封装和解封都无疑让代码变得笨重。

建议是使用 ES6 的解构赋值：

```js
Promise.all([Promise.resolve(1), Promise.resolve(2)])
.then(([x, y]) => {
    console.log(x, y);
});
```
####  3. 无法取消
Promise 一旦新建它就会立即执行，无法中途取消。
#### 4. 无法得知 pending 状态
当处于 pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

## async/await介绍

>async

    async的用法，它作为一个关键字放到函数前面，用于表示函数是一个异步函数，因为async就是异步的意思， 异步函数也就意味着该函数的执行不会阻塞后面代码的执行，async 函数返回的是一个promise 对象。

 >await

    await的含义为等待。意思就是代码需要等待await后面的函数运行完并且有了返回结果之后，才继续执行下面的代码。这正是同步的效果

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

应用
```javascript
    //先拿到数据再跳转页面
    async handleLogout() {
    await this.$store.dispatch("user/logout");
    this.$router.push(`/login?redirect=${this.$route.fullPath}`);
    }

```

### async 与 Promise 
- 代码更简洁
``` js
/**
 * 示例一
 */
function fetch() {
  return (
    fetchData()
    .then(() => {
      return "done"
    });
  )
}

async function fetch() {
  await fetchData()
  return "done"
};

```

```js
/**
 * 示例二
 */
function fetch() {
  return fetchData()
  .then(data => {
    if (data.moreData) {
        return fetchAnotherData(data)
        .then(moreData => {
          return moreData
        })
    } else {
      return data
    }
  });
}

async function fetch() {
  const data = await fetchData()
  if (data.moreData) {
    const moreData = await fetchAnotherData(data);
    return moreData
  } else {
    return data
  }
};

```

```js
/**
 * 示例三
 */
function fetch() {
  return (
    fetchData()
    .then(value1 => {
      return fetchMoreData(value1)
    })
    .then(value2 => {
      return fetchMoreData2(value2)
    })
  )
}

async function fetch() {
  const value1 = await fetchData()
  const value2 = await fetchMoreData(value1)
  return fetchMoreData2(value2)
};


```

- 错误处理

```js
function fetch() {
  try {
    fetchData()
      .then(result => {
        const data = JSON.parse(result)
      })
      .catch((err) => {
        console.log(err)
      })
  } catch (err) {
    console.log(err)
  }
}

```

在这段代码中，try/catch 能捕获 fetchData() 中的一些 Promise 构造错误，但是不能捕获 JSON.parse 抛出的异常，如果要处理 JSON.parse 抛出的异常，需要添加 catch 函数重复一遍异常处理的逻辑。
在实际项目中，错误处理逻辑可能会很复杂，这会导致冗余的代码。

使用 async/await (async/await 的出现使得 try/catch 就可以捕获同步和异步的错误。)

```js
async function fetch() {
  try {
    const data = JSON.parse(await fetchData())
  } catch (err) {
    console.log(err)
  }
};


```
### 在Vue中使用async

#### 在生命周期钩子上
```html
<div id="app">
    <div v-for="person in people">{{person.name}} - {{person.age}}</div>
</div>
```
```js
const vm = new Vue({
    el: '#app',
    data: {
        people: null,
    },
    async created() {
        const res = await fetch('https://raw.githubusercontent.com/DaKoala/fetch-example/master/people.json');
        this.people = await res.json();
    }
});

```
这里我们从GitHub上请求一个JSON文件，并将JSON的内容赋值给data中的属性people，最后通过列表渲染的方式将它显示出来。我们用的是created生命周期钩子，它会在Vue实例被创建但是还没有开始渲染到浏览器时执行。

由于created是一个对象的属性，同时它又是一个函数，所以根据ES6的对象语法，我们可以直接将对象的函数属性created写成created(){...}，它等同于created: function(){...}。

JSON文件的内容：

```json
[
  {
    "name": "张三",
    "age": 18
  },
  {
    "name": "李四",
    "age": 20
  },
  {
    "name": "王五",
    "age": 22
  }
]

```

最后网页显示的结果是这样的：

![](https://upload-images.jianshu.io/upload_images/9249356-6810c534c0246009.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)



#### 在methods中

```html
<div id="app">
    <button @click="secondPerson">点我!</button>
</div>
```

```js
const vm = new Vue({
    el: '#app',
    data: {
        people: null,
    },
    methods: {
        async secondPerson() {
            const res = await fetch('https://raw.githubusercontent.com/DaKoala/fetch-example/master/people.json');
            const json = await res.json();
            const person = json[1];
            alert(`我是${person.name}，我今年${person.age}岁。`);
        }
    },
});

```

我们仍然使用同一个JSON文件，这里我们异步读取这个JSON文件，并在获取到之后弹出一个提示框，点击后效果：

![](https://img-blog.csdnimg.cn/20190127090914105.png)


