# 排序算法的JavaScript实现

### 排序算法说明
![](https://user-gold-cdn.xitu.io/2016/11/29/4abde1748817d7f35f2bf8b6a058aa40?imageslim)
>**图片名词解释**： n: 数据规模 k:“桶”的个数 In-place: 占用常数内存，不占用额外内存 Out-place: 占用额外内存

#### 对于评述算法优劣术语的说明
**稳定**：如果a原本在b前面，而a=b，排序之后a仍然在b的前面；
**不稳定**：如果a原本在b的前面，而a=b，排序之后a可能会出现在b的后面；

**内排序**：所有排序操作都在内存中完成；
**外排序**：由于数据太大，因此把数据放在磁盘中，而排序通过磁盘和内存的数据传输才能进行；

**时间复杂度**: 一个算法执行所耗费的时间。
**空间复杂度**: 运行完一个程序所需内存的大小。

![](https://user-gold-cdn.xitu.io/2016/11/29/b93d9288a682f5538667fb1fa4c65220?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

### 冒泡排序(Bubble Sort)

```javascript

function bubbleSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            var temp = arr[j]
            if (arr[j + 1] < arr[j]) { // 相邻元素两两对比
                arr[j] = arr[j + 1]  // 元素交换
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(bubbleSort(arr)); //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

```