// 对象字面量
/* const playerCollection = {
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

console.log(playerCollection.firstPlayer) */

// ES6 的 Class
class leecollections {
    constructor () {
        this.lees = [ 'sss', 'eee', 'ddd'];
    }
    get firstlee () {
        return this.lees[0]
    }
    set firstlee (value) {
        this.lees[0] = value
    }
}

const lee = new leecollections() 
console.log(lee.firstlee)

lee.firstlee = 'chao'
console.log(lee.firstlee)