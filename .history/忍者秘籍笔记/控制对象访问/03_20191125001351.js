
// 实现内置的 getter 和 setter ，控制私有对象属性的访问

/* 对象字面量与类中，
getter 和 setter 等方法与对象本身或者类本身不在同一作用域中 */


function Ninja () {
    let _skillLevel = 0;

    Object.defineProperty(this, 'skillLevel', {
        get: () => {
            return _skillLevel;
        },
        set: (value) => {
            _skillLevel = value;
        }
    })

    getLevel(){
        console.log(this._skillLevel);
        
    }
}

const ninja = new Ninja()
console.log(typeof ninja._skillLevel)  // underfined

ninja.skillLevel = 10;
console.log(ninja.skillLevel)