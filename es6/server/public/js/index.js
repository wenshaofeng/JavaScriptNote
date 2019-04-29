/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	'use strict';

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

	/* 
	 ES6会强制开启严格模式 use strict
	 let 为块级作用域
	 let 变量不能重复定义
	 暂存性死区（通常用来描述let和const的不提升效果）
	 let 声明的变量一定要在声明后使用，否则报错 */

	/* function test() {
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
	test() */

	/*   const 为常量，不能再次赋值，且初次定义就必须赋值
	     注意：const声明不允许修改绑定，但是允许修改值

	*/

	/* function test1() {
	   const PI = 456
	   PI = 45 // 报错
	   console.log(PI);

	}
	test1()

	const a = {name:"科比"}
	a.name = "詹姆斯"

	console.log(a);  // 詹姆斯
	 */

	/* var condition = true

	if(condition){
	   console.log('fuck');
	   
	   console.log(typeof value) // 引用错误  ReferenceError: value is not defined
	   let value = "blue"
	} */

	/* var Array = "hello"
	console.log(window.Array)

	var nice = 'hehe'
	console.log(window.nice) */

	/*************解构赋值*******************/
	//数组
	{
	   console.log('数组解构');

	   var a = void 0,
	       b = void 0,
	       res = void 0;
	   a = 1;
	   b = 5;

	   console.log(a, b); // 1 5 
	}

	{
	   var _a = void 0,
	       _b = void 0,
	       rest = void 0;
	   _a = 1;
	   _b = 2;
	   rest = [3, 4, 5, 6];

	   console.log(_a, _b, rest); //1 2 Array [ 3, 4, 5, 6 ]
	}

	//对象
	{
	   var _a2 = void 0,
	       _b2 = void 0;
	   var _a$b = { a: 6, b: 2 };
	   _a2 = _a$b.a;
	   _b2 = _a$b.b;

	   console.log(_a2, _b2); // 6 2
	}

	//应用:
	// 1.变量交换

	{
	   var _a3 = 8;
	   var _b3 = 2;
	   var _ref = [_b3, _a3];
	   _a3 = _ref[0];
	   _b3 = _ref[1];

	   console.log(_a3, _b3); //2 8
	}

	{
	   var _a4 = 8;
	   var _b4 = 18;
	   var _a$b2 = { a: _b4, b: _a4 };
	   _a4 = _a$b2.a;
	   _b4 = _a$b2.b;

	   console.log(_a4, _b4); //18 8 
	}
	// 2.接收函数返回值
	{
	   var f = function f() {
	      return [1, 2];
	   };

	   var _a5 = void 0,
	       _b5 = void 0;

	   var _f = f();

	   var _f2 = _slicedToArray(_f, 2);

	   _a5 = _f2[0];
	   _b5 = _f2[1];

	   console.log(_a5, _b5); // 1 2
	}
	// 3.返回多个值时，可以选择性接收自己想要的某几个变量
	{
	   var _f3 = function _f3() {
	      return [1, 2, 3, 4, 5];
	   };

	   var _a6 = void 0,
	       _b6 = void 0,
	       c = void 0;

	   var _f4 = _f3();

	   var _f5 = _slicedToArray(_f4, 4);

	   _a6 = _f5[0];
	   _b6 = _f5[3];

	   console.log(_a6, _b6); //1 4
	}

	// 4.不知道函数返回数组的长度，只想取出前几个元素，其余用数组表示
	{
	   var _f6 = function _f6() {
	      return [1, 2, 3, 4, 5];
	   };

	   var _a7 = void 0,
	       _b7 = void 0,
	       _c = void 0;

	   var _f7 = _f6();

	   var _f8 = _toArray(_f7);

	   _a7 = _f8[0];
	   _b7 = _f8.slice(1);

	   console.log(_a7, _b7); //1 [2,3,4,5]
	}

	// 对象解构赋值
	{
	   var _a8 = { p: 3, q: true };
	   var p = _a8.p,
	       q = _a8.q;

	   console.log(p, q); // 3 true
	}

	{
	   var _a10 = { a: 3 },
	       _a10$a = _a10.a,
	       _a9 = _a10$a === undefined ? 10 : _a10$a,
	       _a10$b = _a10.b,
	       _b8 = _a10$b === undefined ? 5 : _a10$b;

	   console.log(_a9, _b8); //3 5
	}

	{
	   var metaData = {
	      title: 'abc',
	      test: [{
	         title: 'test',
	         desc: 'description'
	      }]
	   };

	   var esTitle = metaData.title,
	       _metaData$test = _slicedToArray(metaData.test, 1),
	       cnTitle = _metaData$test[0].title;

	   console.log(esTitle, cnTitle); //'abc' test
	}

	//实际上，对象的解构赋值是下面形式的简写
	{
	   var _foo$bar = { foo: "aaa", bar: "bbb" },
	       foo = _foo$bar.foo,
	       bar = _foo$bar.bar;
	}
	/* 也就是说，对象的解构赋值的内部机制，是先找到同名属性，
	然后再赋给对应的变量。真正被赋值的是后者，而不是前者。 */

	/* {
	   let { foo: baz } = { foo: "aaa", bar: "bbb" };
	   baz // "aaa"
	   foo // error: foo is not defined

	   //foo是匹配的模式，baz才是变量。
	   //真正被赋值的是变量baz，而不是模式foo。
	} */

/***/ })
/******/ ]);