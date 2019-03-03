{   //简介表示法： 键和值相等
    let o = 1;
    let k = 2;

    let es5 = {
        o: o,
        k: k
    };
    let es6 = {
        o,
        k
    };

    console.log(es5, es6);

    let es5_method = {
        hello: function () {
            console.log("hello");
        }
    };
    let es6_method = {
        hello() {
            console.log("hello");
        }
    };
    console.log(es5_method.hello(), es6_method.hello());
}

{
    // 属性表达式
    let a = 'b';
    let es5_obj = {
        a: 'c'
    };
    let es6_obj = {
        [a]: 'c'   //b:'c'
    }
}

{
    // 新增API
    console.log('字符串', Object.is('abc', 'abc'), 'abc' === 'abc');
    console.log('数组', Object.is([], []), [] === []);

    // 浅拷贝
    console.log('拷贝', Object.assign({ a: 'a' }, { b: 'b' }));

    // Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。
    /* 注意，如果目标对象与源对象有同名属性，
    或多个源对象有同名属性，则后面的属性会覆盖前面的属性。 */
    const target = { a: 1, b: 1 };

    const source1 = { b: "科比", c: 2 };
    const source2 = { c: "詹姆斯" };

    Object.assign(target, source1, source2);
    console.log(target);   // {a:1, b:"科比", c:"詹姆斯"}

    /*  Object.assign拷贝的属性是有限制的，
        只拷贝源对象的自身属性（不拷贝继承属性），
        也不拷贝不可枚举的属性（enumerable: false）。 */

    let nice = Object.assign({ b: 'c' },
        Object.defineProperty({}, 'invisible', {
            enumerable: false,
            value: 'hello'
        })
    )
    console.log(nice); // {b:"c"}


    let test = { k: 123, o: 456 };
    for (let [key, value] of Object.entries(test)) {
        console.log([key, value]);
    }
}

/*********************** 注意点 **********************************/
// （1）浅拷贝

/* Object.assign方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象
某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。 */
{
    const obj1 = { a: { b: 1 } };
    const obj2 = Object.assign({}, obj1);

    obj1.a.b = 2;
    obj2.a.b // 2
}


// （2）

// 对于这种嵌套的对象，一旦遇到同名属性，Object.assign的处理方法是替换，而不是添加。
{
    const target = { a: { b: 'c', d: 'e' } }
    const source = { a: { b: 'hello' } }
    Object.assign(target, source)

    console.log("同名属性的替换");
    console.log(target); // { a: { b: 'hello' } }


    /*  上面代码中，target对象的a属性被source对象的a属性整个替换掉了，
     而不会得到{ a: { b: 'hello', d: 'e' } } 的结果。
     这通常不是开发者想要的，需要特别小心。
     一些函数库提供Object.assign的定制版本（比如 Lodash 的_.defaultsDeep方法），
     可以得到深拷贝的合并。 */
}


// （3）数组的处理

// Object.assign可以用来处理数组，但是会把数组视为对象。
{
    console.log(Object.assign([1, 2, 3], [4, 5]))  // [4, 5, 3]);
    console.log("数组的处理");

    /* 上面代码中，Object.assign把数组视为属性名为 0、1、2 的对象，
    因此源数组的 0 号属性4覆盖了目标数组的 0 号属性1。 */
}



// （4）取值函数的处理

// Object.assign只能进行值的复制，如果要复制的值是一个取值函数，那么将求值后再复制。
{
    const source = {
        get foo() { return 1 }
    };
    const target = {};

    Object.assign(target, source)

    // { foo: 1 }

    /* 上面代码中，source对象的foo属性是一个取值函数，
    Object.assign不会复制这个取值函数，只会拿到值以后，将这个值复制过去。 */
}



