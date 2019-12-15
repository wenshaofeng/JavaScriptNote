// 异步异常的捕获
function f1() {
    f2()
}

async function f2() {
    try {
        await f3()
    } catch (error) {
        console.log('error', error);
        console.log('科比');

    }

}

function f3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const r = Math.random()
            r < 0.5 ? resolve() : reject("抛出异常")
        }, 1);
    })
}

f1()