// 如果我们需要控制对象的全部交互类型，在这种情况下，可以使用一种全新的对象类型：代理

/* 使用 new Proxy 包装目标对象 emperor ，
   代理对象 reprsenttative 在访问目标对象时
   将会执行特定的操作
*/

const emperor = { name: 'Komei'}
const reprsenttative = new Proxy(emperor, {  // emperor 是目标对象 
    get: (target, key) => {
        console.log("通过代理访问");  
        return key in target ? target[key] : 'dont bother the emperor'
    },
    set (target, key, value) {
        console.log("通过代理写入");  
        target[key] = value
    }
})

console.log(emperor.name)  // Komei
console.log(reprsenttative.name)  // Komei

console.log(reprsenttative.nickname) // dont bother the emperor
reprsenttative.nickname = 'leechao'
console.log(reprsenttative.nickname) // leechao
console.log(emperor) // { name: 'Komei', nickname: 'leechao' }

/* 
   不使用代理的日志记录
 */

function Ninja () {
    let _skillLevel = 0;

    Object.defineProperty(this, 'skillLevel', {
        get: () => {
            console.log('skillLevel get method is called')
            return _skillLevel;
        },
        set: value => {
            console.log('skillLevel set method is called')
            _skillLevela = value;
        }
    })
}

const ninja = new Ninja()
ninja.skillLevel
ninja.skillLevel = 4

/* 
   使用代理的日志记录
 */