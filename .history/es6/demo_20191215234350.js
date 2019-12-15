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
    console.log(warrior !== null, warrior);
}