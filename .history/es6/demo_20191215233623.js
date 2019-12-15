function* WeaponGenerator() {  // 通过在关键字function 后面添加星号*定义生成器函数
    yield "Katana";
    yield "Wakizashi";
    yield "Kusarigama";
}
for (let weapon of WeaponGenerator()) {
    console.log(weapon !== undefined, weapon);
}