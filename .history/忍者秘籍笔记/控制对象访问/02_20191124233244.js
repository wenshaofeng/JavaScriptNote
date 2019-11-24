const playerCollection = {
    players: ['杜兰特', '科比', '詹姆斯'],
    get firstPlayer () {
        console.log('getting firstPlayer')
        return this.players[0];
    },
    set firstPlayer (value) {
        console.log('setting firstPlayer')
        if(typeof value ==='string'){
            this.players[0] = value;
        }
       
    }
};

console.log(playerCollection.firstPlayer)


playerCollection.firstPlayer = '周琦'
playerCollection.firstPlayer = 2
// playerCollection.firstPlayer === '周琦' && (playerCollection.players[0] === 'chao');
console.log(playerCollection.firstPlayer)


