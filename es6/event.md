```js

// 工具函数 
const isNullOrUndefined = obj => obj === null || obj === undefined;


// 监听
// 设置事件触发类的Map映射:{ 事件类型: 事件处理函数 : 是否只能被触发一次 }
const _addListener = function (type, fn, once) {
    if (typeof fn !== 'function') {
        throw new TypeError('fn must be a function');
    }

    // 是否执行一次就取消订阅(取消观察)
    fn.once = !!once

    // 获取对应事件名称的函数清单
    const fns = this._events.get(type)
    if (!fns) {
        this._events.set(type, fn);
    } else if (fns && typeof fns === 'function') {
        // 如果handler是函数说明只有一个监听者
        // 再多一个个监听者我们需要用数组储存
        this._events.set(type, [fns, fn]);
    } else {
        // 已经有多个监听者,那么直接往数组里push函数即可
        fns.push(fn)
    }

};



class EventEmeitter {
    constructor() {
        this._events = this._events || new Map();
        this._maxListeners = this._maxListeners || 10;
    }
    addListener(type, fn) {
        return _addListener.apply(this, [type, fn])
    }
    on(type, fn) {
        return this.addListener(type, fn)
    }

    once(type, fn) {
        return _addListener.apply(this, [type, fn, true])
    }
    // 移除事件监听器
    removeListener(type, fn) {
        if (typeof fn !== 'function') {
            throw new Error('fn must be a function');
        }
        const handler = this._events.get(type); // 获取对应事件名称的函数清单
        if (!Array.isArray(handler)) {
            this._events.delete(type, fn);
        } else { // 如果handler是数组
            let postion;
            for (let i = 0; i < handler.length; i++) {
                if (handler[i].name === fn.name) {
                    postion = i;
                    break
                } else {
                    postion = -1;
                }
            }
            // 如果找到匹配的函数,从数组中清除
            if (postion !== -1) {
                handler.splice(postion, 1);
                // 如果清除后只有一个函数,那么取消数组
                if (handler.length === 1) {
                    this._events.set(type, handler[0]);
                }
            } else {
                return this;
            }
        }
    };
    // 移除指定事件类型的所有事件监听器
    removeAllListener(type) {
        
        if(isNullOrUndefined(type)){ // 如果不传事件类型，默认全都移除
            this._events = new Map()
            return
        }
        const handler = this._events.get(type)
        this._events.delete(type);
    }
    /**
     * @description: 触发器,被观察的对象
     * @param {type} type [事件的类型]
     * @param {type} args [事件对应执行函数的参数]
     * @return: 
     */
    emit(type, ...args) {
        let handler;
        handler = this._events.get(type);


        if (isNullOrUndefined(handler)) return false;

        if (Array.isArray(handler)) {
            // 如果是一个数组说明有多个监听者,需要依次此触发里面的函数
            for (let i = 0; i < handler.length; i++) {
                if (args.length > 0) {
                    handler[i].apply(this, args);
                } else {
                    handler[i].call(this);
                }
            }
        } else { // 单个函数的情况可以直接触发
            Reflect.apply(handler, this, args);
            // if (args.length > 0) {
            //     handler.apply(this, args);
            // } else {
            //     handler.call(this);
            // }
        }

        // 如果有once ， 执行完接触监听器
        if (handler.once) {

            this.removeListener(type, handler)
        }
        return true;
    };
}








/******** 测试 ******/

// 创建触发器实例
const emitter = new EventEmeitter();

// 添加监听的事件
emitter.addListener('arson', function expel(man) {
    console.log(`expel ${man}`);
});
// 添加监听的事件
emitter.addListener('arson', function kill(man) {
    console.log(`kill ${man} `);

});
// 添加监听的事件
emitter.addListener('arson', function save(man) {
    console.log(`save ${man} `);

});
// 添加监听的事件
emitter.addListener('arsons', function save(man) {
    console.log(`saves ${man} `);

});
// // 添加监听的事件
// emitter.addListener('arson', (man) => {
//     console.log(`love ${man}`);
// });
// // 添加监听的事件
// emitter.on('arson', (man) => {
//     console.log(`save 那个 ${man}`);
// });

emitter.emit('arson', '科比')
emitter.emit('arsons', '科比')


emitter.removeAllListener()
// 添加监听的事件
emitter.addListener('arsons', function save(man) {
    console.log(`saves ${man} `);

});
emitter.emit('arson', '詹姆斯')
emitter.emit('arsons', '詹姆斯')

```