/*  参数默认值  rest参数  扩展运算符 
 箭头函数  尾调用
 */
{   //参数默认值

    function test(x, y = 'world') {
        console.log('默认值', x, y);
    }
    test('hello');
    test('hello', 'girl')
}

{
    let x = 'test';
    function test2(x, y = x) {
        console.log('作用域', x, y);
    }
    test2('kill');  // kill kill
}

{
    let x = 'test';
    function test2(x, y = x) {
        console.log('作用域', x, y);
    }
    test2();  // undefined undefined
}

{
    let x = 'test';
    function test2(c, y = x) {
        console.log('作用域', c, y);
    }
    test2("kill");  // kill test
}



{
    function test(...arg) {
        for (let v of arg) {
            console.log('rest', v);
        }
    }
    test(1, 2, 3, 4, 5, 'a');
}

{
    console.log(...[1, 2, 4]);
    console.log('a', ...[1, 2, 4]);
}

{
    let arrow = v => v * 2;
    console.log('arrow', arrow(6)); //arrow 12

    // 相当于
    // let arrow = function (v) {
    //     return v * 2;
    // }
}
{
    let arrow2 = () => 5;
    // 相当于
    //  let arrow2 = function(){
    //     return 5;
    // }

    console.log('arrow2', arrow2());

}

{ //尾调用

    /* 尾调用（Tail Call）是函数式编程的一个重要概念，本身非常简单，
    一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数。 */

    function f(x) {
        return g(x);
    }

}

// 以下三种情况，都不属于尾调用。
{
    // 情况一
    function f(x) {
        let y = g(x);
        return y;
    }

    // 情况二
    function f(x) {
        return g(x) + 1;
    }

    // 情况三
    function f(x) {
        g(x);
    }
}

{
    function tail(x) {
        console.log('tail', x);
    }
    function fx(x) {
        return tail(x)
    }
    fx(123)
}