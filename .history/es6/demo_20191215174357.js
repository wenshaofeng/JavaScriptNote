{
    let arr = ['hello','world'];
    let map = arr[Symbol.iterator]();
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
}