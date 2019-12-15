// 使用yield操作符将执行权交给另一个生成器
function* WarriorGenerator() {
    yield "Sun Tzu";
    yield* NinjaGenerator();
    yield "Genghis Khan";
}
function * NinjaGenerator() {
    yield "Hattori";
    yield "Yoshi";
}
for(let warrior of WarriorGenerator()) {
    console.log(warrior);
    
    console.log(warrior !== null, warrior);
}