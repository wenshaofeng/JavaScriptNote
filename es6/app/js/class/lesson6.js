{
    // 声明
    // 保证声明的变量独一无二
    let a1 = Symbol();
    let a2 = Symbol();
    console.log(a1 === a2);  // false
    let a3 = Symbol.for('a3');
    let a4 = Symbol.for('a3');
    console.log(a3 === a4);
}

{
    let a1 = Symbol.for('abc');
    let a2 = Symbol.for('c')
    let a3 = Symbol('abc')
    let obj = {
        [a3]: '科比',
        [a1]: '123',
        'abc': 345,
        'c': 456,
        [a2]: 'nice'
    };
    console.log('obj', obj); //{abc: 345, c: 456,Symbol(abc): "科比", Symbol(abc): "123" ,Symbol(c): "nice" }


    // for in 拿不到 Symbol 的键值
    for (let [key, value] of Object.entries(obj)) {
        console.log('let of', key, value);
    }

    // 这个方法专门查 Symbol ，但是普通的拿不到
    Object.getOwnPropertySymbols(obj).forEach(function (item) {
        console.log(obj[item]);
    })

    Reflect.ownKeys(obj).forEach(function (item) {
        console.log('ownkeys', item, obj[item]);
    })
}