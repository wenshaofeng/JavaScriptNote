function* WeaponGenerator2() {
    yield "Katana";
    yield "Wakizashi";
}

const weaponsIterator = WeaponGenerator2();

const result = weaponsIterator.next();
console.log(typeof result === "object" && result.value ==="Katana" && !result.done, "Katana received!");

const result2 = weaponsIterator.next();
console.log(typeof result2 === "object" && result2.value === "Wakizashi" && !result2.done, "Wakizashi received!");

const result3 = weaponsIterator.next();
console.log(typeof result3 === "object" && result3.value === undefined && result3.done, "There are no more results");
