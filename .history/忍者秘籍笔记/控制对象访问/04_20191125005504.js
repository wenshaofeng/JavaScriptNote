// 如果我们需要控制对象的全部交互类型，在这种情况下，可以使用一种全新的对象类型：代理


const emperor = { name: 'Komei'}
const reprsenttative = new Proxy(emperor, {  // emperor 是目标对象 
    get: (target, key) => {
        return key in target ? target[key] : 'dont bother the emperor'
    },
    set (target, key, value) {
        console.log("通过代理");
        
        target[key] = value
    }
})

console.log(emperor.name)  // Komei
console.log(reprsenttative.name)  // Komei

console.log(reprsenttative.nickname) // dont bother the emperor
reprsenttative.nickname = 'leechao'
console.log(reprsenttative.nickname) // leechao