1、
```javascript
var A = function() {};
A.prototype.n = 1;
var b = new A();
A.prototype = {
  n: 2,
  m: 3
}
var c = new A();

console.log(b.n);  
console.log(b.m);

console.log(c.n);
console.log(c.m);

/* 结果  1
        undefined
        2 
        3 */
```

2、

```javascript
var F = function() {};

Object.prototype.a = function() {
  console.log('a');
};

Function.prototype.b = function() {
  console.log('b');
}

var f = new F();

f.a();  //console.log('a');
f.b();  // not a function

F.a(); //console.log('a');
F.b(); // console.log('b');

```
3.
```javascript
var foo = {},
    F = function(){};
Object.prototype.a = 'value a';
Function.prototype.b = 'value b';

console.log(foo.a); // value a
console.log(foo.b); // undefined

console.log(F.a); // value a
console.log(F.b); // value b

```

