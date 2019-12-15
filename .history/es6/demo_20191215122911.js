let node = {
    name: "混合",
    type: "number"
}

let a = {
    name: "a",
    type: 'b'
}

({
    name,
    type
} = node)

console.log(name);