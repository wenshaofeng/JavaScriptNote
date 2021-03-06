// 实现内置的 getter 和 setter ，控制私有对象属性的访问

/* 对象字面量与类中，
getter 和 setter 等方法与对象本身或者类本身不在同一作用域中 */

/* Object.defineProperty(obj, prop, descriptor)
obj
要在其上定义属性的对象。
prop
要定义或修改的属性的名称。
descriptor
将被定义或修改的属性描述符。
 */
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
    ninja.skillLevel = "傻逼";
    console.log(ninja.skillLevel) // 不会执行了
} catch (error) {
    console.log(error.message); // 必须传入Number类型！！
}
