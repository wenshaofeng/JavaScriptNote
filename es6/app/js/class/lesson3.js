/* { //标签模板 
    // 防止XSS攻击、多语言转换
    let user = {
        name: 'list',
        info: 'hello world'
    };
    console.log(abc`i am ${user.name},${user.info}`); //i am ,,,listhello world
    function abc(s, v1, v2) {
        console.log(s, v1, v2); 
        console.log(s);//["i am", "," , ""]
        console.log(v1); //list
        console.log(v2); //hello world
        
        return s + v1 + v2
    }
} */


/*****************    数组扩展    **********************/

{

    let arr = Array.of(3, '科比', 7, 9, 11);
    console.log("arr=", arr);   // arr =  [3, "科比", 7, 9, 11]

}

{   // 把伪数组转换成数组

    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    pArr.forEach(function (item) {
        console.log(item.textContent);
    });

    console.log(Array.from([1, 3, 5], function (item) {
        return item * 2
    }));

    let arrayLike = {
        '0': 'a',
        '1': 'b',
        '2': 'c',
        length: 3  // 去掉就不行
    };

    // ES5的写法
    var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']
    // ES6的写法
    let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
    console.log(arr2);


}

{
    for (let index of ['1', 'c', 'ks'].keys()) {
        console.log('keys', index);
    }
    for (let value of ['1', 'c', 'ks'].values()) {
        console.log('values', value);
    }
    for (let [index, value] of ['1', 'c', 'ks'].entries()) {
        console.log('keys', index, "values", value);
    }
}

{
    console.log([1, 2, 3, 4, 5, 6].find(function (item) { return item > 3 }));   // 4

    console.log([1, 2, 3, 4, 5, 6].findIndex(function (item) { return item > 3 }));   // 3
}


