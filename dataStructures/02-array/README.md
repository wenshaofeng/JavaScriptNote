## 第2章 不要小看数组

### 2.2 二次封装属于自己的数组

数组基础

* 数组组大的有点：快速查询
* 数组最好应用于“索引有语意”的情况
* 但并非所有有语意的索引都适用于数组
  * 例如身份证号码：53332198808088888
  * 首先拿身份证号码做索引会开辟很大的内存空间，造成内存浪费
  * 其次这个整数是在太大了
* 数组也可以处理“索引没有语意”的情况
* 我们这一章节，主要处理“索引没有语意”的勤快数组的使用

制作属于我们自己的数组类

* 索引没有语意，如果表示没有元素？
* 如何添加元素？如何删除元素？


> 原则上可以把增删改查的操作，视为研究数据结构的脉络。

* class Array
  * data 存数据
  * capacity 数组的容量 (JS中不存在容量超出的问题)
  * size 初始为0，指向最后一个没有存放元素的索引

### 2-3 向数组中添加元素

```js
const DArray = (function () {
  let _data = Symbol('data')
  let _size = Symbol('size')

  class DArray {
    constructor(capacity = 10) {
      this[_data] = new Array(capacity)
      this[_size] = 0
    }

    getCapacity() {
      return this[_data].length
    }

    getSize() {
      return this[_size]
    }

    isEmpty() {
      return this[_size] === 0
    }

    addLast(e) {
      this.add(this[_size], e)
    }

    addFirst(e) {
      this.add(0, e)
    }

    add(index, e) {
      let data = this[_data]
      // 只能引用类型保存地址，值类型不能转存
      // let size = this[_size]

      if (this[_size] === data.length) {
        throw new Error('Add failed. Array is full.')
      }
      if (index < 0 || index > this[_size]) {
        console.log(this[_size], index)
        throw new Error('Add failed. Require index >=0 and index <= size.')
      }
      // 一次把index索引后的元素后移
      for (let i = this[_size] - 1; i >= index; i--) {
        data[i + 1] = data[i]
      }

      data[index] = e
      this[_size]++
    }
  }

  return DArray
})()

export default DArray
```