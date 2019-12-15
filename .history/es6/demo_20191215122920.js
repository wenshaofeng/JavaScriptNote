let node = {
    name: "混合",
    type: "number"
}

let a = {
    name: "aaa",
    type: 'b'
}

({
    name,
    type
} = node)

console.log(name);