{
    let arr = ['hello','world','baby'];
    let map = arr[Symbol.iterator]();
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
}