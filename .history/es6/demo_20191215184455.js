{
    let arr = ['hello','world','baby'];
    let map = arr[Symbol.iterator]();
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
}

{
    let obj = {
        start:[1,3,2],
        end:[7,9,8],
        [Symbol.iterator]() {
            let self = this;
            let index = 0;
            let arr = self.start.concat(self.end);
            let len = arr.length;
            return {
               next() {
                if(index<len){
                    return {
                        value:arr[index++],
                        done:false
                   }
                }else {
                    return {
                      value:arr[index++],
                      done:true
                    }
                }
               }
            }
        }
    }
    for(let key of obj){
        console.log(key);
    }
}

function *createIterator() {
    yield 1
    yield 2
    yield 3
}

let iterator = createIterator()

console.log(iterator.next().value) // 1
console.log(iterator.next().value) // 2
console.log(iterator.next().value) // 3
console.log(iterator.next().value) 