// 实现内置的 getter 和 setter ，控制私有对象属性的访问

/* 对象字面量与类中，
getter 和 setter 等方法与对象本身或者类本身不在同一作用域中 */


function Ninja() {
    let _skillLevel = 0;

    Object.defineProperty(this, 'skillLevel', {
        // 访问属性 skillLevel 时将隐式调用 get 方法
        /*   get: () => {
              return _skillLevel;
          },
           // 设置属性 skillLevel 时将隐式调用 set 方法
          set: (value) => {
              _skillLevel = value;
          } */

        /*  属性校验 */
        get: () => _skillLevel,
        set: value => {
            if (typeof value !== 'number') {
                throw  new TypeError ("必须传入Number类型！！")
            }
            console.log(this);

            _skillLevel = value
        }
    })

}

const ninja = new Ninja()
console.log(typeof ninja._skillLevel) // underfined


ninja.skillLevel = 10;
console.log(ninja.skillLevel)

try {
    console.log('try');
    // throw new TypeError('Hello', "someFile.js", 10);
    ninja.skillLevel = "傻逼";
    fail('should not be here')
    console.log(ninja.skillLevel)
} catch (error) {
    console.log(error.message);
}