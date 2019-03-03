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

	"use strict";

	{
	    var list = new Set();
	    list.add(5);
	    list.add(7);

	    console.log("size", list.size); // size 2
	}

	{
	    var arr = [1, 2, 3, 3, 4, 4, 5];
	    var _list = new Set(arr);

	    console.log("size", _list.size); // size 5
	}

	// 去重
	{
	    var _list2 = new Set();
	    _list2.add(1);
	    _list2.add(2);
	    _list2.add(1);

	    console.log("list", _list2); // set(1,2)


	    var _arr = [1, 2, 3, 1, 2];
	    var list2 = new Set(_arr);
	    console.log("unique", list2); // set(1,2,3)
	}

	{
	    //增加、删除、清空、查询
	    var _arr2 = ['add', 'delete', 'clear', 'has'];
	    var _list3 = new Set(_arr2);

	    console.log("has", _list3.has('add'));
	    console.log("delete", _list3.delete('add'), _list3);
	    _list3.clear();
	    console.log("list", _list3);
	}

	{
	    //遍历
	    var _arr3 = ['add', 'delete', 'clear', 'has'];
	    var _list4 = new Set(_arr3);

	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;

	    try {
	        for (var _iterator = _list4.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var key = _step.value;

	            console.log("key", key);
	        }
	    } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion && _iterator.return) {
	                _iterator.return();
	            }
	        } finally {
	            if (_didIteratorError) {
	                throw _iteratorError;
	            }
	        }
	    }

	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;

	    try {
	        for (var _iterator2 = _list4.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var value = _step2.value;

	            console.log("value", value);
	        }
	    } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	    } finally {
	        try {
	            if (!_iteratorNormalCompletion2 && _iterator2.return) {
	                _iterator2.return();
	            }
	        } finally {
	            if (_didIteratorError2) {
	                throw _iteratorError2;
	            }
	        }
	    }

	    _list4.forEach(function (item) {
	        console.log(item);
	    });
	}

	{
	    //weakList
	    var weakList = new WeakSet(); //  只能是对象

	    var arg = {};

	    weakList.add(arg);

	    console.log("weakList", weakList);
	}

	// Set添加元素用add,map添加元素用set
	{
	    var map = new Map();
	    var _arr4 = ['123'];

	    map.set(_arr4, 456); // ['123','456']
	    console.log("map");
	    console.log(map);
	    console.log(map.get(_arr4));
	}

	{
	    var _map = new Map([['a', 123], ['b', 456]]);
	    console.log("map args", _map);
	    console.log("size", _map.size);
	    console.log("size", _map.delete('a'), _map);
	    console.log("clear", _map.clear(), _map);
	}

	{
	    var weakmap = new WeakMap(); // 接收的只能是对象
	    var o = {};
	    weakmap.set(o, 123);
	    console.log(weakmap.get(o));
	}

	{
	    //  数据结构横向对比，增、删、改、查
	    var _map2 = new Map();
	    var array = [];
	    // 增
	    _map2.set('t', 1);
	    array.push({ t: 1 });

	    console.info("map-array", _map2, array);

	    // 查
	    var map_exist = _map2.has('t'); // true
	    var array_exist = array.find(function (item) {
	        return item.t;
	    });

	    console.info("map-array", map_exist, array_exist);

	    // 改
	    _map2.set('t', 2);
	    array.forEach(function (item) {
	        return item.t ? item.t = 2 : '';
	    });

	    console.info("map-array", _map2, array);

	    // 删
	    _map2.delete('t');
	    var index = array.findIndex(function (item) {
	        return item.t;
	    });
	    array.splice(index, 1);
	    console.info('map-array', _map2, array);
	}

	// set和array对比
	{
	    var set = new Set();
	    var _array = [];

	    // 增
	    set.add({ t: 1 });
	    _array.push({ t: 1 });

	    console.log("set-array", set, _array);

	    // 查
	    var set_exist = set.has({ t: 1 }); // false
	    var _array_exist = _array.find(function (item) {
	        return item.t;
	    });

	    console.info("set-array", set_exist, _array_exist);

	    // 改
	    set.forEach(function (item) {
	        return item.t ? item.t = 2 : '';
	    });
	    _array.forEach(function (item) {
	        return item.t ? item.t = 2 : '';
	    });

	    console.info("set-array-modify", set, _array);

	    // 删
	    set.forEach(function (item) {
	        return item.t ? set.delete(item) : '';
	    });
	    var _index = _array.findIndex(function (item) {
	        return item.t;
	    });
	    _array.splice(_index, 1);
	    console.info('set-array-empty', set, _array);
	}

	// Map、set、Object的对比
	{
	    var item = { t: 1 };
	    var _map3 = new Map();
	    var _set = new Set();
	    var obj = {};

	    // 增
	    _map3.set('t', 1);
	    _set.add(item);
	    obj['t'] = 1;

	    console.info('map-set-obj', obj, _map3, _set);

	    // 查
	    console.info({
	        map_exist: _map3.has('t'),
	        set_exist: _set.has(item),
	        obj_exist: 't' in obj
	    });

	    // 改
	    _map3.set('t', 2);
	    item.t = 2;
	    obj['t'] = 2;
	    console.info('map-set-obj-modify', obj, _map3, _set);

	    // 删
	    _map3.delete('t');
	    _set.delete(item);
	    delete obj['t'];

	    console.info('map-set-obj-empty', obj, _map3, _set);
	}

/***/ })
/******/ ]);