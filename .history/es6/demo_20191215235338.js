function* NinjaGenerator2(action) {
    const imposter = yield ("Hattori " + action);  // 传递回的值将成为yield表达式的返回值 Hanzo
    console.log(imposter);  // Hanzo   2

    yield ("Yoshi (" + imposter + ") " + action);
}
const ninjaIterator = NinjaGenerator2("skulk");

const result4 = ninjaIterator.next();
console.log(result4.value);  // Hattori skulk   1

const result5 = ninjaIterator.next("Hanzo");
console.log(result5.value);  // Yoshi (Hanzo) skulk   3