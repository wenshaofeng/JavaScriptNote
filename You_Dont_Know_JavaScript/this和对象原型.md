## 关于 this

### 为什么要用 this 

```javascript
function identify() {
    return this.name.toUpperCase()
}

function speak() {
    var greeting = "Hello , I'm " + identify.call(this)
    console.log(greeting);

}

var me = {
    name: '狗蛋'
}

var you = {
    name: '二狗子'
}  

identify.call(me)  //狗蛋
identify.call(you) //二狗子
speak.call(me) // Hello , I'm 狗蛋
speak.call(you) // Hello , I'm 二狗子

```

这段代码可以在不同的上下文对象（me 和 you）中重复使用函数 `identify()` 和 `speak()`，不用针对每个对象编写不同版本的函数。

如果不使用 this，那就需要给 identify() 和 speak() 显式传入一个上下文对象。

```javascript
function identify( context ) {
    return context.name.toUpperCase()
}

function speak( context ) {
    var greeting = "Hello , I'm " + identify( context )
    console.log(greeting);

}

var me = {
    name: '狗蛋'
}

var you = {
    name: '二狗子'
}  

identify( you ) // 二狗子
speak( me )// Hello , I'm 狗蛋

```

然而，this 提供了一种更优雅的方式来隐式“传递”一个对象引用，因此可以将 API 设计得更加简洁并且易于复用。

随着你的使用模式越来越复杂，显式传递上下文对象会让代码变得越来越混乱，使用 this则不会这样。

### 误解
- 指向自身
- 它的作用域

>指向自身
```javascript
function foo(num) {
    console.log("foo:" + num);
    this.count++
}

foo.count = 0 

for(var i = 0 ; i<10; i++) {
    if(i>5) {
        foo(i)
    }
}

console.log(foo.count) // 0 

```
由上述代码可以发现，`this` 并不像我们想象的那样指向函数本身 ， 事实上，上面的this指向全局对象 (浏览器里是window)

解决方式
```javascript
function foo(num) {
    console.log("foo:" + num);
    this.count++
}

foo.count = 0 

for(var i = 0 ; i<10; i++) {
    if(i>5) {
        foo.call(foo,i)// 使用 call(...) 可以确保 this 指向函数对象 foo 本身
    }
}

console.log(foo.count) // 4
```


>它的作用域
第二种常见的误解是，this 指向函数的作用域。

需要明确的是，this 在任何情况下都不指向函数的词法作用域。在JavaScript 内部，作用
域确实和对象类似，可见的标识符都是它的属性。但是作用域“对象”无法通过JavaScript
代码访问，它存在于JavaScript 引擎内部。

```javascript
function foo() {
    var a = 2 
    this.bar()
}
function bar() {
    console.log( this.a );
}

foo()  // ReferenceError: a is not defined
```

### this 到底是什么 
this 是在运行时进行绑定的，并不是在编写时绑定，它的上下文取决于函数调用时的各种条件。**this 的绑定和函数声明的位置没有任何关系，只取决于函数的调用方式**。

当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包含函数在哪里被调用（调用栈）、函数的调用方法、传入的参数等信息。this 就是记录的其中一个属性，会在函数执行的过程中用到。
## this 全面解析

### 调用位置
在理解this 的绑定过程之前，首先要理解调用位置：调用位置就是函数在代码中被调用的位置（而不是声明的位置）。只有仔细分析调用位置才能回答这个问题：这个this 到底引用的是什么？

最重要的是要分析调用栈（就是为了到达当前执行位置所调用的所有函数）。我们关心的调用位置就在当前正在执行的函数的前一个调用中。


### 绑定规则
- 默认绑定
- 隐式绑定
- 显示绑定
- new绑定 

#### 默认绑定

> `this`默认会绑定到全局对象上,如果是严格模式，`this`为`undefined`

```js
function foo() {
  console.log(this.a);
}
var a = 2;
(function () {
  "use strict";
  console.dir(foo)
  foo(); // 2
})();

### 这里的严格模式是指 foo()函数体内的代码运行在严格模式下
function foo() {
  "use strict";
  console.log(this.a);
}
var a = 2;
(function () {
  "use strict";
  console.dir(foo)
  foo(); // TypeError:  Cannot read property 'a' of undefined
})();
```



#### 隐式绑定

##### 隐式丢失

隐式丢失是指被隐式绑定的函数丢失绑定对象，从而默认绑定到window。这种情况容易出错却又常见

这三种特殊情境下，this 会 100% 指向 window：

- 立即执行函数（IIFE）
- setTimeout 中传入的函数
- setInterval 中传入的函数
- 事件监听器的处理函数

```js
var name = 'BigBear'

var me = {
  name: 'xiuyan',
  // 声明位置
  sayHello: function() {
    console.log(`你好，我是${this.name}`)
  },
  hello: function() {
    (function(cb) {
      // 调用位置
      cb()
    })(this.sayHello)
  }
}

me.hello() // '你好，我是BigBear'

### setTimeout 

var name = 'BigBear'

var me = {
  name: 'xiuyan',
  hello: function() {
    setTimeout(function() {
      console.log(`你好，我是${this.name}`)
    })
  }
}

me.hello() // 你好，我是BigBear
```





#### 显示绑定

通过call()、apply()、bind()方法把对象绑定到this上，叫做显式绑定。对于被调用的函数来说，叫做间接调用

>- call、apply 和 bind 之间的区别比较大，前者在改变 this 指向的同时，也会把目标函数给执行掉；后者则只负责改造 this，不作任何执行操作。
>
>- call 和 apply 之间的区别，则体现在对入参的要求上。前者只需要将目标函数的入参逐个传入即可，后者则希望入参以数组形式被传入。

##### call

例子

```js
var me = {
  name: 'zhangsan'
}

function showName(doing) {
  console.log(`${this.name} is ${doing}`)
}

showName.call(me,'eating') // zhangsan is eating 

## call 方法做了两件事：
1. 改变 this 的指向，将 this 绑到第一个入参指定的的对象上去；
2. 根据输入的参数，执行函数。
```

##### 实现一个call

```js

```


##### apply
```js

```
##### 实现一个apply 
```js

```
##### bind 

```js

```
##### 实现一个bind 
```js

```

#### new绑定

##### new 做了什么



### 优先级 




## 对象

## 原型

## 行为委托
