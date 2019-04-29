## 块级作用域绑定(let 、 const)
```javascript
/* 
 ES6会强制开启严格模式 use strict
 let 为块级作用域
 let 变量不能重复定义
 暂存性死区（通常用来描述let和const的不提升效果）
 let 声明的变量一定要在声明后使用，否则报错 */
```

```javascript
function test() {
   for (let i = 1; i < 3; i++) {  //let 为块级作用域
      console.log(i);
   }
   console.log(i);  //Uncaught ReferenceError: i is not defined

   let a = 1
   let a = 5  //let 变量不能重复定义 

   // var 的情况                         //let不会提升
   console.log(foo); // 输出undefined
   var foo = 2;
   let a = 2
   // let a = 3
   // // let 的情况
   console.log(bar); // 报错ReferenceError
   let bar = 2;

   if (true) {
      // TDZ开始 (暂时性死区)
      tmp = 'abc'; // ReferenceError
      console.log(tmp); // ReferenceError

      let tmp; // TDZ结束
      console.log(tmp); // undefined

      tmp = 123;
      console.log(tmp); // 123
   }

}
test()

```

```javascript
 const 为常量，不能再次赋值，且初次定义就必须赋值
 注意：const声明不允许修改绑定，但是允许修改值

```

```javascript
function test1() {
   const PI = 456
   PI = 45 // 报错
   console.log(PI);

}
test1()

const a = {name:"科比"}
a.name = "詹姆斯"

console.log(a);  // 詹姆斯
```

### 临时死区 (Temporal Dead Zone TDZ )

```javascript
if(condition){
   
   console.log(typeof value) // 引用错误  ReferenceError: value is not defined
   let value = "blue"
}
```
>JavaScript 引擎在扫描代码发现变量声明时，要么将它们提升至作用域顶部 （var 声明），要么将声明放到 TDZ 中 （遇到 let 和 const 声明 ）。 访问 TDZ 中的变量会触发运行时错误。只有执行过变量声明语句后，变量才会从 TDZ 中移出，然后才可以访问

### 全局作用域绑定
 >let  与  const  不同于  var  的另一个方面是在全局作用域上的表现。当在全局作用域上使用  var  时，它会创建一个新的全局变量，并成为全局对象（在浏览器中是  window  ）的一个属性。这意味着使用  var  可能会无意覆盖一个已有的全局属性，就像这样

 ```javascript
var Array = "hello"
console.log(window.Array) // 'hello' 

var nice = 'hehe'
console.log(window.nice) // 'hehe'
 ```

>然而若你在全局作用域上使用  let  或  const  ，虽然在全局作用域上会创建新的绑定，但不会有任何属性被添加到全局对象上。这也就意味着你不能使用  let 或  const 来覆盖一个全局变量，你只能将其遮蔽。

```javascript
let Array = 'hello'
console.log(Array === window.Array) //false

const nice = 'hehe'
console.log(nice)
console.log(window.nice) //undefined
```

### 书中的最佳实践
- 默认使用const定义变量，确实需要改变变量的值时使用let
