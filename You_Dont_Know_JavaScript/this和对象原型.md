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


13339159659
qwert12
>它的作用域

## this 全面解析

## 对象

## 原型

## 行为委托
