// const playerCollection = {
//     players: ['杜兰特', '科比', '詹姆斯'],
//     get firstPlayer () {
//         console.log('getting firstPlayer')
//         return this.players[0];
//     },
//     set firstPlayer (value) {
//         console.log('setting firstPlayer')
//         this.players[0] = value;
//     }
// };

// console.log(playerCollection.firstPlayer)

// playerCollection.firstPlayer === 'chao' && (playerCollection.players[0] === 'chao');
// console.log(playerCollection.firstPlayer)


const leeCollection = {
    lees: ['Yoshi', 'Bruss', 'Kuma'],
    get firstLee () {
        console.log('getting firstLee')
        return this.lees[0];
    },
    set firstLee (value) {
        console.log('setting firstLee')
        this.lees[0] = value;
    }
};

console.log(leeCollection.firstLee)

leeCollection.firstLee === 'chao' && (leeCollection.lees[0] === 'chao');
console.log(leeCollection.firstLee)
